import { Component, OnInit } from '@angular/core';
import {participant} from '../participant';
@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {
  participant = participant;

  constructor() { }

  ngOnInit() {
  }

}