import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
 } from '@angular/core';
import { List } from "../list";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input('listData') listData: List = { list: [] }
  @Output() onChecked = new EventEmitter();
  @Output() onClose = new EventEmitter();

  constructor() {
   }

  ngOnInit(): void {
  }

  handleChecked(value: boolean, idx: number) {
    this.onChecked.emit([value, idx]);
  }

  handleClose(idx: number) {
    this.onClose.emit(idx);
  }

}
