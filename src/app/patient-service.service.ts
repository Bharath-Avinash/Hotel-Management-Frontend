import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from './Patient';

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {

  private patientArray :Patient[]=[{

    patientId :1,
    patientName : "Mahesh",
    age :18,
    gender :"Male",
    visitedDoctor :{ name :"smith",
    age :35,
    gender:"male",
    specialistField:"Nephrologists",
    numberOfPatientAttended:10},
    dateOfVisit :"21/03/2022",
    prescription :"fever"

  },
  {

    patientId :2,
    patientName : "kishore",
    age :22,
    gender :"Male",
    visitedDoctor :{ name :"smith",
    age :35,
    gender:"male",
    specialistField:"Nephrologists",
    numberOfPatientAttended:10},
    dateOfVisit :"21/03/2022",
    prescription :"fever"

  }];

  constructor(private http:HttpClient) { }

  

  // public addPatient (patient:Patient){

  //   this.patientArray.push(patient);
  // }


  public savePatient(patient:Patient){

    return this.http.post("http://localhost:9191/patient",patient, {responseType : "text" as "json"});
  }

    public getPatientById(id:String){

      return this.http.get("http://localhost:9191/patient/"+id);
    }


}
