import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Expense } from 'src/app/Expense';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-expense-item',
  templateUrl: './expense-item.component.html',
  styleUrls: ['./expense-item.component.css']
})
export class ExpenseItemComponent implements OnInit {
  @Input() expense!: Expense;
  @Output() onDeleteExpense: EventEmitter<Expense> = new EventEmitter();

  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(expense: Expense){
    this.onDeleteExpense.emit(expense);
  }

}
