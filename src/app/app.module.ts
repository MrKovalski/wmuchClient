import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';

// Aplication modules
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { LandingModule } from './pages/landing/landing.module';
import { WorkModule } from './pages/work/work.module';
import { UsersModule } from './pages/users/users.module';
import { AuthModule } from './pages/auth/auth.module';
import { NavComponent } from './layout/nav/nav.component';
import { HttpHandleErrorService } from  './pages/shared/_services/http-handle-error.service';
import { HttpInterceptorService } from  './shared/_services/http-interceptor.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProfilModule } from './pages/profil/profil.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingModule,
    WorkModule,
    UsersModule,
    AuthModule,
    ProfilModule,
    AngularFontAwesomeModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    Title,
    HttpHandleErrorService,
    {
    provide: HTTP_INTERCEPTORS,
        useClass: HttpInterceptorService ,
        multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
