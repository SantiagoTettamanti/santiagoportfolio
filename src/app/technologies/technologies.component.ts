import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css'],
})
export class TechnologiesComponent implements OnInit {
  public imageLinks = [
    '../../assets/Technologies_logos/java.svg.png',
    '../../assets/Technologies_logos/js.svg.png',
  ];

  public currentCarouselIndex = 0;
  constructor() {}

  nextImage() {
    if (this.currentCarouselIndex === this.imageLinks.length - 1) {
      this.currentCarouselIndex = 0;
    } else {
      this.currentCarouselIndex += 1;
    }
  }

  previousImage() {
    if (this.currentCarouselIndex === 0) {
      this.currentCarouselIndex = this.imageLinks.length - 1;
    } else {
      this.currentCarouselIndex -= 1;
    }
  }

  ngOnInit(): void {}
}
