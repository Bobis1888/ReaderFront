import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Item } from '../../../model/Item';
import { Response } from '../../../model/response';

@Component({
  templateUrl: './item-list.component.html',
  providers: [DataService],
  styleUrls: ['../../components.css'],
 })
export class ItemListComponent implements OnInit {

  items: Item [];
  progress = true;
  nameSource = 'habr';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.progress = true;
    this.items = null;
    this.dataService.getItems(this.nameSource).subscribe((data: Response) => {
      this.items = data.items;
      this.progress = false;
    });
  }
}
