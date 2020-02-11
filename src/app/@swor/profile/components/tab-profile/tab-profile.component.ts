import { Component, OnInit, Input } from '@angular/core';
import { Personnage } from '../../../auth/models/personnage.model';

@Component({
  selector: 'app-tab-profile',
  templateUrl: './tab-profile.component.html',
  styleUrls: ['./tab-profile.component.css']
})
export class TabProfileComponent implements OnInit {

  constructor() { }

  @Input() personnage: Personnage;

  ngOnInit() {
  }

}
