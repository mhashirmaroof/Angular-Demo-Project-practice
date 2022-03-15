import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { ViewcatagoriesComponent } from './viewcatagories/viewcatagories.component';

const routes: Routes = [
  // { path:'viewcatagories', component : ViewcatagoriesComponent},
  // { path:'body', component : BodyComponent},
  // { path: '', redirectTo:'/body', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
