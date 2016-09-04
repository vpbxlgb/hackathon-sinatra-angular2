import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";

import { AppComponent }  from "./components/app.component";
import { ApiService }  from "./services/api.service";

@NgModule({
  imports: [BrowserModule, HttpModule],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  providers: [ApiService]
})
export class AppModule { }
