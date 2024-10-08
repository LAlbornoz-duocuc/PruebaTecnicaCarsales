import { Routes } from '@angular/router';
import { HomeComponent } from './pages/episodes/home/home.component';
import { CardCharactersComponent } from './components/card-characters/card-characters.component';
import { CharactersComponent } from './pages/characters/characters.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'characters', component: CharactersComponent }
  ];
