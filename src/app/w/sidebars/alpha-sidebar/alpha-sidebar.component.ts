import { Component, OnInit } from '@angular/core';
import { CdkDragEnd,CdkDragStart } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-alpha-sidebar',
  templateUrl: './alpha-sidebar.component.html',
  styleUrls: ['./alpha-sidebar.component.scss']
})
export class AlphaSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
private beforeDragStyle:string = "";
onDragStarted(event: CdkDragStart) {
    console.log("Hello");
    this.beforeDragStyle = ""+event.source.element.nativeElement.style;
    console.log("Before start of the drag " + this.beforeDragStyle );
}
onDragEnded(event: CdkDragEnd) {
   // const previousTransform = event.source.element.nativeElement.style.transform;
    event.source.element.nativeElement.style.transform = 'none'; // visually reset element to its origin
    const source: any = event.source;
    source._passiveTransform = { x: 0, y: 0 } // make it so new drag starts from same origin
    source._activeTransform = {x: 0, y: 0};
    this.beforeDragStyle = "";
    //event.source.element.nativeElement["style"] = this.beforeDragStyle; 
    console.log("After end of the drag " + this.beforeDragStyle);
}
}
