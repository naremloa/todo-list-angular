import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() label: string = '';
  @Input() checked: boolean = false;
  @Output() onChecked = new EventEmitter();
  @Output() onClose = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log('changes', this.label, this.checked);
  }

  handleClick() {
    this.onChecked.emit(!this.checked);
  }

  handleClose(event: MouseEvent) {
    event.stopPropagation();
    this.onClose.emit();
  }

}
