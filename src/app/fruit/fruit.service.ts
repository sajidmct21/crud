import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fruit } from './fruit';

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  baseURL:string='http://localhost:3000/fruits';
  constructor(private httpClient:HttpClient) { }

  getAll():Observable<Fruit[]>{
    return this.httpClient.get<Fruit[]>(this.baseURL);
  }

  create(fruit:Fruit):Observable<any>{
    return this.httpClient.post(this.baseURL,fruit);
  }

  update(fruit:Fruit):Observable<any>{
    return this.httpClient.put(`${this.baseURL}/${fruit.id}`,fruit);
  }

  getById(id:number):Observable<Fruit>{
    return this.httpClient.get(`${this.baseURL}/${id}`);
  }

  delete(id:number):Observable<any>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
