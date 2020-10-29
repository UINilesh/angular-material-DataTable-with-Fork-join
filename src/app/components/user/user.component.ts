import { Component, OnInit } from '@angular/core';
import { SharedataService } from '../../services/sharedata.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private service:SharedataService) { }
  userdatafetch:any=[];
  ngOnInit(): void {
    this.service.getData().subscribe(userdata => {
       this.userdatafetch = userdata[0];
       console.log(this.userdatafetch = userdata[0]);
    })
  }
}
