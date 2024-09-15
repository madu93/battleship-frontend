import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
grid: string[][] = [];
  message: string = '';

  constructor(private gameService:GameService) { }

  ngOnInit(): void {
    this.initializeGrid();
    this.resetGame();
  }

  initializeGrid() {
    this.grid = Array(10).fill(0).map(() => Array(10).fill(''));
  }

  resetGame() {
    this.gameService.resetGame().subscribe(res => {
      this.message = res.message;
      this.initializeGrid();
    });
  }

  attackCell(x: number, y: number) {
    this.gameService.attack(x, y).subscribe(res => {
      this.message = res.message;
      this.grid[x][y] = res.message.includes('Hit') ? 'X' : 'O';
     
    });
  }
}
