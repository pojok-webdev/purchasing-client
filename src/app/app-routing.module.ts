import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { VendorsComponent } from '../app/vendors/vendors.component'
import { ProductsComponent } from '../app/products/products.component'
import { ProductAddComponent } from '../app/product-add/product-add.component'
import { ProductUpdateComponent } from '../app/product-update/product-update.component'
import { MainComponent } from './main/main.component';
import { SubmissionAddComponent } from './submission-add/submission-add.component';
import { SubmissionsComponent } from './submissions/submissions.component';

const routes: Routes = [
  {path:'',redirectTo:'/main',pathMatch:'full'},
  {path:'vendors',component:VendorsComponent},
  {path:'products',component:ProductsComponent},
  {path:'productadd',component:ProductAddComponent},
  {path:'productupdate/:product_id',component:ProductUpdateComponent},
  {path:'submissionadd',component:SubmissionAddComponent},
  {path:'submissions',component:SubmissionsComponent},
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
