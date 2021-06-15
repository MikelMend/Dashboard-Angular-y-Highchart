import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {


  constructor() { }

  bigChart(){
    return [{
      name: 'Asia',
            data: [502, 635, 809, 947, 1402, 3634, 5268]
        }, {
            name: 'Africa',
            data: [106, 107, 111, 133, 221, 767, 1766]
        }, {
            name: 'Europe',
            data: [163, 203, 276, 408, 547, 729, 628]
        }, {
            name: 'America',
            data: [18, 31, 54, 156, 339, 818, 1201]
        }, {
            name: 'Oceania',
            data: [2, 2, 2, 6, 13, 30, 46]
    }];
}

cards(){
  return [71,78,39,66];
}

pie(){
  return [{
    name: 'Brands',
    colorByPoint: true,
    data: [{
        name: 'Chrome',
        y: 61.41,
        sliced: true,
        selected: true
    }, {
        name: 'Internet Explorer',
        y: 11.84
    }, {
        name: 'Firefox',
        y: 10.85
    }, {
        name: 'Edge',
        y: 4.67
    }, {
        name: 'Safari',
        y: 4.18
    }, {
        name: 'Sogou Explorer',
        y: 1.64
    }, {
        name: 'Opera',
        y: 1.6
    }, {
        name: 'QQ',
        y: 1.2
    }, {
        name: 'Other',
        y: 2.61
    }]
  }];
}

table(){
  return [
      ['Shanghai', 24.2],
      ['Beijing', 20.8],
      ['Karachi', 14.9],
      ['Shenzhen', 13.7],
      ['Guangzhou', 13.1],
      ['Istanbul', 12.7],
      ['Mumbai', 12.4],
      ['Moscow', 12.2],
      ['São Paulo', 12.0],
      ['Delhi', 11.7],
      ['Kinshasa', 11.5],
      ['Tianjin', 11.2],
      ['Lahore', 11.1],
      ['Jakarta', 10.6],
      ['Dongguan', 10.6],
      ['Lagos', 10.6],
      ['Bengaluru', 10.3],
      ['Seoul', 9.8],
      ['Foshan', 9.3],
      ['Tokyo', 9.3]
  ]
}
}
