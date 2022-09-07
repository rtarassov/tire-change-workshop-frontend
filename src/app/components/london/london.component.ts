import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { AvailableTime } from './AvailableTime';

@Component({
  selector: 'app-london',
  templateUrl: './london.component.html',
  styleUrls: ['./london.component.scss']
})
export class LondonComponent implements OnInit {
  dateFrom: FormControl;
  dateUntil: FormControl;
  formData: FormGroup;
  availableTimes: AvailableTime[] = [];

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.formData = new FormGroup({
      dateFrom: new FormControl(),
      dateUntil: new FormControl()
    })
  }
  onClickSubmit(data) {
    this.dateFrom = data.dateFrom;
    this.dateUntil = data.dateUntil;
    this.findAvailableTimes();
  }

  public findAvailableTimes() {
    let url = "http://localhost:8080/tire-change-times/available?from=" + this.dateFrom + "&until=" + this.dateUntil;
    this.http.get<AvailableTime[]>(url).subscribe(
      response => {
        this.availableTimes = response;
      },
      error => {
        alert("An error has occurred") //Div for error
      }
    );
  }
}
