import { Injectable } from '@angular/core';
import { Product } from './products/product'
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  prods:Observable<Product[]>
  prod:Observable<Product>
  constructor(private http:HttpClient) { 
    
  }
  getProducts(callback){
    this.prods = this.http.get<Product[]>('http://localhost:2018/getproducts')
    this.prods.subscribe(
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
  saveProduct(obj,callback){
    const httpOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    this.prod = this.http.post<Product>('http://localhost:2018/saveproduct',obj,httpOptions)
    this.prod.subscribe(
      data=>{
        console.log("Success save product",data)
        callback(data)
      },
      err=>{
        console.log("Error",err)
        callback(err)
      }
    )
  }
}
