import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Expense } from 'src/app/Expense';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-expense-table',
  templateUrl: './expense-table.component.html',
  styleUrls: ['./expense-table.component.css']
})
export class ExpenseTableComponent implements OnInit {
  @Input() expenses!: Expense[];
  @Output() onDeleteExpense: EventEmitter<Expense> = new EventEmitter();

  displayedColumns: string[] = ['expense','category','price', 'delete'];
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  onDelete(expense: Expense){
    this.onDeleteExpense.emit(expense);
  }
}
