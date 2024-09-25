import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Reservation, ReservationService } from "../../core/services/reservation.service";

@Component({
  selector: 'app-res-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  displayedColumns: string[] = ['date', 'name'];
  dataSource: Reservation[] = [];
  totalReservations: number = 0;
  filterValue: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private reservationService: ReservationService) {}

  ngOnInit() {
    this.dataSource = this.reservationService.getReservations();
    this.totalReservations = this.dataSource.length; // Total items
  }

  applyFilter(filterValue: string) {
    if (filterValue) {
      const filteredData = this.reservationService.getReservations().filter(reservation =>
        reservation.name.toLowerCase().includes(filterValue.toLowerCase())
      );
      this.totalReservations = filteredData.length; // Total after filtering
      this.dataSource = filteredData.slice(0, this.paginator.pageSize); // Set the initial data source
    } else {
      this.dataSource = this.reservationService.getReservations().slice(0, this.paginator.pageSize); // Reset if no filter
    }
  }

  onPageChange(event: any) {
    const startIndex = event.pageIndex * event.pageSize;
    const filteredData = this.reservationService.getReservations(); // Get all reservations
    this.dataSource = filteredData.slice(startIndex, startIndex + event.pageSize);
  }
}
