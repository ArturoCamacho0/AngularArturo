import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imageObject: Array<object> = [{
      image: 'assets/images/1.png',
      thumbImage: 'assets/images/1.png',
      alt: 'alt of image',
      title: '1'
    },{
      image: 'assets/images/2.png',
      thumbImage: 'assets/images/2.png',
      alt: 'alt of image',
      title: '2'
    },{
      image: 'assets/images/3.png',
      thumbImage: 'assets/images/3.png',
      alt: 'alt of image',
      title: '3'
    },{
      image: 'assets/images/4.png',
      thumbImage: 'assets/images/4.png',
      alt: 'alt of image',
      title: '4'
    },{
      image: 'assets/images/5.png',
      thumbImage: 'assets/images/5.png',
      alt: 'alt of image',
      title: '5'
    }
  ];
}
