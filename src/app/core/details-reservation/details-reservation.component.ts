import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chambre } from 'src/app/model/Chambre';
import { Reservation } from 'src/app/model/Reservation';
import { User } from 'src/app/model/User';
import { ChambreService } from 'src/app/service/chambre.service';
import { ReservationService } from 'src/app/service/reservation.service';

@Component({
  selector: 'app-details-reservation',
  templateUrl: './details-reservation.component.html',
  styleUrls: ['./details-reservation.component.css']
})
/**test */
export class DetailsReservationComponent {
  constructor(private serviceReservation: ReservationService, private router: Router,
    private activatedRoute: ActivatedRoute, private chamberService: ChambreService) { }
  reservation !: Reservation;
  chambre !: Chambre;
  etudiants !: User[];
  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['id']);
    this.chamberService.getChamberByReservationID(this.activatedRoute.snapshot.params['id']).subscribe(
      (d) => {
        console.log("chamber of this reservation ");
        console.log(d);
        this.chambre = d;

      }
    )
    this.serviceReservation.getReservationByID(this.activatedRoute.snapshot.params['id']).subscribe(
      (d) => {
        console.log(d);
        this.reservation = d;
        this.etudiants = d.etudiants;
        console.log(this.etudiants);

      }
    )
  }
}
