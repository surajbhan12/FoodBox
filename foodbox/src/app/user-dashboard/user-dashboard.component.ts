import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  foods:any;
  price:any;
  message:any;
  constructor(private service:ServicesService,private route:Router) { }

  ngOnInit(): void {
    let resp=this.service.getFood();
    resp.subscribe((data:any)=>this.foods=data);
  }
  public findByPrice(){
    let resp=this.service.findByPrice(this.price);
    resp.subscribe((data:any)=>this.foods=data);
  }
  public buy(id:number,price:number){
    let resp=this.service.buyByCustomer(id);
    alert("Puchesed");
    resp.subscribe((data:any)=>this.message=data);
  }
}
