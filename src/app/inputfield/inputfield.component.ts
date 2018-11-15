import { Component, OnInit } from '@angular/core';
import { InputService } from './input.service';

@Component({
  selector: 'app-inputfield',
  templateUrl: './inputfield.component.html',
  styleUrls: ['./inputfield.component.css'],
  providers:  [InputService]
})
export class InputfieldComponent implements OnInit {

  inputs: any[];

  constructor(service: InputService) {
    this.inputs = service.getInputs();
  }

  ngOnInit() {
  }

}
