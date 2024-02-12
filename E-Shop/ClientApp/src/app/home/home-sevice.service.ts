import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shoes } from '../interfaces/shoes-interface';

@Injectable({
  providedIn: 'root'
})
export class ShoesService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getShoes(): Observable<Shoes[]> {
    return this.http.get<Shoes[]>(this.baseUrl);
  }
}
