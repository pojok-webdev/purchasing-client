import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  product_id=''
  obj = {}
  constructor(private productService: ProductService,private route:ActivatedRoute) {
    this.product_id = this.route.snapshot.params.product_id
    productService.getProduct(this.product_id,(obj)=>{
      console.log("OBJ",obj)
      console.log("Snapshotparam",this.route.snapshot.params)
      this.obj = obj[0]
    })
  }
  updateProduct(obj){
    this.productService.updateProduct(obj,result=>{
      console.log("Result",result)
      window.location.href = "/products"
    })
  }
  ngOnInit() {
  }

}
