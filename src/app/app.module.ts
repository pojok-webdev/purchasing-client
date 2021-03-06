import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VendorsComponent } from './vendors/vendors.component';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './/app-routing.module';
import { ProductsComponent } from './products/products.component';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component'
import { HttpClientModule } from '@angular/common/http'
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { ProductAddComponent } from './product-add/product-add.component'
import { MatInputModule } from '@angular/material/input';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { SubmissionAddComponent } from './submission-add/submission-add.component';
import { SubmissionsComponent } from './submissions/submissions.component'
import { MatDatepickerModule, MatSelectModule } from '@angular/material';
import { MatNativeDateModule } from '@angular/material'
import { DatePipe } from '@angular/common';
import { SubmissionDetailComponent } from './submission-detail/submission-detail.component';
import { SubmissionDetaileditComponent } from './submission-detailedit/submission-detailedit.component';

@NgModule({
  declarations: [
    AppComponent,
    VendorsComponent,
    ProductsComponent,
    MainComponent,
    ProductAddComponent,
    ProductUpdateComponent,
    SubmissionAddComponent,
    SubmissionsComponent,
    SubmissionDetailComponent,
    SubmissionDetaileditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatMenuModule,
    MatButtonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    MatTableModule,
    CdkTableModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
