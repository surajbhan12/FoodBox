import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminnavbar',
  templateUrl: './adminnavbar.component.html',
  styleUrls: ['./adminnavbar.component.css']
})
export class AdminnavbarComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  public logout(){
    this.route.navigate(['/admin']);
  }
}
