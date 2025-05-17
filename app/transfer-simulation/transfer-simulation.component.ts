import { Component } from '@angular/core';

@Component({
  selector: 'app-transfer-simulation',
  templateUrl: './transfer-simulation.component.html',
  styleUrls: ['./transfer-simulation.component.css']
})
export class TransferSimulationComponent {
  isFormOpen = true;

  formData = {
    beneficiaries: '',
    account: '',
    amount: null,
    details: ''
  };

  formCompletion = {
    beneficiaries: false,
    account: false,
    amount: false
  };

  openForm() {
    this.isFormOpen = true;
  }

  closeForm() {
    this.isFormOpen = false;
    this.resetForm();
  }

  resetForm() {
    this.formData = {
      beneficiaries: '',
      account: '',
      amount: null,
      details: ''
    };
    this.formCompletion = {
      beneficiaries: false,
      account: false,
      amount: false
    };
  }

  checkFieldCompletion(field: string) {
    if (field === 'beneficiaries' && this.formData.beneficiaries.trim()) {
      this.formCompletion.beneficiaries = true;
    } else if (field === 'account' && /^RO\d{2}[A-Z]{4}[0-9A-Z]{16}$/.test(this.formData.account)) {
      this.formCompletion.account = true;
    } else { // @ts-ignore
      if (field === 'amount' && this.formData.amount > 0) {
            this.formCompletion.amount = true;
          }
    }
  }

  submitTransfer(formValue: any) {
    console.log('Transfer Submitted:', formValue);
    this.closeForm();
  }
}
