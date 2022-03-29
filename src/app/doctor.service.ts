import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctor } from './Doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {


  doctorArr  !:any[];


//   [{
//     name :"mike",
//     age :45,
//     gender:"male",
//     specialistField:"Nephrologists",
//     numberOfPatientAttended:25
//   },{ name :"david",
//   age :45,
//   gender:"male",
//   specialistField:"ortho",
//   numberOfPatientAttended:21},
  
// { name :"smith",
// age :35,
// gender:"male",
// specialistField:"Nephrologists",
// numberOfPatientAttended:10}]


  constructor(private http : HttpClient) { }

  
  public saveDoctor(doctor:Doctor){
    return this.http.post("http://localhost:9191/doctor",doctor, {responseType : "text" as "json"});
  }

  



  getDoctorArr(){
   

    return this.http.get("http://localhost:9191/doctor/get-all");

    
  }

  public removeDoctor( doctorName:String){

     return this.http.get("http://localhost:9191/doctor/delete/"+doctorName);
  }
}
