import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private endpoint : string = "http://192.168.1.62:9000/games";

  constructor(private httpClient : HttpClient) { }

  getDosGames() {
    console.log("getDosGames");
    return this.httpClient.get(this.endpoint+"/pc");
  }

  addDosGame(link : string) {
    console.log("addDosGame: "+link);
    return this.httpClient.post(this.endpoint+"/pc",{ url : link});
  }

  deleteDosGame(game : string) {
    console.log("deleteDosGame: "+game);
    return this.httpClient.delete(this.endpoint+"/pc/"+game);
  }

  getSnesGames() {
    console.log("getSnesGames");
    return this.httpClient.get(this.endpoint+"/snes");
  }

  addSnesGame(link : string) {
    console.log("addSnesGame: "+link);
    return this.httpClient.post(this.endpoint+"/snes",{ url : link});
  }

  deleteSnesGame(game : string) {
    console.log("deleteSnesGame: "+game);
    return this.httpClient.delete(this.endpoint+"/snes/"+game);
  }
}
