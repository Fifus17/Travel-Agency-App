import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainScreenComponent } from './Components/main-screen/main-screen.component';
import { TripsComponent } from './Components/trips/trips.component';
import { HistoryComponent } from './Components/history/history.component';
import { LoginViewComponent } from './Components/login-view/login-view.component';
import { RegisterViewComponent } from './Components/register-view/register-view.component';
import { CartComponent } from './Components/cart/cart.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { AdminGuard } from './Authentication Guards/admin.guard';
import { ManageTripsComponent } from './Components/manage-trips/manage-trips.component';
import { ManagerGuard } from './Authentication Guards/manager.guard';
import { ClientGuard } from './Authentication Guards/client.guard';
import { LoggedGuard } from './Authentication Guards/logged.guard';

const routes: Routes = [
  { path: '', component: MainScreenComponent },
  { path: 'home', component: MainScreenComponent },
  { path: 'trips', component: TripsComponent },
  { path: 'history', component: HistoryComponent, canActivate: [ClientGuard]},
  { path: 'cart', component: ShoppingCartComponent, canActivate: [ClientGuard]},
  { path: 'login', component: LoginViewComponent},
  { path: 'register', component: RegisterViewComponent},
  { path: 'admin', component: AdminDashboardComponent, canActivate: [AdminGuard]},
  { path: 'manager', component: ManageTripsComponent, canActivate: [AdminGuard, ManagerGuard]},
  { path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
