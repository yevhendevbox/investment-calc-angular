import {inject, NgModule} from "@angular/core";
import { AppComponent } from "./app.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { HeaderComponent } from "./header/header.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";

import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [ AppComponent, HeaderComponent, UserInputComponent, InvestmentResultsComponent ],
  bootstrap: [ AppComponent ],
  exports: [
    HeaderComponent
  ],
  imports: [ BrowserModule, FormsModule ]
})
export class AppModule {}
