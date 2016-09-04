import { Component, OnInit } from "@angular/core";

import { ApiService } from "../services/api.service";

@Component({
    selector: "app",
    templateUrl: "templates/app.html",
    providers: [ApiService]
})
export class AppComponent implements OnInit {
  private version: string;
  
  constructor(protected api: ApiService) { }

  ngOnInit(): void {
    this.api.get("/api/version")
            .then((data) => {
              this.version = data.version;
            });
  }
}
