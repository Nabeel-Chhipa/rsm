import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { AddItemComponent } from './add-item/add-item.component';

const routes: Routes = [
  {
    path: "items",
    component: ItemsComponent
  },
  {
    path: "item-details",
    component: ItemDetailsComponent
  },
  {
    path: "add-item",
    component: AddItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
