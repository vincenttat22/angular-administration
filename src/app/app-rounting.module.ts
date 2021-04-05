import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './components/home.component';
import {PricingComponent} from './components/pricing.component';
import {FeaturesComponent} from './components/features.component';
import {ContactComponent} from './components/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Pricing', component: PricingComponent },
  { path: 'Features', component: FeaturesComponent},
  { path: 'Contact', component: ContactComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}

export const routingComponents = [HomeComponent, PricingComponent, FeaturesComponent, ContactComponent];
