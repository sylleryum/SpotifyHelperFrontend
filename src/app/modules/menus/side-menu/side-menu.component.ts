import { Component, OnInit } from '@angular/core';
import {colors} from "../../../helper/literals";

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  color = colors;
  isCollapsed = true;
  constructor() { }

  ngOnInit(): void {
  }

  collapseToggler() {
    // document.getElementById("doc-nav")
  }
}
