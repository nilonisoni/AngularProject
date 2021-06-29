import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CowinComponent } from './cowin/cowin.component';
import { HomeComponent } from './home/home.component';
import { MedicineComponent } from './medicine/medicine.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "cowin", component:CowinComponent},
  {path: "medicine", component:MedicineComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
