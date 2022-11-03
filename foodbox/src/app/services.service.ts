import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }

  //Registration
  public userRegistration(user:any){
    return this.http.post("http://localhost:8083/user/register",user,{responseType:'text' as 'json'})
  }
//Login
  public userLogin(user:any){
    return this.http.post("http://localhost:8083/login",user,{responseType:'text' as 'json'})
  }
  public adminLogin(user:any){
    return this.http.post("http://localhost:8083/adminlogin",user,{responseType:'text' as 'json'})
  }

  //Food
  public addFood(food:any){
    return this.http.post("http://localhost:8083/addFood",food,{responseType:'text' as 'json'})
  }
  public getFood(){
    return this.http.get("http://localhost:8083/allFood");
  }
  public deleteFood(fid:any){
    return this.http.delete("http://localhost:8083/delete/"+fid);
  }
  public findByName(fname:any){
    return this.http.get("http://localhost:8083/byName/"+fname);
  }
  public findByPrice(price:any){
    return this.http.get("http://localhost:8083/byPrice/"+price);
  }
  //record
  public buyByCustomer(id:any){
    return this.http.get("http://localhost:8083/record/"+id);
  }
  public getCusromerRecord(){
    return this.http.get("http://localhost:8083/getReord/customer");
  }
  public getRecord(){
    return this.http.get("http://localhost:8083/allRecord");
  }
}
