import { Component } from '@angular/core';
import * as L from 'leaflet';
import "leaflet-routing-machine";

@Component({
  selector: 'app-purchase-orders',
  templateUrl: './purchase-orders.component.html',
  styleUrl: './purchase-orders.component.scss'
})
export class PurchaseOrdersComponent {
  
  // bread crumb items
  breadCrumbItems!: Array<{}>;

  ngOnInit(): void {
    /**
     * BreadCrumb
     */
    this.breadCrumbItems = [
      { label: 'Ecommerce', active: true },
      { label: 'Order Overview', active: true }
    ];



    /**
   * Basic Maps
   */
    setTimeout(() => {
      const map = L.map('map'); // Set the initial map view
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);
      L.Routing.control({
        waypoints: [
          L.latLng(57.74, 11.94),
          L.latLng(57.6792, 11.949)
        ],
        show: false,
        routeWhileDragging: true
      }).addTo(map);
    }, 500);
  }
}
