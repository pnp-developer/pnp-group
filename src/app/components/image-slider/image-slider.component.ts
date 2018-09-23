import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pnp-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
})
export class ImageSliderComponent implements OnInit {
  images = ['assets/images/img-1.jpg', 'assets/images/img-2.jpg'];
  counter = 0;
  timeout = 2000;

  constructor() {
    this.startSlider();
  }

  ngOnInit() {}

  startSlider() {}
}
