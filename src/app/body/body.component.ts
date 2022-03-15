import { Component, OnInit } from '@angular/core';
import 'animate.css';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

  
  isShowModal: boolean = false;
  showOverlay:any = false;
  showBusinessModel:any = false;

  openclose(){
    this.isShowModal =! this.isShowModal
    this.showOverlay =! this.showOverlay
    this.showBusinessModel =! this.showBusinessModel
  }
}
