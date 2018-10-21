import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
 import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AppRoutinModule } from './app-routing-module';
import { HeaderComponent } from './header/header.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { ItemsComponent } from './item/items/items.component';
import { ItemsreadComponent } from './item/items/itemsread/itemsread.component';
import { ItemswriteComponent } from './item/items/itemswrite/itemswrite.component';
import { HttpModule } from '@angular/http';

import { HttpClientModule } from '@angular/common/http';
import { AuthguardComponent } from './authguard/authguard.component';
import { AuthGuard } from './auth/authguard.service';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HeaderComponent,
    MainNavComponent,
    ItemsComponent,
    ItemsreadComponent,
    ItemswriteComponent,
    AuthguardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
HttpModule,
    RouterModule,
    AppRoutinModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent ]
})
export class AppModule { }
