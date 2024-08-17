import { Injectable } from '@angular/core';
import { AddRegisterRequest } from '../models/add-register-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http : HttpClient) { }

  AddRegister(model: AddRegisterRequest): Observable<void>{
    return this.http.post<void>('https://localhost:7035/api/Registories',model);
    
  }
}
