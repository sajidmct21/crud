import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FruitService } from '../fruit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  constructor(private fruitService:FruitService,
    private router:Router
  ){}

  fruitForm = new FormGroup({
    id: new FormControl(),
    name:new FormControl(),
    quantity:new FormControl(),
    price:new FormControl()
  })

  onSubmit(){
    this.fruitService.create(this.fruitForm.value).subscribe({
      next:()=>{
        this.router.navigate(['/fruit/home']);
      }
    })
  }
}
