import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const URL = '../assets/data.json';
@Injectable({
  providedIn: 'root'
})
export class SlidedataService {
  public data;
  constructor(private http: HttpClient) { }
  getData() {
    this.data= this.http.get(URL);
    return this.data;
  }
 
}
