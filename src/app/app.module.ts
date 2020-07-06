import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { TaskComponent } from './task/task.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OverviewComponent } from './overview/overview.component';
import { NewListComponent } from './new-list/new-list.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TaskComponent,
    DashboardComponent,
    OverviewComponent,
    NewListComponent,
    NewTaskComponent
  ],
  imports: [
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
