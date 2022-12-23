import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainScreenComponent } from './Components/main-screen/main-screen.component';
import { TripsComponent } from './Components/trips/trips.component';
import { HistoryComponent } from './Components/history/history.component';
import { TripDetailsComponent } from './Components/trip-details/trip-details.component';
import { Trip2Component } from './Components/trip2/trip2.component';
import { CommentComponent } from './Components/comment/comment.component';

const routes: Routes = [
  { path: '', component: MainScreenComponent },
  { path: 'home', component: MainScreenComponent },
  { path: 'trips', component: TripsComponent },
  { path: 'history', component: HistoryComponent},
  { path: 'details', component: Trip2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
