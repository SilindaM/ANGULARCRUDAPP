import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable} from "rxjs";
import { Konk } from "./konk";

@Injectable({
  providedIn: 'root'
})
export class KonkeService {

  currentEmployee:Konk={
      name:'',
      surname:'',
      id:null
  }
  munu="http://localhost:3000/people";
  constructor(private http:HttpClient) { }
  
  Create(Person:Konk):Observable<Konk>{
    return this.http.post<Konk>(this.munu,Person);
  }
  Read():Observable<Konk>{
    return  this.http.get<Konk>(this.munu);
  }
  Update(person:Konk):Observable<Konk>{
    return this.http.put<Konk>(this.munu +'/'+person.id,person);
  }
  Delete(id:number):Observable<Konk>{
    return this.http.delete<Konk>(this.munu+ '/'+id);
  }
}
