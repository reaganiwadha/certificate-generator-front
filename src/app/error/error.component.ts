import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ErrorMessages} from './error.messages';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})



export class ErrorComponent implements OnInit {

  errorCode = '';
  errorMessage = '';
  genericError = false;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {  
    this.route.data.subscribe(v => {
      this.errorCode = v.errorCode;
      /* Typescript 3.1.6 doesnt have a 
      nre3ull coalescing operator*/
      this.genericError = (v.genericError == null || v.genericError == undefined) ? false : v.genericError;
      this.errorMessage = (ErrorMessages.errorCode[this.errorCode] == null || ErrorMessages.errorCode[this.errorCode] == undefined) ? ErrorMessages.generic : ErrorMessages.errorCode[this.errorCode];
    });
  }

}
