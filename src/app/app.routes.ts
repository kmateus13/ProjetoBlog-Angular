import { Routes } from '@angular/router';

import { CreateComponent } from './post/create/create.component';
import { IndexComponent } from './post/index/index.component';


export const routes: Routes = [
 
  { path: '', component: IndexComponent }, 
  { path: 'post/create', component: CreateComponent },
  { path: 'post/:postId/edit', component: CreateComponent }

];
