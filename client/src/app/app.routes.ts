import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RegisterComponent } from './register/register.component';
import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { FeedbackComponent } from './feedback/feedback.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'home/aboutus',component:AboutusComponent},
    {path:'home/register',component:RegisterComponent},
    {path:'home/login',component:LoginComponent},
    {path:'home/feedback',component:FeedbackComponent},
    {path:'home/register/login',component:LoginComponent},
    {path:'home/login/register',component:RegisterComponent},
    {path:'aboutus/register',component:RegisterComponent},
    {path:'register/login',component:LoginComponent},
    {path:'login/register',component:RegisterComponent},
    {path:'login/home',component:HomeComponent},
    {path:'register/home',component:HomeComponent},
    {path:'aboutus/home',component:HomeComponent},
    {path:'home/register/login/register',component:RegisterComponent},
    {path:'home/login/register/login',component:LoginComponent},
    {path:'login/feedback',component:FeedbackComponent},
    {path:'register/feedback',component:FeedbackComponent}
];
