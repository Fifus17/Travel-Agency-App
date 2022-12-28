import { Injectable } from '@angular/core';
import { Trip } from '../Interfaces/ITrip';


@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor() { }

  Data: Trip[] = [
    {
      id: 1,
      title: "Hawaii Paradise",
      country: "Hawaii",
      dayOut: "2021-08-01",
      dayIn: "2021-08-15",
      price: 2400,
      places: 5,
      description: "Hawaii is a state of the United States of America. It is the only state located in Oceania and the only one composed entirely of islands. It is the northernmost island group in Polynesia, occupying most of an archipelago in the central Pacific Ocean. Hawaii is the 8th-smallest, the 11th-least populous, and the 13th-least densely populated of the 50 United States. The state capital and largest city is Honolulu on the island of Oahu. The date of the state's admission to the Union is August 21, 1959.",
      image: ["https://content.api.news/v3/images/bin/ded3be00f6965dcfa60d91c42563592d?width=1044"],
      reviews: []
    },
    {
      id: 4,
      title: "Safari",
      country: "Kenya",
      dayOut: "2023-08-01",
      dayIn: "2023-09-01",
      price: 1800,
      places: 12,
      description: "A safari is an overland journey, usually a trip by tourists to Africa. The word is the Swahili word for journey. In the past, the trip was often a big-game hunt, but today, safari often refers to trips to observe and photograph wildlife, as well as other cultural and historical attractions. The term safari can apply to trips by tourists, but it is often applied to trips by professionals, such as photographers, naturalists, and hunters.",
      image: ["https://media.cntraveler.com/photos/5ea883674e5fff00083ccef1/master/pass/Safari-GettyImages-143917249.jpg"],
      reviews: []
    }
  ];

  getHistoryData(): Trip[] {
    return this.Data;
  }
}
