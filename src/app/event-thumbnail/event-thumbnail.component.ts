import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'poc-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.sass']
})
export class EventThumbnailComponent implements OnInit {

  @Input() event: any;
  @Output() eventClick = new EventEmitter();
  public x = 10;
  someChildProp: any = 'value in child';

  constructor() { }

  ngOnInit() {
  }

  handleClickMe() {
    this.eventClick.emit(this.event.name);
  }

  logFoo() {
    console.log('using #Template variable to interact with child component');
  }

}
