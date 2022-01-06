import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Expense } from 'src/app/Expense';
import { ExpenseService } from 'src/app/services/expense.service';


@Component({
  selector: 'app-add-expense-form',
  templateUrl: './add-expense-form.component.html',
  styleUrls: ['./add-expense-form.component.css']
})
export class AddExpenseFormComponent implements OnInit {
  addExpenseForm!: FormGroup;
  @Output() onAddExpense: EventEmitter<Expense> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addExpenseForm = this.formBuilder.group({
      expense: [null, Validators.required],
      category: [null, Validators.required],
      price: [null, Validators.required]   
    });
  }

  onSubmit() {
    if (this.addExpenseForm.valid) {
      const newExpense: Expense = {
        expense: this.addExpenseForm.value.expense,
        category: this.addExpenseForm.value.category,
        price: this.addExpenseForm.value.price
      };
      this.onAddExpense.emit(newExpense);
      this.addExpenseForm.reset()
      return;
    }
  }
}
