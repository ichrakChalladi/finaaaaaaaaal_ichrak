import {Image} from "./Image";

export class Universite{
    idUniversite!: number;
    nomUniversite!: string;
    adresse!: string;
    statuts!: string;
    description!:string;
    email!:string;
    firstNameAgent!:string;
    lastNameAgent!:string;
    imagebyte!:string ;
    image?: Image | null;
}