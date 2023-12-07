import {Component, OnInit} from '@angular/core';
import {Etudiant} from "../../model/Etudiant";
import {ActivatedRoute } from "@angular/router";
import {EtudiantService} from "../../service/Etudiant.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-detail-etudiant',
  templateUrl: './detail-etudiant.component.html',
  styleUrls: ['./detail-etudiant.component.scss']
})
export class DetailEtudiantComponent implements OnInit {
  id: any;
  etudiant = new Etudiant();


  constructor(private activatedroute: ActivatedRoute, private service: EtudiantService , private router: Router) {

  }

  ngOnInit(): void {
    this.id = this.activatedroute.snapshot.params['id'];
    this.service.getEtudiantById(this.id).subscribe(
      (data) => {
        this.etudiant = data;
        console.log(data);
      }
    );
  }

  detailEtudiant() {
    this.router.navigate(['/etudiant-details', this.etudiant.idEtudiant]);
  }
}
