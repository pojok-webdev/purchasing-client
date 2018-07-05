import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Product } from './product'
import { MatTableDataSource } from '@angular/material';
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
  }
  editProduct(element){
    console.log("Element to edit",element)
    window.location.href = "/productupdate/"+element.id
  }
  ngOnInit() {
  }

}
