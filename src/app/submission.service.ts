import { Injectable } from '@angular/core';
import { SubmissionsComponent } from './submissions/submissions.component';
import { Observable }from 'rxjs'
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Submission } from './submissions/submission';
@Injectable({
  providedIn: 'root'
})
export class SubmissionService {
submissions : Observable<Submission[]>
submission: Observable<Submission>
httpOptions = {
  headers:new HttpHeaders({
    'Content-Type':'Application/json'
  })
}
  constructor(private httpClient:HttpClient) { }
  getSubmissions(callback){
    this.submissions = this.httpClient.get<Submission[]>('http://localhost:2018/getsubmissions')
    this.submissions.subscribe(
      data=>{
        console.log("Success",data)
        callback(data)
      },
      err=>{
        console.log("Err",err)
        callback(err)
      }
    )
  }
  saveSubmission(obj,callback){
    this.submission = this.httpClient.post<Submission>('http://localhost:2018/savesubmission',obj,this.httpOptions)
    this.submission.subscribe(
      data=>{
        console.log("Success save submission",data)
        callback(data)
      },
      err=>{
        console.log("Error save submission",err)
        callback(err)
      }
    )
  }
}
