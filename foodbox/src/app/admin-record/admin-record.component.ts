import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-admin-record',
  templateUrl: './admin-record.component.html',
  styleUrls: ['./admin-record.component.css']
})
export class AdminRecordComponent implements OnInit {
  records:any;
  constructor(private service:ServicesService) { }

  ngOnInit(): void {
    let resp=this.service.getRecord();
    resp.subscribe((data:any)=>this.records=data);
  }

}
