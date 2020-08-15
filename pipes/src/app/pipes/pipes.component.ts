import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  name: string = "";
  num: number = 0;
  currentDate: number = 0;
  numPipe:number = 0;
  percentagesPipe:number = 0;

  constructor() { }

  ngOnInit(): void {
  }
  strConvert(name: string){
    this.name = name;
  }

  cur(curNum:number):void{
    this.num = curNum;
  }

  dates(){
    this.currentDate = Date.now();
  }

  numberPipe(numPi:number){
    this.numPipe = numPi;
  }

  percentagePipe(numb:number){
    this.percentagesPipe = numb/100;
  }
}
