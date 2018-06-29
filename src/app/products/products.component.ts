import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Product } from './product'
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products: Product[];
dataSource = new MatTableDataSource(this.products);
displayedColumns = ['name','partnumber','unit','price'];
constructor(private productService : ProductService) { 
    this.productService.getProducts(prd=>{
      console.log("Products are",prd)
      this.products = prd;
    })
    console.log("SaveService",productService.saveProduct())
  }

  ngOnInit() {
  }

}
