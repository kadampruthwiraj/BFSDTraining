import { Routes } from '@angular/router';

import { FortestingComponent } from './fortesting/fortesting.component';
import { LearnpipeComponent } from './learnpipe/learnpipe.component';
import {
  RouterinchildComponent,
} from './routerinchild/routerinchild.component';

export const routes: Routes = [
  {
    path: 'learnpipe',
    component: LearnpipeComponent,
  },
  {
    path: 'testingComponent',
    component: FortestingComponent,
  },
  {
    path: 'routeInChild',
    component: RouterinchildComponent,
  },
];
