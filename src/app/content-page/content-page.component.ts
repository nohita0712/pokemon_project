import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { PokemonServiceService } from '../service/pokemon-service.service';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.scss']
})
export class ContentPageComponent {
  pokemonList: any[] = [];
  pokemonName: any;
  searchText:any;
  searchAbility: any;
  cardsPerPage: number | undefined;
  totalLimit: any;
  page: number = 1;
  count: number = 0;
  cardSize: number = 5;
  sortByCategory:any;
  name:any;
  height:any;
  weight:any;
  sortingItem:any;
  constructor(private http: HttpClient,
    @Inject(DOCUMENT) private _document: Document) {

  }

  ngOnInit() {
    this.totalLimit=  sessionStorage.getItem('limit');
    if(this.totalLimit){
      this.getPokemon(this.totalLimit);
    }
    this.sortingItem = sessionStorage.getItem('sorting');
    if(this.sortingItem){
      this.sortCategory(this.sortingItem);
    }


  }

  getPokemon(limit:any) {

    this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`).subscribe(
      (res: any) => {
        console.log(res.results);

        for (let i in res.results) {

          this.http.get(`https://pokeapi.co/api/v2/pokemon/${res.results[i].name}`).subscribe(
            (res: any) => {

              this.pokemonName = res;
              this.getpokemonNameArr(res)

            }
          )
        }

      }
    )

  }

  getpokemonNameArr(res: any) {
    this.pokemonList = [...this.pokemonList, res];

  }
  returnZero() {
    return 0
  }

  changeList(event:any){
    sessionStorage.setItem('limit',event);
   if(event == undefined || event == null){
    this.getPokemon(20);
   }else{
    this.getPokemon(event);
    this._document.location.reload();
    this.cardsPerPage = event;
   }
  
  }

  searchTextList(event:any){
  this.searchText=  event.toLocaleLowerCase;
  sessionStorage.setItem('searchText',this.searchText);
  }
  searchAbilityList(event:any){
    this.searchAbility = event.toLocaleLowerCase;
    sessionStorage.setItem('searchAbility',this.searchAbility);
  }
  onTableDataChange(event:any){
    this.page = event;
  
  }

  sortCategory(event:any){
    sessionStorage.setItem('sorting',event);
    if(event=='Name'){
    this.pokemonList.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0)
    } else if(event == 'Height'){
      this.pokemonList.sort((a, b) => a.height < b.height ? -1 : a.height > b.height ? 1 : 0)
    } else{
      this.pokemonList.sort((a, b) => a.weight < b.weight ? -1 : a.weight > b.weight ? 1 : 0)
    }
   
  }
}
