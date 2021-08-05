import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-ms-dos',
  templateUrl: './ms-dos.component.html',
  styleUrls: ['./ms-dos.component.scss'],
})
export class MsDosComponent implements OnInit {

  games : any[];

  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.dataService.getDosGames()
    .subscribe((data: any) => {
        this.games = data.games;
    });
  }

}
