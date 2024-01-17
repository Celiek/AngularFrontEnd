import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class UserServiceService {
  private apiUrl ="http://localhost:8080/users";

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getAll`);
  }

  public addBatchUsers(file: File): Observable<any> {
    const url = `${this.apiUrl}/batchusers`;
    const formData = new FormData();
    formData.append('file',file,file.name);

    return this.http.post(url,formData);
  }
}
