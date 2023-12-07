import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../service/Etudiant.service';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {
  totalEtudiants !: number; 
  totalReservation !: number;


  constructor(private etudiantService: EtudiantService) { }

  ngOnInit(): void {
    this.getEtudiants(); 
    this.getTotaReservationsAffectes();
   
    
  }

  getEtudiants() {
    this.etudiantService.getEtudiantList().subscribe(data => {
      this.totalEtudiants = data.length
    }); 
  }

  getTotaReservationsAffectes() {
    this.etudiantService.getTotalReservationsAffectes().subscribe(data => {
      this.totalReservation = data
    })
  }


}
