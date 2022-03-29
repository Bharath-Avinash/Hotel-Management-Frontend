import { Component, OnInit } from '@angular/core';
import { Patient } from '../Patient';
import { PatientServiceService } from '../patient-service.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  

  patient !:any;
  constructor(private patientService :PatientServiceService) { }

  ngOnInit(): void {
  }

  
  findPatientByPatientId(id:String){

   


 this.patientService.getPatientById(id).subscribe(data=>this.patient=data,err=>alert("No Patient found"));
 console.log(this.patient);

  }


}
