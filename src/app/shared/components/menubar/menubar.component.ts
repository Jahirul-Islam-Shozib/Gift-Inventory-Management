import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { DepotInformationDialogComponent } from 'src/app/Feature/depots/components/depot-information-dialog/depot-information-dialog.component';
import { UserInformationDialogComponent } from 'src/app/Feature/user/components/user-information-dialog/user-information-dialog.component';
import { DataStorageService } from 'src/app/shared/services/Data Fetch & Store/data-storage.service';

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
        routerLink: ['/inventory-dashboard/dashboard-view'],
      },
      {
        label: 'All Inventories',
        icon: 'pi pi-fw pi-microsoft',
        routerLink: ['/inventory/ssu'],
      },
      {
        label: 'Depots Inventory',
        icon: 'pi pi-fw pi-slack',
        routerLink: ['/inventory-depots'],
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
            //routerLinkActiveOptions: { exact: true },
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
        routerLink: ['/inventory-budget'],

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
        routerLink: ['/inventory-user'],
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
    this.dialogService.open(DepotInformationDialogComponent, {
      header: 'Depot Information',
      width: '50%',
      height: '45%',
    });
  }
  showInventoryUserDialog() {
    this.dialogService.open(UserInformationDialogComponent, {
      header: 'Inventory User Information',
      width: '50%',
      height: '6S5%',
    });
  }
}
