import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SubmissionService } from '../submission.service';
import { Submission } from './submission';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.css']
})
export class SubmissionsComponent implements OnInit {
submissions : Submission[]
  dataSource// = new MatTableDataSource(this.submissions);
  displayedColumns = ['submission_date','staff_name','implementation_target','purchase_target','detail'];
    constructor(private submissionService:SubmissionService) {
      this.submissionService.getSubmissions(result=>{
        console.log("Result",result)
        this.submissions = result
        this.dataSource = new MatTableDataSource(result)
      })
     }

  ngOnInit() {
  }

}
