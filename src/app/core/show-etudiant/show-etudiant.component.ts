import {Component, OnInit} from '@angular/core';
import {Etudiant} from "../../model/Etudiant";
import {EtudiantService} from "../../service/Etudiant.service";

@Component({
  selector: 'app-show-etudiant',
  templateUrl: './show-etudiant.component.html',
  styleUrls: ['./show-etudiant.component.scss']
})
export class ShowEtudiantComponent implements OnInit{
  show=false;
  showFormAdd=false;
  etudianttoSelected!:Etudiant;
  constructor(private service:EtudiantService , private etudiantService: EtudiantService){
  }
  Etudiant!:Etudiant[];
  ngOnInit(): void {
    this.service.getEtudiantList().subscribe(
      (d)=>{
        //console.log(d)
        this.Etudiant=d;

      }
    )

  }



  getEtudiants(): void {
    this.etudiantService.getEtudiantList()
      .subscribe(etudiants => this.Etudiant = etudiants);
  }


  update(e:Etudiant){
    this.show=true;
    this.etudianttoSelected=e
  }

  traitemenet(t:any){
    this.show=!this.show
  }

  changeTab(etu:any){
    this.show=false;
    for(let i=0;i<this.Etudiant.length;i++){
      if(this.Etudiant[i].id==etu.id){
        this.Etudiant[i]=etu;
      }
    }
  }
  addEtudiant(){
    this.showFormAdd=true
  }

  addElementToTab(et:any){
    this.Etudiant.push(et)
  }

  delete(e: Etudiant): void {
    this.etudiantService.removeEtudiant(e)
      .subscribe(() => this.getEtudiants());


  }
}
