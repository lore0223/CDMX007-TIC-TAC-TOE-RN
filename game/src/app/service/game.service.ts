import { Injectable } from "@angular/core";

@Injectable()

export class GameService {
   
   win:string;
    compareScore(score:number){
       const arrayWins:any[]= [ 7, 56, 448, 73, 146, 292, 273, 84 ];

        for( let i=0; i<arrayWins.length; i++){
            if((arrayWins[i] & score) === arrayWins[i]){
                alert("ganaste");
                return  true
            }            
        }
        return false
    }

    winTie(str:string){
        if(str == 'Empate'){
         this.win ='Empate';
         alert (this.win)
         return this.win  
        
        }else if(str == 'X' || 'O') {
            this.win = str;
            alert(this.win)
            return this.win
        }
    }
}