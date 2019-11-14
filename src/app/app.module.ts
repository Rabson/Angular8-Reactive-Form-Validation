import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
scrollX
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PushNotificationsModule } from 'ng-push'; //import the module
import { ConfirmEqualValidatorDirective } from './shared/directive/confirm-equal-validator.directive';

@NgModule({
  declarations: [AppComponent,
    ConfirmEqualValidatorDirective],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
