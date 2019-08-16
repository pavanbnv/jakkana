import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {

  appName: string;
  constructor(private titleService: Title) { }

  ngOnInit() {
  }

  public setTitle( ) {
    this.titleService.setTitle(this.appName );
  }
}
