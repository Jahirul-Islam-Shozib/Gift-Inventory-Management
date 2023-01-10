export class DepotInfoModel {
  // id!: string;
  // depotName!: string;
  // depotCode!: string;
  // depotAddress!: String;
  // adminName!: string;
  // adminEmail!: string;
  // adminMobile!: String;
  // constructor(
  //   id = '',
  //   depotName = '',
  //   depotCode = '',
  //   depotAddress = '',
  //   adminName = '',
  //   adminEmail = '',
  //   adminMobile = ''
  // ) {
  //   this.id = id;
  //   this.depotName = depotName;
  //   this.depotCode = depotCode;
  //   this.depotAddress = depotAddress;
  //   this.adminName = adminName;
  //   this.adminEmail = adminEmail;
  //   this.adminMobile = adminMobile;
  // }

  constructor(
    public id: string,
    public depotName: string,
    // public depotCode: string,
    public location: string,
    public user_id: number //public adminMobile: string // public adminName: string, // public adminEmail: string,
  ) {}
}
