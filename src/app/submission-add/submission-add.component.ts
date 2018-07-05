import { Component, OnInit } from '@angular/core';
import { SubmissionService } from '../submission.service';

@Component({
  selector: 'app-submission-add',
  templateUrl: './submission-add.component.html',
  styleUrls: ['./submission-add.component.css']
})
export class SubmissionAddComponent implements OnInit {
obj = {
  createuser:'anonymous'
}
  constructor(private submissionService: SubmissionService) { }

  ngOnInit() {
  }
  saveSubmission = obj => {
    this.submissionService.saveSubmission(obj,result=>{
      console.log("Submission Result",result)
    })
  }

}
