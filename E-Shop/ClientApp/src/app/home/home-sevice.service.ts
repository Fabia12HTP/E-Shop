import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shoes } from '../interfaces/shoes-interface';

@Injectable({
  providedIn: 'root'
})
export class ShoesService {
  private baseUrl = '/home/shoes';

  constructor(private http: HttpClient) { }

  getShoes(): Observable<Shoes[]> {
    return this.http.get<Shoes[]>(this.baseUrl);
  }
}
