import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-user-record',
  templateUrl: './user-record.component.html',
  styleUrls: ['./user-record.component.css']
})
export class UserRecordComponent implements OnInit {
  records:any;
  constructor(private service:ServicesService,private route:Router) { }

  ngOnInit(): void {
    let resp=this.service.getCusromerRecord();
    resp.subscribe((data:any)=>this.records=data);
  }

}
