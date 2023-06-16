import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Employee } from './employee';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule,FormsModule],

  //providers: [Employee],   //If we give class here, then it will load everytime, weather we need that class or not.
  
  providers:[],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    console.log('Loops in TypeScripts And Functions');
  }
}
