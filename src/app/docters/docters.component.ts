import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Doctor } from '../Doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-docters',
  templateUrl: './docters.component.html',
  styleUrls: ['./docters.component.css']
})
export class DoctersComponent implements OnInit {


  docArray :any;

doc:Doctor={
  name :"-",
  age :0,
  gender:"-",
  specialistField:"-",
  numberOfPatientAttended:0
};
  
  form = new FormGroup({  
    doctor: new FormControl('', Validators.required)  
  });  



  constructor(private doctorService : DoctorService) { }

  ngOnInit(): void {

     this.doctorService.getDoctorArr().subscribe(data=>this.docArray=data);
    
  }

  public removeUser(doc : any){
    

         let response= this.doctorService.removeDoctor(doc.name);
         response.subscribe(res=>alert("delete done"),err=>console.log(err))
         this.doc={
          name :"-",
          age :0,
          gender:"-",
          specialistField:"-",
          numberOfPatientAttended:0
        };

        const index = this.docArray.indexOf(doc);
// find Index of specific number
if(index != -1){
 this. docArray.splice(index, 1); // remove number using index
}
        console.log(this.docArray);
  }

  get f(){  
    return this.form.controls;  
  }  

  public submit() {
    console.log(this.form.value);
    
  // this.doc=this.docArray.find(doct =>doct.name===this.form.value);
  this.doc=this.form.value.doctor;


  
    console.log(this.doc);
    
     

  }
  

}
