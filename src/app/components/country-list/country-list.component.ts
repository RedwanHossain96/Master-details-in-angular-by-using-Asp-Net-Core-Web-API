import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../models/country.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  countries: Country[] = [];
  newCountry: Country = new Country(0, '', '', '', 0);
  editingCountry: Country | null = null;


  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.loadCountries();
  }

  loadCountries() {
    this.countryService.getCountries().subscribe({
      next: response => {
        console.log(response);
        this.countries = response.data; 
      },
      error: error => {
        console.error('Error loading countries:', error);
      }
    });
  }


  loadCountryById(id: any) {
    this.countryService.getCountry(id).subscribe({
      next: response => {
        console.log('Country by ID:', response);
      },
      error: error => {
        console.error('Error loading country by ID:', error);
      }
    });
  }

  deleteCountry(id: any) {
    this.countryService.deleteCountry(id).subscribe({
      next: response => {
        console.log('Country deleted:', response);
        this.loadCountries();
      },
      error: error => {
        console.error('Error deleting country:', error);
      }
    });
  }

  createCountry() {
    this.countryService.postCountry(this.newCountry).subscribe({
      next: response => {
        console.log('Country created:', response);
        this.newCountry = new Country(0, '', '', '', 0); 
        this.loadCountries();
      },
      error: error => {
        console.error('Error creating country:', error);
      }
    });
  }

  editCountry(country: Country) {
    this.editingCountry = { ...country }; 
  }

  cancelEdit() {
    this.editingCountry = null;
  }

  saveEdit() {
    if (this.editingCountry) {
      this.countryService
        .putCountry(this.editingCountry.id, this.editingCountry)
        .subscribe({
          next: response => {
            console.log('Country updated:', response);
            this.loadCountries();
            this.editingCountry = null;
          },
          error: error => {
            console.error('Error updating country:', error);
          }
        });
    }
  }
}
