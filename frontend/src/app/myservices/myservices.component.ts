import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-myservices',
  templateUrl: './myservices.component.html',
  styleUrls: ['./myservices.component.css']
})
export class MyservicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    AOS.init();
  }

}
