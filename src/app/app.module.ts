
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatButtonModule,
} from '@angular/material';

import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongComponent } from './song/song.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { HomeComponent } from './home/home.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './home/register/register.component';
import { LoginComponent } from './home/login/login.component';
import { SongDetailsComponent } from './song/song-details/song-details.component';
import { ServiceUrl } from './service.url';
import { PlaylistDetailsComponent } from './playlist/playlist-details/playlist-details.component';
import { EditPlaylistComponent } from './playlist/edit-playlist/edit-playlist.component';
import { CreatePlaylistComponent } from './playlist/create-playlist/create-playlist.component';
import { CreateSongComponent } from './song/create-song/create-song.component';



@NgModule({
  declarations: [
    AppComponent,
    SongComponent,
    PlaylistComponent,
    HomeComponent,
    PageNotFoundComponent,
    RegisterComponent,
    LoginComponent,
    SongDetailsComponent,
    PlaylistDetailsComponent,
    EditPlaylistComponent,
    CreatePlaylistComponent,
    CreateSongComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule, FlexLayoutModule,

    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [ServiceUrl],
  bootstrap: [AppComponent]
})
export class AppModule { }
