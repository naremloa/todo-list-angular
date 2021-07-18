import { Component } from '@angular/core';
import { ListDataService } from './list-data.service';
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
    list: [],
  }

  constructor(
    private listDataService: ListDataService
  ) {}

  ngOnInit() {
    this.getListData();
  }

  getListData() {
    this.listDataService.getList().subscribe(data => {
      this.listData.list = data;
    })
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
