// Import necessary modules and components
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { CartPageComponent } from './cart-page/cart-page.component';

// Define the routes


const routes: Routes = [
  {path:'',component:HomeComponent},{
    path:'search/:searchItem',component:HomeComponent
  },{
    path: 'tag/:tags', component: HomeComponent
  },
  {
    path:'food/:id',component:FoodpageComponent
  },{
    path:'cart-page',component:CartPageComponent
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
