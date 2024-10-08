import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { NgFor, NgClass } from '@angular/common';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { EpisodeService } from '../../../services/episodes/episode.service';
import { Episodes } from '../../../models/episodes.models';
import { CardEpisodesComponent } from '../../../components/card-episodes/card-episodes.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, CardEpisodesComponent, NgFor, NgClass, InfiniteScrollDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  page: number = 1;
  episodes: Episodes[] = [];
  constructor(private episodeService: EpisodeService) {

  }

  async ngOnInit() {



    (await this.episodeService.Episodes(this.page)).subscribe({
      next: resp => {
        console.log("resp", resp);
        debugger
        // this.imgUrl = resp.imageBaseUrl;

        this.episodes = resp.results;
      }
    });
  }


  async onScroll() {
    this.page = this.page + 1;
    (await this.episodeService.Episodes(this.page)).subscribe({
      next: resp => {
        console.log("resp", resp);
        debugger

        resp.results.forEach((e: Episodes) => {
          this.episodes.push(e);
        });

      }
    });
  }
}
