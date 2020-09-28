import { Component } from '@angular/core';

import { CdkDragDrop, copyArrayItem, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  list = [];
  connectedTo = [];

  constructor() {
    this.list = [{id: '1', data: ['Mahmoud', 'Turki']},
          {id: '2', data: ['Software', 'Engineer']},
          {id: '3', data: ['Web', 'Developer']}];

    for (const minilist of this.list) {
      this.connectedTo.push(minilist.id);
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      // if you want to move elements in the same list
      console.log('dropped Event', `> dropped '${event.container.data}' into '${event.container.id}'`);
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      // if you want move elements between lists
      // you can use the copyArrayItem instead of transferArrayItem if you want to copy the elements
      console.log('dropped Event', `> dropped '${event.container.data}' into '${event.container.id}'`);
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
