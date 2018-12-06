import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from '@ibm-wch-sdk/ng';

const routes: Routes = [{
        path: '',
        redirectTo: '/home/',
        pathMatch: 'full'
      },
      {
        path: '**',
        component: PageComponent
      }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
