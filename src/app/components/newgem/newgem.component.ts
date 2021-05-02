import { Component, OnInit } from '@angular/core';
import {GemsService} from '../../gems.service';

@Component({
  selector: 'app-newgem',
  templateUrl: './newgem.component.html',
  styleUrls: ['./newgem.component.css']
})
export class NewgemComponent implements OnInit {

  constructor(private gemsService: GemsService) { }

  ngOnInit() {
   this.fetchGems();
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


}
