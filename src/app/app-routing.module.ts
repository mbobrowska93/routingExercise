import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path: 'one', component: OneComponent},
  {path: 'two', component: TwoComponent},
  {path: 'three', component: ThreeComponent},
  { path: '',   redirectTo: '/one', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// export const myComponents=[OneComponent, TwoComponent, ThreeComponent]
// wtedy w app module zamiast importowac komponenty importuje myComponents

