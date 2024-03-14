import {Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import {createCustomElement} from "@angular/elements";
import {FormsModule} from "@angular/forms";
import { RickComponent } from './components/rick/rick.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    RickComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  //bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector:Injector){}
  ngDoBootstrap(){

    const mainApp=createCustomElement(AppComponent,{injector:this.injector});
    customElements.define('main-element',mainApp);

    const testComp=createCustomElement(CalculatorComponent,{injector:this.injector});
    customElements.define('calculator-element',testComp);

    const rickComp=createCustomElement(RickComponent,{injector:this.injector});
    customElements.define('rick-morty-element',rickComp);
  }
}
