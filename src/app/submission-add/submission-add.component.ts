import { Component, OnInit } from '@angular/core';
import { SubmissionService } from '../submission.service';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_MOMENT_DATE_FORMATS,MomentDateAdapter} from '@angular/material-moment-adapter';
import { DatePipe } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'


@Component({
  selector: 'app-submission-add',
  templateUrl: './submission-add.component.html',
  styleUrls: ['./submission-add.component.css'],
  providers:[
    {provide: MAT_DATE_LOCALE, useValue: 'id'},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ]
})

export class SubmissionAddComponent implements OnInit {
obj = {
  createuser:'anonymous'
}
  constructor(private submissionService: SubmissionService,private adapter:DateAdapter<any>,private datePipe: DatePipe) {
    this.adapter.setLocale('id')
   }

  ngOnInit() {
  }
  saveSubmission = obj => {
    obj.submission_date = this.datePipe.transform(obj.submission_date,'yyyy-MM-dd')
    obj.purchase_target = this.datePipe.transform(obj.purchase_target,'yyyy-MM-dd')
    obj.implementation_target = this.datePipe.transform(obj.implementation_target,'yyyy-MM-dd')
    this.submissionService.saveSubmission(obj,result=>{
      console.log("Submission Result",result)
      window.location.href = '/submissions'
    })
  }

}
