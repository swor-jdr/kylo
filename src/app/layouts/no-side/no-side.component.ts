import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 

@Component({
  selector: 'app-no-side',
  templateUrl: './no-side.component.html',
  styleUrls: ['./no-side.component.scss']
})
export class NoSideComponent {
  color = 'defaultdark';
  showSettings = false;
  showMinisidebar = false;
  showDarktheme = true;
  showRtl = false;

  public innerWidth: any;

  constructor(public router: Router) {}

  goHome() {}
}
