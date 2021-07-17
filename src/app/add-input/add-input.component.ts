import {
  Component,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-add-input',
  templateUrl: './add-input.component.html',
  styleUrls: ['./add-input.component.css']
})
export class AddInputComponent implements OnInit {

  @Output() onAdd = new EventEmitter();

  label: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    if (!this.label) alert("You must write something!")
    else {
      this.onAdd.emit(this.label);
      this.label = '';
    }
  }

}
