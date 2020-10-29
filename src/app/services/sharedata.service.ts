import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { forkJoin } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedataService {

  constructor(private http:HttpClient) { }
 
 userdata = "https://jsonplaceholder.typicode.com/users";
 tododata = "https://jsonplaceholder.typicode.com/todos";
 photodata = "https://jsonplaceholder.typicode.com/photos";
 albumdata = "https://jsonplaceholder.typicode.com/albums";
 commentsdata = "https://jsonplaceholder.typicode.com/comments";
 postdata = "https://jsonplaceholder.typicode.com/posts";


 getData() {
   const response1 = this.http.get(this.userdata);
   const response2 = this.http.get(this.tododata);
   const response3 = this.http.get(this.photodata);
   const response4 = this.http.get(this.commentsdata);
   const response5 = this.http.get(this.postdata);
   return forkJoin([response1,response2,response3,response4,response5]);
 }




}
