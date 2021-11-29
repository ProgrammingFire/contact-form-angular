import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
})
export class FormFieldComponent implements OnInit {
  constructor() {}

  @Input() label: string = 'label';
  @Input() type: string = 'text';
  @Input() required: boolean = true;
  @Input() isTextArea: boolean = false;

  ngOnInit(): void {}
}
