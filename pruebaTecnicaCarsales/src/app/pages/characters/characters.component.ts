import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { CardCharactersComponent } from '../../components/card-characters/card-characters.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Episodes } from '../../models/episodes.models';
import { CharacterService } from '../../services/characters/character.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [NavbarComponent, CardCharactersComponent, InfiniteScrollDirective],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss'
})
export class CharactersComponent {

  data!: {
    episode: Episodes
  };
  episode: Episodes;

  constructor(private router: Router, private characterService: CharacterService) 
  {
    const navigation = this.router.getCurrentNavigation();

    this.data = navigation?.extras.state?.['data'];
    this.episode = this.data.episode;

  }


  async ngOnInit() {

    
  }

}
