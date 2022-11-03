import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/User';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  message:any;
  showUser !:boolean;
  user:User=new User();
  constructor(private service:ServicesService,private route:Router) { }

  ngOnInit(): void {
  }

  public loginNow(){
    let resp=this.service.userLogin(this.user);
    resp.subscribe((data:any)=>this.message=data);
    if(this.message.match('wrong Credentials')){
      this.showUser=false;
    }else{
      this.route.navigate(['/userdashboard']);
      this.showUser=true;
    }
  }

}
