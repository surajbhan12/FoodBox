import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from 'src/Food';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  fname:any;
  foods:any;
  food:Food =new Food();
  constructor(private service:ServicesService,private route:Router) { }

  ngOnInit(): void {
    let resp=this.service.getFood();
    resp.subscribe((data:any)=>this.foods=data);
  }
  public addFood(){
    this.route.navigate(['/addFood']);
  }
  public deleteFood(id:number){
    let resp=this.service.deleteFood(id);
    resp.subscribe((data:any)=>this.foods=data);
  }
  public findByName(){
    let resp=this.service.findByName(this.fname);
    resp.subscribe((data:any)=>this.foods=data);
  }
}
