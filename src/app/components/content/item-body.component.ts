import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Item } from '../../models/Item';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './item-body.component.html',
  providers: [DataService],
  styleUrls: ['../components.css']
 })
export class ItemBodyComponent implements OnInit {

  item: Item;
  postID: number;
  progress = true;

  constructor(private dataService: DataService, activeRoute: ActivatedRoute ) {
    this.postID = activeRoute.snapshot.params['postId'];
    console.log(this.postID);
  }

  ngOnInit() {
    if (this.postID) {
      this.load();
    }
  }

  load() {
    this.progress = true;
    this.item = null;
    this.dataService.getItem(this.postID).then((data: Item) => {
      this.item = data;
      this.progress = false;
    });
  }

}
