import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  @Input('num1')num1:string="";
  @Input('num2')num2:string="";
  @Output('computed')computed=new EventEmitter<number>()
  result:number=0;

  add(){
    this.result=parseInt(this.num1)+parseInt(this.num2);
    this.computed.emit(this.result)
  }

  multiply(){
    this.result=parseInt(this.num1) * parseInt(this.num2);
    this.computed.emit(this.result)
  }

  subtract(){
    this.result=parseInt(this.num1)- parseInt(this.num2);
    this.computed.emit(this.result)
  }
}
