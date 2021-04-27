import { PokeShareInfoService } from './../poke-share-info.service';
import { ServicePokeAPIService } from './../service-poke-api.service';
import { PokeDetail, Pokemon } from './../pokemon';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl:'./my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [ServicePokeAPIService]


})
export class MyComponentComponent implements OnInit {
  pokeDetail: PokeDetail|null=null;

  id: string = '';
  pokeId: string = '';
  pokeSearch: string = '';
  pokes:Pokemon[]=[];
  constructor(private pokeAPI: ServicePokeAPIService,private pokeShareInfoService : PokeShareInfoService) {

}
functionGo(){

this.pokeShareInfoService.setvalue(this.pokeId);
  if(this.pokeId!=''){
    //console.log('this.pokeId : ' + this.pokeId);
    this.pokeAPI.getPokemonInfo(this.pokeId).subscribe(data => {
      this.pokeDetail= data;

    })

  }
  console.log(this.pokeSearch, this.pokeId)
}
  ngOnInit(): void {
    this.pokeAPI.getPokemons().subscribe((data) => {
      data.results.forEach((e :any, index: any)=>{
        this.pokes.push(new Pokemon(index,e.name));
      });
    }

  );
  }

}
