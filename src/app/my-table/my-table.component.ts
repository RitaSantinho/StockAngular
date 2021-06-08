import { Component, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.scss']
})
export class MyTableComponent implements OnInit {
  @Input() products:any[] = [];

  
  constructor() { }

  
  ngOnInit(): void {

}
}
