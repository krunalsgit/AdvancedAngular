import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleRoutingModule } from './sample-routing.module';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    SampleRoutingModule
  ]
})
export class SampleModule { }
