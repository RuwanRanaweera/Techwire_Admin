import { Component, OnInit } from '@angular/core';

import {Router, ActivatedRoute } from '@angular/router';
import { FormGroup,FormBuilder,Validator, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material';

import { user } from '../../user.model';
import {GemsService} from '../../gems.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id:String;
  user:any={};
  updateForm:FormGroup;

  constructor(private gemsService: GemsService, private router:Router,private route:ActivatedRoute  , private snackBar:MatSnackBar,private fb:FormBuilder) {
this.createForm();

  }
createForm(){
  this.updateForm=this.fb.group({
    price:['',Validators.required]

    });
  }
  ngOnInit() {
    this.route.params.subscribe(params=>{
this.id=params.gemID;
this.gemsService.getGem(this.id).subscribe(res=>{
  this.user=res;
  this.updateForm.get('price').setValue(this.user.price);

})
    });
  }

  // updateUser(price){
  //     this.gemsService.updategem(this.id,price).subscribe(()=>{
  //       this.snackBar.open('Updated Successfully','Ok',{duration:3000});
  //   });
  // }


}
