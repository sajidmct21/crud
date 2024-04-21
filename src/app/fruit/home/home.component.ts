import { Component, OnInit } from '@angular/core';
import { Fruit } from '../fruit';
import { FruitService } from '../fruit.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  allfruit:Fruit[]=[];

  constructor(private fruitService:FruitService){}

  ngOnInit(): void {
   this.loadFruit();
  }
  loadFruit(){
    this.fruitService.getAll().subscribe({
      next:(data)=>{
        this.allfruit = data;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  deleteFruit(id:any){
    this.fruitService.delete(Number(id)).subscribe({
      next:(data)=>{
        this.allfruit = this.allfruit.filter(_ => _.id != id)
    
    }})
  }

}
