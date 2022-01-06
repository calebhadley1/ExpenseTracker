import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/Expense';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  expenses: Expense[] = [];

  constructor(private expenseService: ExpenseService) { }

  ngOnInit(): void {
    this.expenseService.getExpenses().subscribe((expenses) => this.expenses=expenses)
  }

  deleteExpense(expense: Expense){
    this.expenseService.deleteExpense(expense).subscribe(() => (this.expenses = this.expenses.filter(e => e.id !== expense.id)));
  }

  addExpense(expense: Expense){
    this.expenseService.addExpense(expense).subscribe((expense) => (this.expenses.push(expense)));
  }

}
