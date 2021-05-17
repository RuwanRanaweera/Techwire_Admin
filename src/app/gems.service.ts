import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GemsService {

  uri = 'http://localhost:49789/api';
  constructor(private http: HttpClient) { }

  getGems(){
    return this.http.get(`${this.uri}/Gem/Select/`);

  }

  deleteGem(gemID){
    return this.http.delete(`${this.uri}/Gem/Delete/${gemID}`);
    }

    approveGem(gemID){
      return this.http.put(`${this.uri}/Gem/Update/${gemID}`,{});
    }

}
