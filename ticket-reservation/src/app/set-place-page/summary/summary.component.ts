import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  identyficator!: string;

  constructor(private router: Router, private dialogRef: MatDialogRef<SummaryComponent>) { }

  ngOnInit(): void {
    this.identyficator = this.getIdentificator();
  }

  getIdentificator(): string {
    return `${Math.floor(Math.random() * (100000000 - 10000 + 1)) + 10000}`;
  }

  goBack(): void{
    this.router.navigate([`/lista-seansow`]);
    this.dialogRef.close();
  }
}
