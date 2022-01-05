import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Expense } from 'src/app/Expense';
import { ExpenseService } from 'src/app/services/expense.service';
import { ExpenseTableComponent } from 'src/app/components/expense-table/expense-table.component';


@Component({
  selector: 'app-add-expense-form',
  templateUrl: './add-expense-form.component.html',
  styleUrls: ['./add-expense-form.component.css']
})
export class AddExpenseFormComponent implements OnInit {
  addExpenseForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private expenseTable: ExpenseTableComponent) { }

  ngOnInit(): void {
    this.addExpenseForm = this.formBuilder.group({
      expense: [null, Validators.required],
      category: [null, Validators.required],
      price: [null, Validators.required]   
    });
  }

  addExpense() {
    if (this.addExpenseForm.valid) {
      const newExpense: Expense = {
        id: 999,
        expense: this.addExpenseForm.value.expense,
        category: this.addExpenseForm.value.category,
        price: this.addExpenseForm.value.price
      };

      this.expenseTable.onAddExpense(newExpense);
      console.log("sucess")
      return;
    }
  }
}
