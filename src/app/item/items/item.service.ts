import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Subject } from 'rxjs';
import { ItemModel } from '../../model/itemmodel';
import { AuthService } from '../../auth/auth.service';


@Injectable({
providedIn: 'root'
})
export class ItemService {
  itemsaveresponse;
  itemsaveresponsesubject = new Subject<string>();
/* itemgetresponse;
itemgetresponsesubject = new Subject<string>(); */

constructor(private httpclient: HttpClient, private http: Http , private authservice: AuthService) {

}

createitem(itemname, itemprice, itemdescription) {
  console.log(itemname, itemprice, itemdescription);
  const itemdata = {itemname, itemprice, itemdescription};
const token = this.authservice.getToken();
this.http.post('https://fir-test-authentication.firebaseio.com/items.json?auth=' + token , itemdata)
.subscribe((response) => {

   this.itemsaveresponse = 'Item Saved';
this.itemsaveresponsesubject.next(...[this.itemsaveresponse]);

  console.log('response is ' , response);
}); /* ,
this.itemsaveresponse = 'Item not saved ,something went wrong,please try again!';
this.itemsaveresponsesubject.next(this.itemsaveresponse); */
}

getitems() {
 return this.http.get('https://fir-test-authentication.firebaseio.com/items.json');
//   .subscribe((response) => {
// this.itemgetresponse = response;
// this.itemgetresponsesubject.next(...[this.itemgetresponse]);
//   });
}

}
