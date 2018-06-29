import { Component, OnInit,ViewChild } from '@angular/core';
import { VendorService } from './../vendor.service'
import { Vendor } from './vendor';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource, MatSort } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table'

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})

export class VendorsComponent implements OnInit {
vendors : Vendor[]
dataSource = new MatTableDataSource(this.vendors);
@ViewChild(MatSort) sort:MatSort
displayedColumns = ['name','address',  'phone', 'bankaccount'];
  constructor(private vendorService :VendorService) {
    this.vendorService.getvendors(vendors=>{
      console.log("Vendors",vendors)
      this.vendors = vendors
    })
   }

  ngOnInit() {
    this.dataSource.sort = this.sort
  }

}
