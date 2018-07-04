import { Injectable } from '@angular/core';
import { Product } from './products/product'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  prod:Observable<Product[]>
  constructor(private http:HttpClient) { 
    
  }
  getProducts(callback){
    this.prod = this.http.get<Product[]>('http://localhost:2018/getproducts')
    this.prod.subscribe(
      data=>{
        console.log("Success",data)
        callback(data)
      },
      err=>{
        console.log("Error",err);
        console.log("Pastikan server running",err.message)
        callback(err)
      }
    )
  }
  saveProduct(){
    return 'product saved'
  }

}
