import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pnp-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  newsItems = [
    {
      date: new Date(),
      image: 'http://globalpnp1.stsoy.kz/portfolio/img-9.jpg',
      shortText: `Значимость этих проблем настолько очевидна, что сложившаяся структура организации в
      значимость этих проблем настолько очевидна, что сложившаяся структура организации в`,
      duration: 10,
      text: `Значимость этих проблем настолько очевидна, что сложившаяся структура организации в
        значимость этих проблем настолько очевидна, что сложившаяся структура организации в
        `,
      title: 'TITLE',
    },
    {
      date: new Date(),
      image: 'http://globalpnp1.stsoy.kz/portfolio/img-8.jpg',
      shortText: 'Значимость этих проблем настолько очевидн',
      duration: 20,
      text:
        'Значимость этих проблем настолько очевидна, что сложившаяся структура организации в',
      title: 'TITLE',
    },
    {
      date: new Date(),
      image: 'http://globalpnp1.stsoy.kz/portfolio/img-7.jpg',
      shortText: 'Значимость этих проблем настолько очевидн',
      duration: 4,
      text:
        'Значимость этих проблем настолько очевидна, что сложившаяся структура организации в',
      title: 'TITLE',
    },
    {
      date: new Date(),
      image: 'http://globalpnp1.stsoy.kz/portfolio/img-6.jpg',
      shortText: 'Значимость этих проблем настолько очевидн',
      duration: 2,
      text:
        'Значимость этих проблем настолько очевидна, что сложившаяся структура организации в',
      title: 'TITLE',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
