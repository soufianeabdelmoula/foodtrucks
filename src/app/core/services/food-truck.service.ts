import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

export interface FoodTruck {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class FoodTruckService {
  private foodTrucks: FoodTruck[] = [];
  private foodTrucksSubject = new BehaviorSubject<FoodTruck[]>(this.foodTrucks);

  constructor(private http: HttpClient) {
    this.loadFoodTrucks();
  }

  private loadFoodTrucks() {
    this.http.get<FoodTruck[]>('assets/dataFoodTrucks/FoodTruckData.json').subscribe(data => {
      this.foodTrucks = data;
      this.foodTrucksSubject.next(this.foodTrucks);
    });
  }

  getFoodTrucks(): Observable<FoodTruck[]> {
    return this.foodTrucksSubject.asObservable(); // Retourne l'observable
  }

  addFoodTruck(foodTruck: FoodTruck) {
    this.foodTrucks.push(foodTruck);
    this.foodTrucksSubject.next(this.foodTrucks); // Maj l'observable
    console.log('Food Truck Added:', foodTruck);
  }
}
