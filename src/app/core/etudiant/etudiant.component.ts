import {Component, OnInit} from '@angular/core';
import {Etudiant} from "../../model/Etudiant";
import {EtudiantService} from "../../service/Etudiant.service";
import { jsPDF } from "jspdf";
@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.scss']
})
export class EtudiantComponent implements OnInit{
  etudiant: Etudiant[] = [];
  p:number = 1 ;

  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15, 20];

  constructor( private etudiantService:EtudiantService ) { }

  postList(): void {
    this.etudiantService.getEtudiantList().subscribe((response:Etudiant[]) => {
      this.POSTS = response;
      console.log(this.POSTS);
    });
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.postList();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.postList();

  }





  ngOnInit(): void {
    console.log("all data ");

    this.getEtudiantList();

  }

  printSimplePdf() {

    const doc = new jsPDF({

        orientation: 'landscape',
        unit: 'in',
        format: [4, 8]
      }

    );

    // En-tête du tableau
    const headers = ['Nom', 'Prénom', 'CIN', 'Ecole', 'Date'];

    // Données des étudiants
    const data = this.etudiant.map(etudiant => [
      etudiant.name,
      etudiant.surname,
      etudiant.cin,
      etudiant.ecole,
      etudiant.dateNaissance
    ]);

    (doc as any).autoTable({

      head: [headers],
      body: data
    });

    doc.save('etudiants.pdf');
  }



  getEtudiantList(){
    this.etudiantService.getEtudiantList().subscribe((data : Etudiant[])=>{
      console.log("all data ",data);

      this.etudiant = data;
      console.log(this.etudiant);

    })
  }


  removeEtudiant(id: number){
    if (confirm("Voulez vous vraiment supprimer l'etudiant ?")) {
      this.etudiantService.removeEtudiant(id).subscribe(() => {
        alert('Suppression effectuée avec succés');
        window.location.reload();
      });














    }



  }





}
