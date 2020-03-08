import { Component, OnInit, Input } from '@angular/core';
import { Bread } from '../../models/bread.model';

@Component({
  selector: 'app-breads',
  templateUrl: './breads.component.html',
  styleUrls: ['./breads.component.css']
})
export class BreadsComponent implements OnInit {

  constructor() { }

  @Input('breads') breads: Bread[] = null;

  ngOnInit() {
  }

}
