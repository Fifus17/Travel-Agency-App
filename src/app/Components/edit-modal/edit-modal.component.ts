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
  trips: any[] = [];
  thisTrip: Trip | undefined;
  tripsSubscription: Subscription | undefined;

  constructor(private db: DatabaseConnectionService) { }

  ngOnInit(): void {
    this.tripsSubscription = this.db.getTrips().subscribe((change) => {
      this.trips = [];
      for (let trip of change) {
        this.trips.push({
          id: trip.id,
          title: trip.title,
          country: trip.country,
          dayOut: trip.dayOut,
          dayIn: trip.dayIn,
          price: trip.price,
          places: trip.places,
          image: trip.image,
          description: trip.description,
          reviews: trip.reviews,
        });
        if(trip.id == this.id) {
          this.thisTrip = {
            id: trip.id,
            title: trip.title,
            country: trip.country,
            dayOut: trip.dayOut,
            dayIn: trip.dayIn,
            price: trip.price,
            places: trip.places,
            image: trip.image,
            description: trip.description,
            reviews: trip.reviews,
          }
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
    image2: new FormControl('', [
      Validators.required,
    ]),
    image3: new FormControl('', [
      Validators.required,
    ]),
  });

  submit() {
    if (this.form.valid) {
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

}
