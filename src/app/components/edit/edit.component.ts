import { Component, OnInit } from '@angular/core';

import {Router, ActivatedRoute } from '@angular/router';
import { FormGroup,FormBuilder,Validator, Validators } from '@angular/forms';
 
import { MatSnackBar } from '@angular/material';

import { user } from '../../user.model';
import { SUserService } from '../../s-user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id:String;
  user:any={};
  updateForm:FormGroup; 

  constructor(private userService: SUserService, private router:Router,private route:ActivatedRoute  , private snackBar:MatSnackBar,private fb:FormBuilder) { 
this.createForm();

  }
createForm(){
  this.updateForm=this.fb.group({
    fullName:['',Validators.required],
    email:['',Validators.required],
    password:['',Validators.required]
    });
  }
  ngOnInit() {
    this.route.params.subscribe(params=>{
this.id=params.id;
this.userService.getUserById(this.id).subscribe(res=>{
  this.user=res;
  this.updateForm.get('fullName').setValue(this.user.fullName);
  this.updateForm.get('email').setValue(this.user.email);
  this.updateForm.get('password').setValue(this.user.password);
})
    });
  }

  updateUser(fullName,email,password){
      this.userService.updateUser(this.id,fullName,email,password).subscribe(()=>{
        this.snackBar.open('Updated Successfully','Ok',{duration:3000});
    });
  }


}
