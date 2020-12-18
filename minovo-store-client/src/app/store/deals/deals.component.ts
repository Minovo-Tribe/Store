import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss'],
})
export class DealsComponent implements OnInit {
  deals = [
    {
      image:
        'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/12/12/fd2dfc2d-a5da-47f0-ad9b-3f56b71015a71607754665860-Combo-Off_01.jpg',
    },
    {
      image:
        'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/12/12/30c07cdc-d908-4c40-a9f7-42c5835571fa1607754665817-Combo-Off_03.jpg',
    },
    {
      image:
        'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/12/12/2f8e7778-a6a3-4bfb-8a6e-a5bcbb246eca1607754665775-Combo-Off_05.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
