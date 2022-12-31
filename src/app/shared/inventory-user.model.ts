export class InventoryUserModel {
  constructor(
    public userId: number,
    public firstName: string,
    public lastName: string,
    public email: string,
    public password: string,
    public role: string,
    public status: string,
    public workPlace: string
  ) {}
}
