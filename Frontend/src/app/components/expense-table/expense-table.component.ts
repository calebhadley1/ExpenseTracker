import { Component, Input, OnInit } from '@angular/core';
import { ExpenseService } from 'src/app/services/expense.service';
import {Expense} from '../../Expense';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-expense-table',
  templateUrl: './expense-table.component.html',
  styleUrls: ['./expense-table.component.css']
})
export class ExpenseTableComponent implements OnInit {
  dataSource: Expense[] = [];
  columnsToDisplay = ['expense', 'category', 'price', 'delete'];
  faTimes = faTimes;

  constructor(private expenseService: ExpenseService) { }

  ngOnInit(): void {
    this.expenseService.getExpenses().subscribe((expenses) => this.dataSource=expenses)
  }

  onDeleteExpense(expense: Expense){
    this.expenseService.deleteExpense(expense).subscribe(() => (this.dataSource = this.dataSource.filter(e => e.id !== expense.id)));
  }

  onAddExpense(expense: Expense){
    this.expenseService.addExpense(expense).subscribe((expense) => (this.dataSource.push));
  }
}
