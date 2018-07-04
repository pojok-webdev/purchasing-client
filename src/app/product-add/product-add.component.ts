import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service'
import { Location } from '@angular/common'
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  product = {
    name:'Sandal',
    partnumber:'',
    unit:'',
    discountlevel:0,
    price:0
  }
    constructor(private productService: ProductService,private location: Location) { 

  }
  saveProduct = ()=>{
    console.log("Product saved",this.product)
    this.productService.saveProduct(this.product,(result)=>{
      console.log("Result",result)
      window.location.href = "/products"
    })
  }
  ngOnInit() {
  }

}
