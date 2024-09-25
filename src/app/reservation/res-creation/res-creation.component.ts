import { Component, OnInit } from '@angular/core';
import { Reservation, ReservationService } from "../../core/services/reservation.service";
import { FoodTruck, FoodTruckService } from "../../core/services/food-truck.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-res-creation',
  templateUrl: './res-creation.component.html',
  styleUrls: ['./res-creation.component.css']
})
export class ResCreationComponent implements OnInit {
  reservation: Reservation = { name: '', date: new Date() };
  foodTruckList: FoodTruck[] = [];

  constructor(private resService: ReservationService,
              private foodTruckService: FoodTruckService,
              private snackBar: MatSnackBar
  ) {}

  onSubmit(reservationForm: NgForm) {
    this.resService.addNewRes(this.reservation);
    this.openSnackBar('Réservation prise en charge avec succès!', 'Fermer');
    this.reservation = { name: '', date: new Date() };
    reservationForm.resetForm();
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000, // Durée en millisecondes
      horizontalPosition: 'center', // Position horizontale
      verticalPosition: 'top', // Position verticale
    });
  }
  ngOnInit(): void {
    // Abonnez-vous pour obtenir immédiatement la liste des food trucks
    this.foodTruckService.getFoodTrucks().subscribe(foodTrucks => {
      this.foodTruckList = foodTrucks; // Remplissez la liste ici
    });
  }
}
