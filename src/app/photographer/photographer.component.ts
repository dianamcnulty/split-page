import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photographer',
  templateUrl: './photographer.component.html',
  styleUrls: ['./photographer.component.css']
})
export class PhotographerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.location.href = 'http://photos.dianamcnulty.com';
  }

}
