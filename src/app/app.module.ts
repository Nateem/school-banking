import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GridModule } from '@progress/kendo-angular-grid';
// Import the Animations module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import the ButtonsModule
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { RippleModule } from '@progress/kendo-angular-ripple';
import { InputsModule,MaskedTextBoxModule,NumericTextBoxModule } from '@progress/kendo-angular-inputs';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { router_forRoot } from './router-menu';
import { NavbarComponent } from './design/navbar/navbar.component';
import { HomeComponent } from './home/home.component';

import {ConnectionService} from './connection.service';
import {HttpModule} from '@angular/http';
import { StudentListComponent } from './student-list/student-list.component';
import { DepositAccountComponent } from './deposit-account/deposit-account.component';
import { RouterPipe } from './router.pipe';
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    NavbarComponent,
    HomeComponent,
    StudentListComponent,
    DepositAccountComponent,
    RouterPipe
  ],
  imports: [
    FormsModule,
    HttpModule,
    RouterModule.forRoot(router_forRoot),
    BrowserModule,
    BrowserAnimationsModule,
    ButtonsModule,
    RippleModule,
    GridModule,
    InputsModule,
    MaskedTextBoxModule,
    NumericTextBoxModule

  ],
  providers: [ConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
