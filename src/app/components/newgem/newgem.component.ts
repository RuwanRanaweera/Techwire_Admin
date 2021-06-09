import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {GemsService} from '../../gems.service';

@Component({
  selector: 'app-newgem',
  templateUrl: './newgem.component.html',
  styleUrls: ['./newgem.component.css']
})
export class NewgemComponent implements OnInit {

  @ViewChild('gemprice') gemprice: ElementRef;
  @ViewChild('gemtime') gemtime: ElementRef;

  edit=false;
  constructor(private gemsService: GemsService) { }

  ngOnInit() {
   this.fetchGems();
  }

  goToLink(url: string){
    window.open(url, "_blank");
}

  gemList;
  gemListApprove=[];
  fetchGems(){
    this.gemsService
    .getGems()
    .subscribe((res:any)=>{
      console.log(res.data);
      console.log('Data requested...');

      this.gemList=res.data;

      this.gemList.map(gem=>{
      return gem.edit=false;
      })
      console.log(this.gemList);
      let indx=0;
      this.gemList.forEach((gem)=>{
        if(!gem.approve){
          this.gemListApprove[indx] =gem;
          indx++;
        }
      });
    });
  }
  deleteGem(gemID){
    this.gemsService.deleteGem(gemID).subscribe(()=>{
      this.fetchGems();
    });
   }
   editGem(gemID){
    this.gemsService.approveGem(gemID).subscribe((res)=>{
      alert("successfully approve");
      this.fetchGems();
    },(err)=>{
      alert("something wrong");
    });

   }

   onSubmit(gem){

     //console.log(this.gemprice.nativeElement.value);
     this.gemsService.updategem(gem.gemID,this.gemprice.nativeElement.value,this.gemtime.nativeElement.value).subscribe((res)=>{
       console.log(res);
       gem.edit=false;
this.edit=false;
        this.fetchGems();


     })
   }

   onEdit(gem){
this.edit=true;
    gem.edit=true;
   }


}
