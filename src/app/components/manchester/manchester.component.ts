import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-manchester',
  templateUrl: './manchester.component.html',
  styleUrls: ['./manchester.component.scss']
})
export class ManchesterComponent implements OnInit {
  dateFrom;
  dateUntil;
  formData;
  constructor() { }

  ngOnInit(): void {
    this.formData = new FormGroup({
      dateFrom: new FormControl(),
      dateUntil: new FormControl()
    })
  }
  onClickSubmit(data) {
    this.dateFrom = data.dateFrom, this.dateUntil = data.dateUntil
    console.log
  }
}
