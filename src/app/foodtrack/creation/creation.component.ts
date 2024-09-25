import { Component, OnInit } from '@angular/core';
import { FoodTruck, FoodTruckService } from "../../core/services/food-truck.service";
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit {
  foodTruck: FoodTruck = { name: '' };
  foodTruckList: FoodTruck[] = [];

  constructor(
    private foodTruckService: FoodTruckService,

  ) {}

  ngOnInit(): void {
    this.foodTruckService.getFoodTrucks().subscribe(foodTrucks => {
      this.foodTruckList = foodTrucks;

    });
  }

  onSubmit(foodTruckForm: NgForm) {
    this.foodTruckService.addFoodTruck(this.foodTruck);
    this.foodTruck = { name: '' };
    foodTruckForm.resetForm();
  }

}
