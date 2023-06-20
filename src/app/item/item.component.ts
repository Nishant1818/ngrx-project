import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ServiceService } from '../services/service.service';
// import { Item } from '../models/item.model';
// import { AppState } from '../store/app.state';
// import { UpdateItem } from '../store/items.actions';

 


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() data: any;

 

  // @Input() data: Item;
  // item$: Observable<Item>;

 

  constructor(private userData:ServiceService) {}

 

  ngOnInit(): void {
  }

 

  // updateItemStatus(status: string): void {
  //   const updatedItem: Item = { ...this.data, status };
  //   this.store.dispatch(new UpdateItem(updatedItem));
  // }

 

}


 