import { HttpClient } from '@angular/common/http';
import { effect, inject, Injectable, signal } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { CharacterModel } from '../interfaces/character.interface';
import { fromSignal } from '../utils/from-signal';

@Injectable()
export class DimensionC137Signal {
    private readonly endpoint = 'https://rickandmortyapi.com/api/character';
    http = inject(HttpClient);
    searchTerm = signal<string>('');
    loggerSearchTerm = effect(() => console.log('typing:', this.searchTerm()));
    characters$: Observable<CharacterModel[]> = fromSignal(this.searchTerm).pipe(
        switchMap((term) =>
            this.http.get(`${this.endpoint}?name=${term}`).pipe(map((response: any) => response.results))
        )
    );
    hundredCharacters$: Observable<CharacterModel[]> = this.http
        .get(`${this.endpoint}/${[...Array(100).keys()].toString()}`)
        .pipe(map((response: any) => response));
}
