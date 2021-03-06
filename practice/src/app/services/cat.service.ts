import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

export interface Cat {
  name: string
}

const baseUrl = 'http://localhost:8000/';


@Injectable({
  providedIn: 'root'
})

export class CatService {

  constructor(private http: HttpClient) { }


getAllCats(): Observable<Cat[]> {
  return this.http.get<Cat[]>(baseUrl + 'api/cats')
}

getCat(name: string): Observable<Cat> {
  return this.http.get<Cat>(`http://localhost:8000/api/cats`)
}

insertCat(cat: Cat): Observable<Cat> {
  return this.http.post<Cat>('http://localhost:8000/api/cats/', cat)
}

updateCat(cat: Cat): Observable<void> {
  return this.http.put<void>(
    'http://localhost:8000/api/cats/' + cat.name,
    cat
  )
}

deleteCat(name: string) {
  return this.http.delete('http://localhost:8000/api/cats/' + name)
}


}
