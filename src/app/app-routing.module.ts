import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./component/home/home.component";
import {CreationComponent as FoodtruckCreation} from "./foodtrack/creation/creation.component";
import {ResCreationComponent} from "./reservation/res-creation/res-creation.component";
import {ListViewComponent} from "./reservation/res-list-view/list-view.component";
import {MatTableModule} from "@angular/material/table";
import {CommonModule} from "@angular/common";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {ContactComponent} from "./contact/contact.component";
import {AboutUsComponent} from "./about-us/about-us.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'add/reservation', component: ResCreationComponent },
  { path: 'add/foodtruck', component: FoodtruckCreation },
  { path: 'contact', component: ContactComponent },
  { path: 'AboutUs', component: AboutUsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes), MatTableModule, CommonModule, MatPaginatorModule, MatInputModule, FormsModule],
  declarations: [
    ListViewComponent
  ],
  exports: [RouterModule, ListViewComponent]
})
export class AppRoutingModule { }
