import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DoctersComponent } from './docters/docters.component';
import { PatientsComponent } from './patients/patients.component';
import { BookingAppointmentComponent } from './booking-appointment/booking-appointment.component';
import { PatientSignupComponent } from './patient-signup/patient-signup.component';
import { PatientLoginComponent } from './patient-login/patient-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewDoctorComponent } from './new-doctor/new-doctor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DoctersComponent,
    PatientsComponent,
    BookingAppointmentComponent,
    PatientSignupComponent,
    PatientLoginComponent,
    NewDoctorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
