import { Component, Input, OnInit } from '@angular/core';
import { Move } from 'src/app/services/move.model';

@Component({
  selector: 'app-move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss'],
})
export class MoveListComponent implements OnInit {
  @Input() moves: Move[];
  constructor() {}

  ngOnInit(): void {}
}
