import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarModule } from '@shared/navbar/navbar.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MovilesComponent } from '@auth/moviles/moviles.component';
import { VideojuegosComponent } from '@auth/videojuegos/videojuegos.component';
import { JuegosdemesaComponent } from '@auth/juegosdemesa/juegosdemesa.component';
import { ZapatillasComponent } from '@auth/zapatillas/zapatillas.component';
import { CamisetasfutbolComponent } from '@auth/camisetasfutbol/camisetasfutbol.component';
import { AlbumesmusicaComponent } from '@auth/albumesmusica/albumesmusica.component';
import { AyudaComponent } from '@auth/ayuda/ayuda.component';


@NgModule({
  declarations: [
    AppComponent,
    MovilesComponent,
    VideojuegosComponent,
    JuegosdemesaComponent,
    ZapatillasComponent,
    CamisetasfutbolComponent,
    AlbumesmusicaComponent,
    AyudaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      preventDuplicates: true,

    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
