import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prizes } from '../prizes';

@Injectable({
  providedIn: 'root'
})
export class MyDataService {
  //httpclient: any;

  constructor(private httpclient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      
    })
  }

  getData(): Observable<any>{

    return this.httpclient.get('https://api.nobelprize.org/v1/prize.json',{headers: this.httpOptions.headers})
  }

  // getData(){
  //   return this.http.get('https://api.nobelprize.org/v1/prize.json');
  // }
}
