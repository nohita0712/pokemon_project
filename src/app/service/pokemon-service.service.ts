import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {
pokemonName :any;
  constructor( private http: HttpClient) { }

  getPokemonList(limit: any): Observable<any>{
    this.http.get(`https://pokeapi.co/api/v2/pokemon`).subscribe(
     ( res:any)=>{
      console.log(res.results);
     
      for( let i in res.results){
       console.log(res.results[i]);
       this.http.get(`https://pokeapi.co/api/v2/pokemon/${res.results[i].name}`).subscribe(
        (res:any)=>{
          console.log(res);
          this.pokemonName = res;
         
        }
       )
      }
      }
    )
    return this.pokemonName;
  }

}
