import { Component, OnInit } from '@angular/core';
import { Vendor } from './vendor';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table'

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})

export class VendorsComponent implements OnInit {
vendors : Vendor[] = [{
  id:1,
  name:'Puji',
  address:'Jl Pahlawan',
  phone:'08813272107',
  bankaccount:'CIMB Niaga',
  createuser:'puji',
  createdate:new Date()
}]
dataSource = new MatTableDataSource(this.vendors);
displayedColumns = ['name','address',  'phone', 'bankaccount'];
vnd:Observable<Vendor[]>;
  constructor(private http :HttpClient) {
    this.vnd = this.http.get<Vendor[]>('http://localhost:2018/getvendors');
    this.vnd.subscribe(
      data=>{
        console.log("Vendor Data:",data);
        this.vendors = data;
      },
      err=>{
        console.log("Error Vendor Data",err)
      })
   }

  ngOnInit() {
  }

}
