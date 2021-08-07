import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-ms-dos',
  templateUrl: './ms-dos.component.html',
  styleUrls: ['./ms-dos.component.scss'],
})
export class MsDosComponent implements OnInit {

  games : any[];
  link : string;

  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.getAllGames();
  }

  addGame() {
    this.dataService.addDosGame(this.link)
    .subscribe(res => {
      console.log(res);
      this.link = "";
      this.getAllGames();
    });
  }

  getAllGames() {
    console.log("Get all games");
    this.dataService.getDosGames()
    .subscribe((data: any) => {
        this.games = data.games;
    });
  }

  deleteGame(game : string) {
    console.log("deleteGame: "+game);
    this.dataService.deleteDosGame(game)
    .subscribe(res => {
        console.log(res);
        this.getAllGames();
    });
  }
}
