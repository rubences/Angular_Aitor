import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumesmusicaComponent } from '@auth/albumesmusica/albumesmusica.component';
import { AyudaComponent } from '@auth/ayuda/ayuda.component';
import { CamisetasfutbolComponent } from '@auth/camisetasfutbol/camisetasfutbol.component';
import { AuthGuard } from '@auth/guards/auth.guard'
import { JuegosdemesaComponent } from '@auth/juegosdemesa/juegosdemesa.component';
import { MovilesComponent } from '@auth/moviles/moviles.component';
import { VideojuegosComponent } from '@auth/videojuegos/videojuegos.component';
import { ZapatillasComponent } from '@auth/zapatillas/zapatillas.component';

const routes: Routes = [
{ path: '', redirectTo:'/home', pathMatch:'full'},
{ path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
{ path: 'sign-in', loadChildren: () => import('./pages/auth/sign-in/sign-in.module').then(m => m.SignInModule), canActivate: [AuthGuard]},
{ path: 'sign-up', loadChildren: () => import('./pages/auth/sign-up/sign-up.module').then(m => m.SignUpModule), canActivate: [AuthGuard]},
{ path: 'moviles', component: MovilesComponent},
{ path: 'videojuegos', component: VideojuegosComponent},
{ path: 'juegosdemesa', component: JuegosdemesaComponent},
{ path: 'zapatillas', component: ZapatillasComponent},
{ path: 'camisetasfutbol', component: CamisetasfutbolComponent },
{ path: 'albumesmusica', component: AlbumesmusicaComponent },
{ path: 'ayuda', component: AyudaComponent },
{ path: '**', redirectTo:'/home', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
