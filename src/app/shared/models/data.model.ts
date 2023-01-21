export class DataModel {
  constructor(
    public budgetId: string,
    public ssuId: string,
    public sapCode: number,
    public productName: string,
    public productionUnit: string,
    public packageSize: string,
    public category: string,
    public SUB: string,
    public fieldColleagueId: string,
    public fieldColleagueName: string,
    public quantity: number,
    public depotId: string,
    public depotName: string,
    public month: string,
    public year: number
  ) {}
}
