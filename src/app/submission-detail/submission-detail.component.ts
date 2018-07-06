import { Component, OnInit } from '@angular/core';
import { SubmissionService } from '../submission.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-submission-detail',
  templateUrl: './submission-detail.component.html',
  styleUrls: ['./submission-detail.component.css']
})
export class SubmissionDetailComponent implements OnInit {
  objs
  displayedColumns = ['itemname','brand','detail']
  constructor(private detail: SubmissionService,private route:ActivatedRoute) {
    this.detail.getSubmissionDetails({submission_id:this.route.snapshot.params.submission_id},result => {
      this.objs = result
    })
  }

  ngOnInit() {
  }

}
