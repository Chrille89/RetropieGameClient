import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private endpoint : string = "http://192.168.1.62:9000/games";

  constructor(private httpClient : HttpClient) { }

  getDosGames() {
    console.log("Start Request")
    return this.httpClient.get(this.endpoint+"/pc");
  }

}
