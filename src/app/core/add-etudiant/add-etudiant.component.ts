import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Etudiant} from "../../model/Etudiant";
import {EtudiantService} from "../../service/Etudiant.service";

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.scss']
})
export class AddEtudiantComponent {
  constructor(private etudiantService:EtudiantService,private router:Router){

  }
  etudiant=new Etudiant()
  showForm(f:any){
    console.log(f)
  }
  saveEtudiant(e:Etudiant){
//add Etudiant
    this.etudiantService.addEtudiant(e).subscribe(
      ()=>{
        this.router.navigate(['/p/etudiant'])
        //alert('added');
      }
    );
  }
}
