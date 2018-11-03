import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  selected = 1;
  list: any = [{ id: 0, text: '0' }, { id: 1, text: 1 }];
  changed(e) {
    console.log(this.selected);
  }
}
