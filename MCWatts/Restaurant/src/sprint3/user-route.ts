import { MyRestaurantComponent } from './myRestaurant/myRestaurant.component';


import { Route } from '@angular/router';
import { Component } from '@angular/core';


export const USER_ROUTES: Route[] = [
  {
    path: 'userRestaurants',
    component: MyRestaurantComponent,
  },
];
