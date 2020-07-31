import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RightTabComponent } from './right-tab/right-tab.component';


const routes: Routes = [
  {path: '', component: RightTabComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    onSameUrlNavigation: "reload",
    anchorScrolling:'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
