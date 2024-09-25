import { Component, OnInit, ViewChild } from '@angular/core';
import { FoodTruck, FoodTruckService } from "../../core/services/food-truck.service";
import { MatPaginator } from "@angular/material/paginator";

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  displayedColumns: string[] = ['name'];
  dataSource: FoodTruck[] = [];
  totalFoodTrucks: number = 0;
  filterValue: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private foodTruckService: FoodTruckService) {}

  ngOnInit() {
    this.foodTruckService.getFoodTrucks().subscribe(foodTrucks => {
      this.dataSource = foodTrucks;
      this.totalFoodTrucks = foodTrucks.length; // Total items
    });
  }

  applyFilter(filterValue: string) {
    if (filterValue) {
      this.foodTruckService.getFoodTrucks().subscribe(foodTrucks => {
        const filteredData = foodTrucks.filter(foodTruck =>
          foodTruck.name.toLowerCase().includes(filterValue.toLowerCase())
        );
        this.totalFoodTrucks = filteredData.length; // Total after filtering
        this.dataSource = filteredData.slice(0, this.paginator.pageSize); // Set the initial data source
      });
    } else {
      this.foodTruckService.getFoodTrucks().subscribe(foodTrucks => {
        this.dataSource = foodTrucks.slice(0, this.paginator.pageSize); // Reset if no filter
      });
    }
  }

  onPageChange(event: any) {
    const startIndex = event.pageIndex * event.pageSize;
    this.foodTruckService.getFoodTrucks().subscribe(foodTrucks => {
      this.dataSource = foodTrucks.slice(startIndex, startIndex + event.pageSize);
    });
  }
}
