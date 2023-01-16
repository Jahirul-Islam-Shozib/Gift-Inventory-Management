import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { DepotInfoModalComponent } from 'src/app/all-modal/depot-info-modal/depot-info-modal.component';
import { InventoryUserModalComponent } from 'src/app/all-modal/inventory-user-modal/inventory-user-modal.component';
import { DataStorageService } from 'src/app/Service/Data Fetch & Store/data-storage.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss'],
  providers: [DialogService],
})
export class MenubarComponent implements OnInit {
  items: MenuItem[] = [];
  displayDepot: boolean = false;
  constructor(
    public dialogService: DialogService,
    public dataStorageService: DataStorageService
  ) {}
  ngOnInit() {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-home',
        // routerLink: ['/home'],
        routerLink: ['/inventory-dashboard/dashboard-view'],
      },
      {
        label: 'All Inventories',
        icon: 'pi pi-fw pi-microsoft',
        // routerLink: ['/inventories'],
        routerLink: ['/inventory/ssu'],
      },
      {
        label: 'Depots Inventory',
        icon: 'pi pi-fw pi-slack',
        // routerLink: ['/depot-list'],

        items: [
          {
            label: 'All Depots Information',
            icon: 'pi pi-fw pi-file-excel',
            routerLink: ['/inventory-depots/depot-info'],
          },
          {
            label: 'Depots Wise Budget',
            icon: 'pi pi-fw pi-file-excel',
            routerLink: ['/inventory-depots/depot-wise-budget'],
          },
          {
            label: 'Add New Depo',
            icon: 'pi pi-fw pi-plus',
            command: () => this.showDepotInfoDialog(),
          },
        ],
      },
      {
        label: 'Budget',
        icon: 'pi pi-fw pi-file',

        items: [
          {
            label: 'Upload Budget',
            icon: 'pi pi-fw pi-external-link',
            routerLink: ['/inventory-budget/upload-budget'],
          },
          {
            label: 'Show Budget',
            icon: 'pi pi-fw pi-file-excel',
            routerLink: ['/inventory-budget/show-full-budget'],
          },
          {
            separator: true,
          },
          {
            label: 'Clear Budget',
            icon: 'pi pi-fw pi-trash',
          },
        ],
      },

      {
        label: 'Users',
        icon: 'pi pi-fw pi-user',

        items: [
          {
            label: 'Create New User',
            icon: 'pi pi-fw pi-user-plus',
            command: () => this.showInventoryUserDialog(),
          },
          {
            label: 'All User',
            icon: 'pi pi-fw pi-users',
            routerLink: ['/inventory-user/user-info'],
          },
        ],
      },
    ];
  }

  showDepotInfoDialog() {
    this.displayDepot = true;
    this.dialogService.open(DepotInfoModalComponent, {
      header: 'Depot Information',
      width: '50%',
      height: '45%',
    });
  }
  showInventoryUserDialog() {
    this.dialogService.open(InventoryUserModalComponent, {
      header: 'Inventory User Information',
      width: '50%',
      height: '6S5%',
    });
  }
}
