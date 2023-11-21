import { Component } from '@angular/core';
import { StorageService } from 'src/app/AuthServices/storage.service';
import { Reservation } from 'src/app/model/Reservation';
import { ChambreService } from 'src/app/service/chambre.service';
import { ReservationService } from 'src/app/service/reservation.service';


@Component({
  selector: 'app-list-reservation',
  templateUrl: './list-reservation.component.html',
  styleUrls: ['./list-reservation.component.scss']
})
export class ListReservationComponent {
  CurrentUser: any;
  reservations !: Reservation[];
  constructor(private service: ReservationService, 
    private serviceChambre : ChambreService ,
    private storage: StorageService) { }
  ngOnInit(): void {
    if (this.storage.isLoggedIn()) {

      this.CurrentUser = this.storage.getUser();
      console.log(this.CurrentUser);
      this.service.getReservationById(this.CurrentUser.email).subscribe(
        (data) => {
          console.log(data);
          this.reservations = data
          this.reservations.forEach(reservation =>{
            console.log(reservation);
            this.serviceChambre.getChamberByReservationID(reservation.idReservation).subscribe(
              (data =>{
                console.log(data);
                reservation.numeroChamber = data.numerochambre
              })
            )
          })
        }
      )
    }
  }

}

