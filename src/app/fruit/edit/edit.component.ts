import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FruitService } from '../fruit.service';
import { Fruit } from '../fruit';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {

  id?:number;
  fruit?:Fruit;

  constructor(private activatedRoute:ActivatedRoute,
    private fruitService: FruitService,
    private router:Router
  ){}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next:(params)=>{
        this.id = Number(params.get('id'));
        this.getFruit(this.id);
        
      }
    })
  }

  getFruit(id:number){
    this.fruitService.getById(id).subscribe({
      next:(data)=>{
      let f = {
        id:data.id,
        name:data.name,
        quantity:data.quantity,
        price:data.price
      }
      this.fruitForm.setValue(f);
      }
    })
  }
  fruitForm = new FormGroup({
    id: new FormControl(),
    name:new FormControl(),
    quantity:new FormControl(),
    price:new FormControl()
  })

  onSubmit(){
    this.fruitService.update(this.fruitForm.value).subscribe({
      next:()=>{
        this.router.navigate(['/fruit/home']);
      }
    })
  }

}
