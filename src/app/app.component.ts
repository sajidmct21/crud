import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crud';
  
  countryList:Country[]=[
    new Country('pakistan','Pakistan'),
    new Country('iran','Iran'),
    new Country('afghanistan','Afghanistan'),
    new Country('iraq','Iraq'),
  ];


 contactForm = new FormGroup({
  fname: new FormControl(),
  lname:new FormControl(),
  gender:new FormControl(),
  country:new FormControl()
})


submitData(){
  console.log(this.contactForm.value)
}

openModal(){
  const modelDiv = document.getElementById('myModal');
  if(modelDiv!=null){
    modelDiv.style.display = 'block';
  }
}
}

export class Country{
  id?:string;
  name?:string;

  constructor(id:string,name:string){
    this.id = id;
    this.name = name
  }
}