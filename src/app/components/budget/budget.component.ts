import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],
  providers: [MessageService],
})
export class BudgetComponent implements OnInit {
  value: number = 0;
  uploadFileUrl = 'http://localhost:8080/inventory/budget/upload';
  excelData: any;
  uploadedFiles: any;
  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}
  ngOnInit() {
    let interval = setInterval(() => {
      this.value = this.value + Math.floor(Math.random() * 10) + 1;
      if (this.value >= 100) {
        this.value = 100;
        this.messageService.add({
          severity: 'info',
          summary: 'Success',
          detail: 'Process Completed',
        });
        clearInterval(interval);
      }
    }, 1000);
  }

  selectFile(event: any) {
    this.uploadedFiles = event.target.files[0];

    console.log(this.uploadedFiles);
  }

  uploadFile() {
    let formData = new FormData();
    formData.append('file', this.uploadedFiles);

    this.http.post(this.uploadFileUrl, formData).subscribe(
      (data) => {
        //success
        console.log(data);
      },
      (error) => {
        //error
        console.log(error);
      }
    );

    if (this.uploadedFiles != null) {
      this.showSuccess();
    } else {
      this.showError();
    }
  }

  showSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'File Uploaded Successfully!',
    });
  }
  showError() {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'No File Has Been Uploaded!',
    });
  }
}
