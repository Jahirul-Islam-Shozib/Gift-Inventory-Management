export class InventoryUserModel {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public email: string,
    public password: string,
    public contactNumber: string,
    public role: string,
    public status: string
  ) {}
}
