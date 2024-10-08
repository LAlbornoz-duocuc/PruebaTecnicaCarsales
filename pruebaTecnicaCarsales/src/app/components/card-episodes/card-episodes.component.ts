import { Component, Input } from '@angular/core';
import { Episodes } from '../../models/episodes.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-episodes',
  standalone: true,
  imports: [],
  templateUrl: './card-episodes.component.html',
  styleUrl: './card-episodes.component.scss'
})
export class CardEpisodesComponent {
  @Input() episodes!: Episodes;

  constructor(private router:Router){}

  DetailEpisode() {
    let episode = this.episodes;

    /*buscar los characters*/


    let data = {
      episode: episode,
    }
    this.router.navigate(['characters'], { state: {data} });
  }
}
