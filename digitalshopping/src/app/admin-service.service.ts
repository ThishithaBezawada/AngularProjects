import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  private baseUrl = 'http://localhost:8989/admin/addAdmin';

  constructor(private http:HttpClient) { }

  login(Admin:any):Observable<any>
  {
    return this.http.post(`http://localhost:8989/admin/Admins`,Admin)
  }

  saveAdmin(Admin: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, Admin);
  }

  isAdminLoggedIn() {
    let admin = sessionStorage.getItem('aname')
    console.log(!(admin === null))
    return !(admin === null)
  }

  logOut() {
    sessionStorage.removeItem('aname')
  }
}
