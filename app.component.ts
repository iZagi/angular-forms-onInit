import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormArray } from '@angular/forms'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  myForm:FormGroup;

  storeItems:any;
  
  items=[
    {name:'Paprika', price:'10kn'},
    {name:'Mlijeko', price:'12kn'},
    {name:'Kruh', price:'5kn'},
    {name:'Krastavci', price:'14kn'},
    {name:'Piletina', price:'40kn'},
  ]

  constructor( private _fb: FormBuilder ){

    this.myForm = this._fb.group({
      store:[''],
      itemsInCart: this._fb.array([])
    })
  
  }

  ngOnInit(){
  
    this.storeItems = this.myForm.get('itemsInCart') as FormArray
    this.items.forEach(element => {
    this.storeItems.push(this.createItem(element))
    });

  }
  
  createItem = (item) :FormGroup =>{
    return this._fb.group({
        name:item.name,
        price: item.price
    })
  }

  onSubmit = () => {
    console.log(this.myForm.value)
  }

}
