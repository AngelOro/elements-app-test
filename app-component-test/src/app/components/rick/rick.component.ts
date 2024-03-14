import {Component, OnInit} from '@angular/core';
import {Result, RootInterface} from "../../interfaces/api.interface";
import {RickandmortyService} from "../../services/rickandmorty.service";

@Component({
  selector: 'app-rick',
  templateUrl: './rick.component.html',
  styleUrls: ['./rick.component.css']
})
export class RickComponent implements OnInit {

  character: Array<Result> = [];

  constructor(private apiRickAndMorty: RickandmortyService) {
  }


  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(){
    this.apiRickAndMorty.getCharacters().subscribe((data: RootInterface) => {
      console.log(data);
      this.character = data.results;
    })
  }

}
