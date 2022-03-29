import { Doctor } from "./Doctor";

export class Patient { 
    patientId!:number;
    patientName !: string;
    age !:number;
    gender !:String
    visitedDoctor !:Doctor;
    dateOfVisit !:String;
    prescription !:String;



    constructor() {
    }
}