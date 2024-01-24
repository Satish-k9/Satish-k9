import { Component } from '@angular/core';

@Component({
  selector: 'app-class-style',
  templateUrl: './class-style.component.html',
  styleUrls: ['./class-style.component.css']
})
export class ClassStyleComponent {

  myClass : boolean = false;

  myStyle1 : string = "20px";

  isActive : boolean = true;

  multClass = {
    class1 : true,
    class2 : false,
    class3 : true

  }

  multStyle ={
    'background': 'red',
    'border': '10px solid blue'
}
}
