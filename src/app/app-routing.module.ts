import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { HeroComponent } from './pages/hero/hero.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'hero/:id', component: HeroComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'heros' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {}
