import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";
import { Item } from "./item";

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

@Injectable({
  providedIn: 'root'
})
export class ListDataService {

  constructor() { }

  getList(): Observable<Item[]> {
    const data = of([
      handleData({ label: 'Hit the gym', checked: true }),
      handleData({ label: 'Pay bills' }),
      handleData({ label: 'Meet George' }),
      handleData({ label: 'Buy eggs' }),
      handleData({ label: 'Read a book' }),
      handleData({ label: 'Organize office' }),
    ]).pipe(delay(200));
    return data;
  }
}
