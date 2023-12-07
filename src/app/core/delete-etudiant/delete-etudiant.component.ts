import { Component } from '@angular/core';
import {EtudiantService} from "../../service/Etudiant.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
 selector: 'app-delete-etudiant',
 templateUrl: './delete-etudiant.component.html',
 styleUrls: ['./delete-etudiant.component.scss']
})
export class DeleteEtudiantComponent {

 constructor(private etudiantService: EtudiantService,
              private ac: ActivatedRoute,
              private router: Router) {
 }

 deleteEtudiant(id:any) {
    if (confirm('Are you sure you want to delete this etudiant?')) {
      this.etudiantService.removeEtudiant(id).subscribe(
        () => {
          alert('Etudiant deleted successfully');
          
        },
        (err) => {
          let status = err.status;
          switch (status) {
            case 0: alert('Server error') ; break;
            case 401: alert('Unauthorized access') ; break;
            case 404: alert('Not found') ; break;
          }
        });
    }
 }
}