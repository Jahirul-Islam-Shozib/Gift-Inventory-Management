import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  api_key: any;
  value: number = 0;
  uploadFileUrl = 'http://localhost:8080/budget/addBudgetFromExcel';
  excelData: any;
  uploadedFiles: any;
  fileUploaded: boolean = false;
  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}
  ngOnInit() {
    this.api_key = window.localStorage.getItem('token');

    //console.log(this.api_key);
  }

  selectFile(event: any) {
    this.uploadedFiles = event.target.files[0];

    console.log(this.uploadedFiles);
  }

  uploadFile() {
    this.fileUploaded = true;
    let formData = new FormData();
    formData.append('file', this.uploadedFiles);

    this.http
      .post(this.uploadFileUrl, formData, {
        headers: new HttpHeaders({
          Authorization: `Bearer+${this.api_key}`,
        }),
      })
      .subscribe(
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
      this.progressBar();
    } else {
      this.showError();
    }
  }

  // showSuccess() {
  //   this.messageService.add({
  //     severity: 'success',
  //     summary: 'Success',
  //     detail: 'File Uploaded Successfully!',
  //   });
  // }
  showError() {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'No File Has Been Uploaded!',
    });
  }

  progressBar() {
    let interval = setInterval(() => {
      this.value = this.value + Math.floor(Math.random() * 10) + 1;
      if (this.value >= 100) {
        this.value = 300;
        this.messageService.add({
          severity: 'info',
          summary: 'Success',
          detail: 'File has been Uploaded successfully!',
        });
        clearInterval(interval);
      }
    }, 100);
  }
}
