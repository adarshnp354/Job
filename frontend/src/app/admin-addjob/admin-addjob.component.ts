import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin-addjob',
  templateUrl: './admin-addjob.component.html',
  styleUrls: ['./admin-addjob.component.css']
})
export class AdminAddjobComponent implements OnInit {
addJobDetails={
  jobid:"",
  title:"",
  posteddate:"",
  role:"",
  responsibility:"",
  companyname:"",
  experience:"",
  salary:"",
  noofposition:"",
  location:"",
  skills:"",
  qualification:"",
  degree:"",
  companyinfo:"",
  employmenttype:"",
  industrytype:"",
  keyword:"",
  jobdescription:""
}
  constructor() { }
  
  post(){
    this.addJobDetails
  }

  ngOnInit(): void {
  }

}
