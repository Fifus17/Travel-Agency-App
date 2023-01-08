import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Trip } from 'src/app/Interfaces/ITrip';
import { DatabaseConnectionService } from 'src/app/Services/database-connection.service';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.css']
})

export class AddModalComponent {
  
  constructor (private db: DatabaseConnectionService) {}
  error: boolean = false;
  lastId: number = 0;
  Ids: number[] = [];

  ngOnInit(): void {
    this.db.getTrips().subscribe((change) => {
      for (let trip of change) {
        this.Ids.push(trip.id);
      }
      this.lastId = Math.max(...this.Ids);
    });
  }

  form = new FormGroup({
    title: new FormControl('', [
      Validators.required,
    ]),
    country: new FormControl('', [
      Validators.required,
    ]),
    places: new FormControl('', [
      Validators.required,
    ]),
    price: new FormControl('', [
      Validators.required,
    ]),
    dayOut: new FormControl('', [
      Validators.required,
    ]),
    dayIn: new FormControl('', [
      Validators.required,
    ]),
    description: new FormControl('', [
      Validators.required,
    ]),
    image1: new FormControl('', [
      Validators.required,
    ]),
    image2: new FormControl('', []),
    image3: new FormControl('', []),
  });

  submit(){
    if (!this.form.valid) {
      this.error = true;
      return;
    }
    this.error = false;
    if(this.form.value.title != null && this.form.value.country != null && this.form.value.places != null && this.form.value.price != null && this.form.value.dayOut != null && this.form.value.dayIn != null && this.form.value.description != null && this.form.value.image1 != null && this.form.value.image2 != null && this.form.value.image3 != null) {
      let trip = {
        id: this.lastId + 1,
        title: this.form.value.title,
        country: this.form.value.country,
        maxPlaces: parseInt(this.form.value.places),
        places: parseInt(this.form.value.places),
        price: parseInt(this.form.value.price),
        dayOut: this.form.value.dayOut,
        dayIn: this.form.value.dayIn,
        description: this.form.value.description,
        image: [this.form.value.image1, this.form.value.image2, this.form.value.image3],
        reviews: [],
      } as Trip;
      this.db.addTrip(trip);
    }
    this.form.reset();
  }

}
