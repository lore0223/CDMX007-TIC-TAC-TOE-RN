import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { GameService } from '../service/game.service' 



@Component({
    selector: "game-result",
    moduleId: module.id,
    templateUrl: "./winer.component.html"
})

export class WinersComponent {

    result:String;

    constructor( gameService:GameService  ) { }
    
    ngOnInit() {
     
       
    }
 
  


    
}
