import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiUserService } from '../api-user.service';
import { Identity } from '../identity';
import { MeterDetails } from '../meter-details';
import {MatDialog} from '@angular/material/dialog'
import { ProviderDetails } from '../provider-details';
import { ProviderComponent } from '../provider/provider.component';
import { AddMeterComponent } from '../add-meter/add-meter.component';
@Component({
  selector: 'app-smart-meter',
  templateUrl: './smart-meter.component.html',
  styleUrls: ['./smart-meter.component.css'],
})

export class SmartMeterComponent implements OnInit {

  constructor(private api: ApiUserService ,private router : Router,public dialog: MatDialog) { }
  page: number = 1;
  limit: number = 5;
  userData : Identity = {id:'',userName:'',email:'',phone:null,password:'',role:''}
  provider : ProviderDetails = {name:'',chargesConception:0}
  userMeter: MeterDetails = {
    smartMeterId: '',
    userId: '',
    connectionStatus: '',
    provider: {name:'',chargesConception:null}
  }
  openDialog() {
    this.dialog.open(ProviderComponent,{width:'450px' },);
  }
  
  openMeterBox()
  {
    this.dialog.open(AddMeterComponent,{width:'450px',height:'300px' },);
  }
  
   
  form = new FormGroup({
    meter: new FormControl(''),
  });

  ngOnInit(): void {
   const a = sessionStorage.getItem("phoneNumber");
    this.api.getUser(a).subscribe((response) =>{
    this.userData = response
    console.log(this.userData);
   },
    (error:HttpErrorResponse) =>
    {
       const err =  error;
    })
  }
  show : boolean = false;
  
  find()
  {
   this.api.getMeter(this.form.value.meter).subscribe((response) => {
    this.userMeter = response;
    console.log(this.userMeter);
  })
  this.show = true; 
 }
 close()
 {
 this.show = false;
 }

}
