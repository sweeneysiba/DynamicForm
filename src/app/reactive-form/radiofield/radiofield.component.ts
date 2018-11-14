import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-radiofield',
  templateUrl: './radiofield.component.html',
  styleUrls: ['./radiofield.component.css']
})
export class RadiofieldComponent implements OnInit {
  @Input()form;
  constructor() { }

  ngOnInit() {
    console.log(this.form.value);
  }


}
