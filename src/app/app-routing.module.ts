import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', loadChildren: './pages/tabs/tabs.module#TabsPageModule'},
  { path:'details', loadChildren: './pages/details/details.module#DetailsPageModule'},
  {
    path: 'tab2',
    loadChildren: () => import('./pages/tab2/tab2.module').then( m => m.Tab2PageModule)
  },
  //{ path: 'mediciones', loadChildren: './pages/mediciones/mediciones.module#MedicionesPageModule'},
  //{ path: 'medicion/:id', loadChildren: './pages/medicion/medicion.module#MedicionPageModule'},
  //{ path: 'general', loadChildren: './pages/general/general.module#GeneralPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
