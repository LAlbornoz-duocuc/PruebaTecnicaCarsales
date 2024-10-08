import { Component, Input } from '@angular/core';
import { Characters } from '../../models/characters.models';
import { CharacterService } from '../../services/characters/character.service';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-card-characters',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './card-characters.component.html',
  styleUrl: './card-characters.component.scss'
})
export class CardCharactersComponent {
  @Input() characters!: [];
  charactersList: Characters[] = [];
  constructor(private characterService: CharacterService){

  }


async ngOnInit() {

  this.characters.forEach(async element => {
      (await this.characterService.CharactersURL(element)).subscribe({
        next: resp => {
          console.log("resp",resp);
          this.charactersList.push(resp);
        }
      })
    });
    
  }

}
