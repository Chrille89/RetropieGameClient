import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-snes',
  templateUrl: './snes.component.html',
  styleUrls: ['./snes.component.scss'],
})
export class SnesComponent implements OnInit {

  games : any[];
  link : string;

  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.getAllGames();
  }

  getAllGames() {
    console.log("Get all games");
    this.dataService.getSnesGames()
    .subscribe((data: any[]) => {
        this.games = data;
    });
  }

  addGame() {
    this.dataService.addSnesGame(this.link)
    .subscribe(res => {
      console.log(res);
      this.link = "";
      this.getAllGames();
    });
  }

  deleteGame(game : string) {
    console.log("deleteGame: "+game);
    this.dataService.deleteSnesGame(game)
    .subscribe(res => {
        console.log(res);
        this.getAllGames();
    });
  }
}
