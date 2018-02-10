import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { routing } from './app.component';
import { HeroesComponent }      from './heroes/heroes.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SideNavbarComponent} from './side-navbar/side-navbar.component';
import {LoginComponent} from './login/login.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HighlightDirective } from './directives-common/highlight/highlight.directive';
import { UserService } from './services-common/authentication/user.service';
import { ModalModule } from 'ngx-bootstrap';// nx-bootstrap initialize

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeroesComponent,
    PageNotFoundComponent,
    DashboardComponent,
    SideNavbarComponent,
    HeroDetailComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    ModalModule.forRoot()
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
