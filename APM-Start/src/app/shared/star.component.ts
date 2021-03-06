import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked : EventEmitter<string> = new EventEmitter<string>();

  constructor(){

  };

  ngOnChanges(){
    this.starWidth = this.rating * 70 / 5;
  }

  onClick(): void {
    this.ratingClicked.emit(`The rating stars is ${this.rating}`)
  }

}
 