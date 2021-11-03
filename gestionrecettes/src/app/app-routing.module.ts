import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'recettett',
    loadChildren: () => import('./recettett/recettett.module').then( m => m.RecettettPageModule)
  },
  {
    path: 'calculing',
    loadChildren: () => import('./calculing/calculing.module').then( m => m.CalculingPageModule)
  },
  {
    path: 'pageinternet',
    loadChildren: () => import('./pageinternet/pageinternet.module').then( m => m.PageinternetPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
