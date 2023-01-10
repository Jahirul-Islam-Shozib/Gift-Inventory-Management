import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ShippingInformation } from 'src/app/shared/shippingInformation.model';

@Component({
  selector: 'app-ssu-chalan-creation',
  templateUrl: './ssu-chalan-creation.component.html',
  styleUrls: ['./ssu-chalan-creation.component.scss'],
})
export class SsuChalanCreationComponent implements OnInit {
  shippingInfo: ShippingInformation[] = [];
  shippingInformationForm!: FormGroup;
  cols!: any[];
  loginUserData: any;
  constructor(public config: DynamicDialogConfig) {}

  ngOnInit() {
    this.loginUserData = this.config.data;

    this.initForm();
    this.cols = [
      { field: 'date', header: 'Shipping Date' },
      { field: 'vehicleNumber', header: 'Vehicle Number' },
      { field: 'driverName', header: 'Driver Name' },
      { field: 'driverMobile', header: 'Driver Mobile' },
    ];
  }

  initForm() {
    this.shippingInformationForm = new FormGroup({
      date: new FormControl(null, Validators.required),
      vehicleNumber: new FormControl(null, Validators.required),
      driverName: new FormControl(null, Validators.required),
      driverMobile: new FormControl(null, Validators.required),
    });
  }

  onAddShippingInformation() {
    this.shippingInfo.push(this.shippingInformationForm.value);
    this.shippingInformationForm.reset();
    console.log(this.shippingInfo);
  }
  onPrintPage() {
    window.print();
  }
}
