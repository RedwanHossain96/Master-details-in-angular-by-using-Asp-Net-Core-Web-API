import { Country } from "./country.model";

export class City {
  constructor(
    public id: number,
    public name: string,
    public lat: number,
    public lon: number,
    public countryId: number,
    public country: Country
  ) { }
}
