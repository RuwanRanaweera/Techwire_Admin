import { Component, OnInit } from '@angular/core';
import { SUserService } from '../../s-user.service';

@Component({
  selector: 'app-meeeting',
  templateUrl: './meeeting.component.html',
  styleUrls: ['./meeeting.component.css']
})
export class MeeetingComponent implements OnInit {

  constructor(private userService: SUserService) { }

  ngOnInit() {
    this.fetchMeeting();
  }
  meetList;
  meetingApprove=[];
  fetchMeeting(){
    this.userService
    .getMeet()
    .subscribe((res:any)=>{
      console.log(res.data);
      console.log('Data requested...');

      this.meetList=res.data;


      let indx=0;
      this.meetList.forEach((meet)=>{
        if(!meet.approve){
          this.meetingApprove[indx] =meet;
          indx++;
        }
      });
    });
  }

  deleteMeet(meetingId){
    this.userService.deleteMet(meetingId).subscribe(()=>{
      this.fetchMeeting();
    });
   }

   editMeet(meetingId){
    this.userService.approveMet(meetingId).subscribe((res)=>{
      alert("successfully approve");
      this.fetchMeeting();
    },(err)=>{
      alert("something wrong");
    });

   }


}
