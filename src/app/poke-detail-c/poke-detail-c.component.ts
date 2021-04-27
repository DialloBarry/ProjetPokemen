import { PokeDetail } from './../pokemon';
import { Component, Input, OnInit } from '@angular/core';
import { PokeShareInfoService } from '../poke-share-info.service';

@Component({
  selector: 'app-poke-detail-c',
  templateUrl: './poke-detail-c.component.html',
  styleUrls: ['./poke-detail-c.component.css'],
  providers: []

})
export class PokeDetailCComponent implements OnInit {
@Input('detail')
detail:PokeDetail|null=null
  constructor(private pokeShareInfoService: PokeShareInfoService) {
  }

  ngOnInit(): void {
    this.pokeShareInfoService.getvalue;
  }

}
