import { Injectable } from '@angular/core';
export interface Reservation {
  name: string;
  date: Date;
}
@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private resList: Reservation[] = [];
//3mr data
  addNewRes(foodTruck: Reservation) {
    // Simulate a server call
    this.resList.push(foodTruck);
    console.log('Food Truck Added:', foodTruck);
    console.log(this.resList)
  }

  getFoodTrucks() {
    return this.resList;
  }

  getReservations() {
    return this.resList;
  }

  loadInitialData() {

  }
}
