import { Component, OnInit } from '@angular/core';
import {GemsService} from '../../gems.service';

@Component({
  selector: 'app-biding',
  templateUrl: './biding.component.html',
  styleUrls: ['./biding.component.css']
})
export class BidingComponent implements OnInit {

  constructor(private gemsService: GemsService) { }

  ngOnInit() {
    this.fetchBid();
  }
  bidList;


  fetchBid(){
    this.gemsService
    .getBid()
    .subscribe((res:any)=>{
      console.log(res.data);
      console.log('Data requested...');

      this.bidList=res.data;


    });
  }

}
