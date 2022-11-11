import { Component, OnInit } from '@angular/core';

import { Discipline } from '../Discipline';

import { DisciplineService } from 'src/app/services/disciplines.service';

@Component({
  selector: 'app-discipline',
  templateUrl: './discipline.component.html',
  styleUrls: ['./discipline.component.css']
})
export class DisciplineComponent implements OnInit {

  disciplines: Discipline[] = [];

  constructor(private disciplineService: DisciplineService) { 
    this.getDisciplines()
  }

  ngOnInit(): void {
  }

  
  getDisciplines(): void {
    this.disciplineService.getAll().subscribe((disciplines) => (this.disciplines = disciplines));
  }
}
