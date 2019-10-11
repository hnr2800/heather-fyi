import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home-page.component';
import { SocialPage } from './social-page.component';
import { Blog } from './blog.component';

const routes: Routes = [
	{ path: '', component: HomePage },
	{ path: 'social', component: SocialPage },
	{ path: 'blog', component: Blog },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
