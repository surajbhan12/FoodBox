import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from 'src/Food';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {
  food:Food=new Food();
  foods:any;
  constructor(private service:ServicesService,private route:Router) { }

  ngOnInit(): void {
  }
  public addFood(){
    let resp=this.service.addFood(this.food);
    resp.subscribe((data:any)=>this.foods=data);
    alert("Food added SuccessFully");
    this.route.navigate(['/admindashboard']);
  }
}
