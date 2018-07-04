import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service'
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
    constructor(private productService: ProductService) { 

  }
  saveProduct = ()=>{
    console.log("Product saved",this.product)
    this.productService.saveProduct(this.product)
  }
  ngOnInit() {
  }

}
