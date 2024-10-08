import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { EpisodeService } from './services/episodes/episode.service';
import { GlobalService } from './services/global/global.service';
import { CharacterService } from './services/characters/character.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[
    EpisodeService,
    GlobalService,
    CharacterService
  ]
})
export class AppComponent {
  title = 'pruebaTecnicaCarsales';
}
