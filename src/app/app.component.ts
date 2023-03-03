import { Component } from '@angular/core';
import { bindNodeCallback } from 'rxjs';
import { Product } from './product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'antoniolrj';
  age = 25;
  img = 'https://source.unsplash.com/random';
  btnDisabled = true;
  names: string[] = ['antonio', 'julian', 'laura'];
  newName = ''
  products: Product[] = [
    {
      name: "play5",
      price: 50,
      image: 'https://source.unsplash.com/random'
    },
    {
      name: "xbox",
      price: 100,
      image: 'https://source.unsplash.com/random'
    },
    {
      name: "pc",
      price: 700,
      image: 'https://source.unsplash.com/random'
    }
  ]

  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }

  agePlusPlus(){
    this.age++;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.name = element.value;
  }

  addNewName() {
    this.names.push(this.newName)
    this.newName = ''
  }

  deleteName(index: number) {
    console.log(index)
    this.names.splice(index, 1)
  }
}
