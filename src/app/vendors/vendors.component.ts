import { Component, OnInit } from '@angular/core';
import { Vendor } from './vendor';
@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit {
vendor : Vendor = {
  id:1,
  name:'Puji',
  address:'',
  phone:'',
  bankaccount:'',
  createuser:'',
  createdate:new Date()
}
  constructor() { }

  ngOnInit() {
  }

}
