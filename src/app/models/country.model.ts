import { City } from "./city.model";

export class Country {
  constructor(
    public id: number,
    public name: string,
    public iso2: string,
    public iso3: string,
    public totCities: number,
    cities?: City[]
  ) { }
}
