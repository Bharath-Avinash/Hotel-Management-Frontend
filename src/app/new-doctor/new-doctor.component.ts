import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Doctor } from '../Doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-new-doctor',
  templateUrl: './new-doctor.component.html',
  styleUrls: ['./new-doctor.component.css']
})
export class NewDoctorComponent implements OnInit {


  doctor !:Doctor;

  public signupForm !: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private doctorService :DoctorService) { }

  ngOnInit(): void {

    this.signupForm = this.formBuilder.group({
      name: [''],
      age: [''],
      gender:[''],
      specialistField:[''],
      numberOfPatientAttended: ['']
      
    })



  }


  signUp() {

    this.doctor=this.signupForm.value;
   

   let response= this.doctorService.saveDoctor(this.doctor)
    // this.http.post<any>("http://localhost:3000/signupUser", this.signupForm.value)
       .subscribe(res => {
         alert("Doctor Saved");},err => console.log(err));

         console.log(this.doctor);
         this.signupForm.reset();
    //     this.router.navigate(['patient-login']);
    //   }, err => {
    //     alert("something went wrong")
    //   })
  }

}
