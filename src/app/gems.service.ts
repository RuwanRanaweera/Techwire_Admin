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

  getBid(){
    return this.http.get(`${this.uri}/Bid/Select/`);

  }


  getGem(gemID){
    return this.http.get(`${this.uri}/Gem/Select/${gemID}`);

  }

  deleteGem(gemID){
    return this.http.delete(`${this.uri}/Gem/Delete/${gemID}`);
    }

    approveGem(gemID){
      return this.http.put(`${this.uri}/Gem/Update/${gemID}`,{});
    }

    // updategem(gemID){
    //   return this.http.put(`${this.uri}/Gem/Updates/${gemID}`,{});
    // }

    updategem(gemID,price, bidingTime){
      //console.log(datetime);
      const user = {
      price: price,
      bidingTime: bidingTime
      };
      return this.http.put(`${this.uri}/Gem/Updates/${gemID}`,user);
    }
}
