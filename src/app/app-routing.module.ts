import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { VendorsComponent } from '../app/vendors/vendors.component'
import { ProductsComponent } from '../app/products/products.component'

const routes: Routes = [
  {path:'vendors',component:VendorsComponent},
  {path:'products',component:ProductsComponent}
]
@NgModule({
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  declarations: []
})

export class AppRoutingModule { }
