import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItemService } from '../item.service';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-itemswrite',
  templateUrl: './itemswrite.component.html',
  styleUrls: ['./itemswrite.component.css']
})
export class ItemswriteComponent implements OnInit {
  itemsaveresponse;
  constructor(private itemservice: ItemService , private authservice: AuthService) { }

  ngOnInit() {
    this.itemservice.itemsaveresponsesubject.subscribe((response) => this.itemsaveresponse = response);
  }
  oncreate(form: NgForm) {
    console.log(form.value);
    const token = this.authservice.getToken();
    console.log('token is ' , token);
this.itemservice.createitem(form.value.itemname, form.value.itemprice, form.value.itemdescription);
form.reset();
  }
}
