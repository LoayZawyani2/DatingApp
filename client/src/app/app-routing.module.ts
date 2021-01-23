import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemeberListComponent } from './members/memeber-list/memeber-list.component';
import { MessagesComponent } from './messages/messages.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'members', component: MemeberListComponent},
  { path: 'members/:id', component: MemberDetailComponent},
  { path: 'lists', component: ListsComponent},
  { path: 'messages', component: MessagesComponent},
  
  // this means if the user enter something not specified here 
  { path: '**', component: HomeComponent, pathMatch: 'full'}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
