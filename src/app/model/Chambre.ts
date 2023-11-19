import { Bloc } from "./Bloc";
import { Reservation } from "./Reservation";

export class Chambre{

    idChambre!:number;
    numerochambre!:number;
    typeC!:string;
    description!:string;
    etat!:boolean;
    CreatedAt!:Date;
    UpdatedAt!:Date;
    res!:Reservation[];
    bloc!:Bloc;
    
}