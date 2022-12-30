import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Trip } from 'src/app/Interfaces/ITrip';
import { DatabaseConnectionService } from 'src/app/Services/database-connection.service';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {

  @Input('id') id: number | undefined;
  thisTrip: Trip | undefined;
  tripsSubscription: Subscription | undefined;
  image0: string = "";
  image1: string = "";
  image2: string = "";
  bagno: string = "staticBackdropEd";
  error: boolean = false;

  constructor(private db: DatabaseConnectionService) { }

  ngOnInit(): void {
    this.tripsSubscription = this.db.getTrips().subscribe((change) => {
      for (let trip of change) {
        if(trip.id == this.id) {
          this.thisTrip = trip;
          this.image0 = trip.image[0];
          this.image1 = trip.image[1];
          this.image2 = trip.image[2];
        }
      }
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

  submit() {
    if (!this.form.valid) {
      this.error = true;
      return;
    }
    this.error = false;
      if(this.id != null && this.form.value.title != null && this.form.value.country != null && this.form.value.places != null && this.form.value.price != null && this.form.value.dayOut != null && this.form.value.dayIn != null && this.form.value.description != null && this.form.value.image1 != null && this.form.value.image2 != null && this.form.value.image3 != null) {
        let newTrip = {
          id: this.id,
          title: this.form.value.title,
          country: this.form.value.country,
          places: parseInt(this.form.value.places),
          price: parseInt(this.form.value.price),
          dayOut: this.form.value.dayOut,
          dayIn: this.form.value.dayIn,
          description: this.form.value.description,
          image: [this.form.value.image1, this.form.value.image2, this.form.value.image3],
          reviews: [],
        } as Trip;
      this.db.modifyTrip(newTrip);
      this.form.reset();
      }
    }
  }

