import { Injectable } from '@angular/core';
//import { HttpClient, HttpHeaders } from '@angular/common/http'
//import { Observable } from 'rxjs';
//import { Vendor } from '../app/vendors/vendor'
@Injectable({
  providedIn: 'root'
})
export class VendorService {
  //vnd:Observable<Vendor[]>;
  constructor() {
    //constructor(private http :HttpClient) {
    //console.log("Get Vendors invoked");
    /*this.vnd = this.http.get<Vendor[]>('http://localhost:2018/getvendors');
    this.vnd.subscribe(
      data=>{
        console.log("Vendor Data:",data);
      },
      err=>{
        console.log("Error Vendor Data",err)
      }
    )*/
   }
}
