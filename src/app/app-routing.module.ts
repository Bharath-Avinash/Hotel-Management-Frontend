import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingAppointmentComponent } from './booking-appointment/booking-appointment.component';
import { DoctersComponent } from './docters/docters.component';
import { HomeComponent } from './home/home.component';
import { NewDoctorComponent } from './new-doctor/new-doctor.component';
import { PatientLoginComponent } from './patient-login/patient-login.component';
import { PatientSignupComponent } from './patient-signup/patient-signup.component';
import { PatientsComponent } from './patients/patients.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'docters', component: DoctersComponent },
  { path: 'booking-appointment', component: BookingAppointmentComponent },
  { path: 'patient-login', component: PatientLoginComponent },
  { path: 'patient-signup', component: PatientSignupComponent },
 { path: 'New-Doctor', component: NewDoctorComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
