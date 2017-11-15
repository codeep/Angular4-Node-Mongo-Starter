import { Http, RequestOptions, Headers, Response, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class RequestService {

  constructor(private http: Http, private requestOptions: RequestOptions) {
        const headers = new Headers({
          'Content-Type': 'application/json'
        });
        this.requestOptions = new RequestOptions({
          withCredentials: true,
          headers
        });
      }

    public get(reqURL, paramsArray = []) {
      const params: URLSearchParams = new URLSearchParams();
      paramsArray.map(item => {
        params.set(item.field, item.value);
      });
      const requestOptions = this.requestOptions;
      requestOptions['search'] = params;

      return this.http.get(reqURL, requestOptions)
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw('Server error'));
    }

    public post(reqURL, body = {}) {
      const requestOptions = this.requestOptions;
      requestOptions['type'] = 'POST';

      return this.http.post(reqURL, JSON.stringify(body), requestOptions)
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw('Server error'));
    }

}
