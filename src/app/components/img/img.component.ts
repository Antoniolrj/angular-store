import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy{

  @Input() img: string = ''
  @Input() alt: string = ''
  @Output() loaded = new EventEmitter()
  imageDefault = './assets/images/default.webp'



  constructor(){
    //before render
    console.log('constructor inicializado', 'imgValue => ', this.img)
  }

  ngOnChanges(changes: SimpleChanges): void {
    //before render - changes in inputs
    // run n times
    console.log('ngOnChanges', 'imgValue => ', this.img)
    console.log(changes)

  }

  ngOnInit(): void {
    //before render
    //listen continually
    // fetch - promises - async -- once time before render
  }

  ngAfterViewInit(): void {
    //handler children
    //after render
    console.log('ngAfterViewInit', 'imgValue => ', this.img)

  }

  ngOnDestroy(): void {
    //delete components on interfaz
    console.log('ngOnDestroy', 'imgValue => ', this.img)
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    this.loaded.emit()
  }

}


