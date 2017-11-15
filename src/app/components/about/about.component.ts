import { Component, OnInit } from '@angular/core';
import { RequestService } from './../../services/request/request.service';
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],

})
export class AboutComponent implements OnInit {
  public apiResponse: string;

  constructor(private requestService: RequestService) { }

  ngOnInit() {
    console.log(environment.baseURL)
    this.requestService.get(environment.baseURL + '/api/users')
    .subscribe(res => {
      this.apiResponse = res.data;
    }, err => {
      console.log(err);
      this.apiResponse = err;
    });
  }

}
