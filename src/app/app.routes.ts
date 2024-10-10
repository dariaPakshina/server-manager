import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';

export const routes: Routes = [
  { path: 'users', component: UsersComponent },
  // /: dynamic parameters, got from ts component
  { path: 'users/:id/:name', component: UserComponent },
  { path: '', component: HomeComponent },
  { path: 'servers', component: ServersComponent },
  { path: 'servers/:id/edit', component: EditServerComponent },
];
