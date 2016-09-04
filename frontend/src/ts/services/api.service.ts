import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/toPromise";

@Injectable()
export class ApiService {
  constructor(protected http: Http) { }

  protected handleError(error: any): Promise<void> {
    console.error(error);

    return Promise.reject(error.message || error);
  }

  protected extractData(response: Response): Object {
    return response.json();
  }

  protected handleRequest(request: Observable<Response>): Promise<Response> {
    return request.toPromise()
                  .then(this.extractData)
                  .catch(this.handleError);
  }

  public get(url: string): any {
    return this.handleRequest(this.http.get(url));
  }

  public post(url: string, data?: any): any {
    return this.handleRequest(this.http.post(url, data));
  }
}
