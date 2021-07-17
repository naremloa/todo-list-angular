import { Component } from '@angular/core';
import type { List } from "./list";
import type { Item } from './item';

const handleData = ({
  label,
  checked = false
}: {
  label: string,
  checked?: boolean,
}): Item => ({
  label,
  checked,
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  someTest = 'test';
  listData: List = {
    list: [
      handleData({ label: 'Hit the gym', checked: true }),
      handleData({ label: 'Pay bills' }),
      handleData({ label: 'Meet George' }),
      handleData({ label: 'Buy eggs' }),
      handleData({ label: 'Read a book' }),
      handleData({ label: 'Organize office' }),
    ],
  }

  handleChecked([checked, idx]: [boolean, number]) {
    this.listData.list.splice(idx, 1, { ...this.listData.list[idx], checked });
  }
  handleAdd(label: string) {
    this.listData.list.push(handleData({ label }))
  }
  handleClose(idx: number) {
    this.listData.list.splice(idx, 1);
  }
}
