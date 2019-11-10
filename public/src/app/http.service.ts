import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Poke } from './classes/class_Pokemon';


@Injectable({
  providedIn: 'root'
})
export class HttpService {



  constructor(private _http: HttpClient) {

    this.getPokemon();

  }
  getPokemon() {
    let str: string;
    let pokeme = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    pokeme.subscribe(data => {
      var poke: any = data;
      var ab: string[] = [];
      console.log('---------------------Abilities:');
      poke.abilities.forEach(element => {
        //console.log(element.ability.url);
        ab.push(element.ability.name)
      
        let related = this._http.get(element.ability.url);
        related.subscribe(data => {
          var tot: any = data;
          console.log(`Total pokemons sharing ${element.ability.name} ability: ${tot.pokemon.length}`);
        })
      })
      str = ab.join(", and ");
      console.log("this pokemon abilities are: " + str);


    })
    
  }
}
