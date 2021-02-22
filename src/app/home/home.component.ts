import {Component, OnInit, ViewChild} from '@angular/core';
import { NgbSlideEvent, NgbSlideEventSource, NgbCarousel} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showNavigationArrows = true;
  showNavigationIndicators = true;
  pauseOnHover = true;

  @ViewChild('mycarousel', {static : true}) carousel: NgbCarousel;
  constructor() { }

  ngOnInit(): void {
    this.startCarousel();
  }
  startCarousel() {
    this.carousel.cycle();
  }
}
