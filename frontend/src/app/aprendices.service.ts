import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Esto asegura que el servicio esté disponible de forma global
})
export class AprendicesService {
  private apiUrl = 'http://localhost:3000/aprendices';

  constructor(private http: HttpClient) {}

  getAprendices(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}

