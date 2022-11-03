import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/User';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {
  message:any;
  user:User=new User();
  constructor(private service:ServicesService,private route:Router) { }

  ngOnInit(): void {
  }
  public userRegister(){
    let resp=this.service.userRegistration(this.user);
    resp.subscribe((data:any)=>this.message=data);
    alert("Registered SuccessFully");
    this.route.navigate(['/user']);
  }
}
