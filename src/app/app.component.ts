import { Component, ElementRef, ErrorHandler, ViewChild } from '@angular/core';
import { ErrorObserver, Observable, Subscription, from, fromEvent, interval, map, take, tap } from 'rxjs';
import { of } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'syngestbel';
  // group="ADMIN"
  // group="MANAGER"
  // group="PROPRIO"
   group="LODGER"
 
  
}
