import { Component } from '@angular/core';
import {EtudiantService} from "../../service/Etudiant.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-delete-etudiant',
  templateUrl: './delete-etudiant.component.html',
  styleUrls: ['./delete-etudiant.component.scss']
})
export class DeleteEtudiantComponent {

  constructor(private etudiant:EtudiantService
    ,private ac:ActivatedRoute,
              private router:Router) {
  }
  ngOnInit(){
    this.etudiant.removeEtudiant(this.ac.snapshot.params['id']).subscribe(
      ()=>{
        alert('next')
        //this.router.navigate(['etudiant'])
      },
      (err)=>{
        let status=err.status;
        switch (status){
          case 0:alert('server ') ;break;
          case 401:alert('unauthoriz ') ;break;
          case 404:alert('unauthoriz ') ;break;
        }
      });

  }

  deleteEtudiant() {
    if (confirm('Are you sure you want to delete this etudiant?')) {
      this.etudiant.removeEtudiant(this.ac.snapshot.params['id']).subscribe(
        () => {
          alert('Etudiant deleted successfully');
          this.router.navigate(['etudiant']);
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
