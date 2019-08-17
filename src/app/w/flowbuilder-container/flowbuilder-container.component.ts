import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-flowbuilder-container',
  templateUrl: './flowbuilder-container.component.html',
  styleUrls: ['./flowbuilder-container.component.scss']
})
export class FlowbuilderContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  acceptDrop(event: CdkDragDrop<string[]>) {
     
  }
}
