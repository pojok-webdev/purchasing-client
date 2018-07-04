import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { VendorsComponent } from '../app/vendors/vendors.component'
import { ProductsComponent } from '../app/products/products.component'
import { ProductAddComponent } from '../app/product-add/product-add.component'
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:'vendors',component:VendorsComponent},
  {path:'products',component:ProductsComponent},
  {path:'productadd',component:ProductAddComponent},
  {path:'main',component:MainComponent}
]
@NgModule({
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  declarations: []
})

export class AppRoutingModule { }
