import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { PokeDetail, PokemonServiceRest } from './pokemon';

const url = 'https://pokeapi.co/api/v2/pokemon/';
@Injectable({
  providedIn: 'root'

})

export class ServicePokeAPIService {

  constructor(private http: HttpClient) { }
  getPokemons():Observable<PokemonServiceRest>{
    return this.http.get<PokemonServiceRest>(url);
  }
  getPokemonInfo(id: string):Observable<PokeDetail>{
    return this.http.get<PokeDetail>(url+id+'/');
  }
}
