import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SongComponent } from './song/song.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlaylistDetailsComponent } from './playlist/playlist-details/playlist-details.component';
import { SongDetailsComponent } from './song/song-details/song-details.component';
import { EditPlaylistComponent } from './playlist/edit-playlist/edit-playlist.component';
import { RegisterComponent } from './home/register/register.component';
import { LoginComponent } from './home/login/login.component';
import { CreatePlaylistComponent } from './playlist/create-playlist/create-playlist.component';
import { CreateSongComponent } from './song/create-song/create-song.component';


const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  }, {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'song',
    component: SongComponent,
  },
  {
    path: 'create-song',
    component: CreateSongComponent
  },
  {
    path: 'song-details',
    component: SongDetailsComponent
  },
  
  {
    path: 'song-details/:songId',
    component: SongDetailsComponent
  },
  {
    path: 'playlist',
    component: PlaylistComponent
  },
  {
    path: 'playlist-details/:playlistId',
    component: PlaylistDetailsComponent
  },
  {
    path: 'edit-playlist/:playlistId',
    component: EditPlaylistComponent,
  },
  
  {
    path: 'create-playlist',
    component: CreatePlaylistComponent,
  },
  {
    path: 'not-found', component: PageNotFoundComponent
  },
  {
    path: '**', redirectTo: '/not-found', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
