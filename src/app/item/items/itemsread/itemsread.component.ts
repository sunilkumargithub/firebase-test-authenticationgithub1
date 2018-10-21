import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Subject } from 'rxjs';
import { ItemModel } from '../../../model/itemmodel';
import {Response} from '@angular/http';

@Component({
  selector: 'app-itemsread',
  templateUrl: './itemsread.component.html',
  styleUrls: ['./itemsread.component.css']
})
export class ItemsreadComponent implements OnInit {
  itemgetresponse = [];


  constructor(private itemsservice: ItemService) { }

  ngOnInit() {

  }

  getitems() {
this.itemsservice.getitems()
.subscribe((response: Response) => {
  console.log(response.json());
  const n: ItemModel[] = response.json();
  console.log('n is ' , n);


    });
  }
}
