import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Doctor } from '../Doctor';
import { DoctorService } from '../doctor.service';
import { Patient } from '../Patient';
import { PatientServiceService } from '../patient-service.service';

@Component({
  selector: 'app-patient-signup',
  templateUrl: './patient-signup.component.html',
  styleUrls: ['./patient-signup.component.css']
})
export class PatientSignupComponent implements OnInit {

  docArray!:any;
  patient !:any;
  pat!:any;

  public signupForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router,private doctorService :DoctorService,private patientService:PatientServiceService) { }

  ngOnInit(): void {

    this.doctorService.getDoctorArr().subscribe(data=>this.docArray=data);
    this.signupForm = this.formBuilder.group({
      patientName: [''],
      age: [''],
      gender:[''],
      visitedDoctor:[{}],
      dateOfVisit: ['']
      
    })

    
  }
  signUp() {

    this.patient=this.signupForm.value;
    
    console.log(this.patient);
    this.patientService.savePatient(this.patient)
      .subscribe(res => {  this.pat = res;

        console.log(this.pat);
         alert(res);
         
        
      }, err => {
        alert("something went wrong")
      })
      this.signupForm.reset();
  }

}
