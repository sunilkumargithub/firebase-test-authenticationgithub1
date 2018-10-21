import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { NgModule } from '@angular/core';
import { ItemsComponent } from './item/items/items.component';
import { AuthguardComponent } from './authguard/authguard.component';
import { AuthGuard } from './auth/authguard.service';

const approutes: Routes = [

{path: 'signup', component: SignupComponent},
{path: 'signin', component: SigninComponent},
{path: 'items', component: ItemsComponent},
{path: 'authguard', component: AuthguardComponent , canActivate: [AuthGuard]}


];

@NgModule({
imports: [RouterModule.forRoot(approutes)],
exports: [RouterModule]
})

export class AppRoutinModule {

}
