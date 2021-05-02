import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SUserService {

  uri = 'http://localhost:49789/api';


  constructor(private http: HttpClient ) { }

  getUsers(){
    return this.http.get(`${this.uri}/User/Select/`);

  }

  getUserById(id){
    return this.http.get(`${this.uri}/user/${id}`);
  }


  addUser( name , email ,password ){
    const user = {
      name:name,
      email:email,
      password:password
    };
   return this.http.post(`${this.uri}/Admin/insert`,user);

  }

  loginUser(email, password){
    const user = {
      email:email,
      password: password
    };
    return this.http.post(`${this.uri}/User/login`,user);
  }

  updateUser(id, name , email , password ){
    const user = {
      fullName:name,
      email:email,
      password:password

    };
    return this.http.post(`${this.uri}/Admin/update/${id}`,user);
  }


  deleteUser(id){
return this.http.delete(`${this.uri}/User/Delete/${id}`);
}

}
