import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home-page.component';
import { SocialPage } from './social-page.component';

const routes: Routes = [
	{ path: 'social', component: SocialPage },
	{ path: '', component: HomePage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
