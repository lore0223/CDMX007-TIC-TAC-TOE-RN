import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { GameService } from "../service/game.service";
import { EventData } from "tns-core-modules/ui/page/page";
import { Router } from "@angular/router";

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./item-detail.component.html"
})
export class ItemDetailComponent implements OnInit {
        player:string = 'X' ;
        playerAct:string;
        playerScore:any;
        numberTurns:number;
    
        constructor(
            private gameService: GameService,
            private route: ActivatedRoute,
            private router:Router
        ) { }
    
        ngOnInit() {
              
            this.playerScore= { X:0,O:0 };
            this.numberTurns=0;
            this.playerAct = this.getPlayerLabel(this.player);
    
        }
    
        getScore(args:EventData){
            //Esta función manda los datos de "X" o "O"
            let button= args.object;
            this.player = this.player === 'O' ? 'X' : 'O';
            button.set("text",this.player);
            button.set("isEnabled",false);
            //Estamos obteniendo al jugador activo
            this.playerAct = this.getPlayerLabel(this.player);
            this.playerScore[this.player]= this.playerScore[this.player]+ parseInt(button.get("score"));
        

            this.numberTurns++;
            //Aqui hacemos la comparacion para detectar a los ganadores
            if (this.gameService.compareScore(this.playerScore[this.player])) {
                this.gameService.winTie(this.player);
                this.router.navigate(['/winer']);
            }else if (this.numberTurns === 9) {
                this.gameService.winTie('Empate');
                this.router.navigate(['/winer']);
            }


        }
        
        
        getPlayerLabel(player:string){
           return "Player-" + player;
        }


    
}
