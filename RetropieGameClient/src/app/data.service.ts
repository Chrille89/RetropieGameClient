import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private endpoint : string = "http://retropie:9000/games";

  constructor(private httpClient : HttpClient) { }

  getDosGames() {
    console.log("Start Request")
    return this.httpClient.get(this.endpoint+"/pc");
  }

}
