import { IsPlayer } from "../interfaces/isPlayer";

export class Player implements IsPlayer{
    constructor(
        readonly name: string, 
        readonly age: number, 
        readonly country: string
    ){}

    play(){
        console.log(`${this.name} from ${this.country} is playing`);
    }
}