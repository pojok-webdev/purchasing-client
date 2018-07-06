import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubmissionService } from '../submission.service';

@Component({
  selector: 'app-submission-detailedit',
  templateUrl: './submission-detailedit.component.html',
  styleUrls: ['./submission-detailedit.component.css']
})
export class SubmissionDetaileditComponent implements OnInit {

  constructor(private route:ActivatedRoute,private detail:SubmissionService) {
    this.detail.getSubmissionDetails
  }

  ngOnInit() {
  }

}
