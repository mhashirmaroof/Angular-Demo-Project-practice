import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BodyComponent } from './body/body.component';
import { ViewcatagoriesComponent } from './viewcatagories/viewcatagories.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'animate.css';
import { AddcatagoryComponent } from './addcatagory/addcatagory.component';
import { AddviewComponent } from './addview/addview.component';
import { ViewsServicesComponent } from './views-services/views-services.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    ViewcatagoriesComponent,
    AddcatagoryComponent,
    AddviewComponent,
    ViewsServicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
