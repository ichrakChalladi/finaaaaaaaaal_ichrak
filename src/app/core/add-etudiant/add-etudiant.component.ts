import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Etudiant} from "../../model/Etudiant";
import {EtudiantService} from "../../service/Etudiant.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.scss']
})
export class AddEtudiantComponent {

  constructor(private etudiantService:EtudiantService,private router:Router,private location: Location){

  }
//  etudiant=new Etudiant()
  etudiant: any = {}; // Define the etudiant object to store form data

  showForm(f:any){
    console.log(f)
  }

  goBack(): void {
    this.location.back();
  }


  //add Etudiant
  saveEtudiant(e:any){

    this.etudiantService.addEtudiant(e).subscribe(
      ()=>{
       
        alert('added');
        console.log(e);
      },
    (er)=>{
        console.log(er)
    }
    );
  }
}
