import { Component } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent {
dynName : string = "Satish";

myMethod() {
  return "My Name is " + this.dynName;
}

appStatus: boolean = false;
status1 = "Online";
status2 = "Offline";

enable :boolean = true;

}
