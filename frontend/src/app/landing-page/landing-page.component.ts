import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css', './landing-page2.css']
})
export class LandingPageComponent implements OnInit {

  peopledata=[{
    name:"",
    review:"",
    imageurl:""
  }]

  constructor(private peopleservice:PeopleService) { }

  ngOnInit(): void {
    
   

    this.peopleservice.getpeople()
    .subscribe((data)=>{
        this.peopledata=JSON.parse(JSON.stringify(data))

    })
  }


}
