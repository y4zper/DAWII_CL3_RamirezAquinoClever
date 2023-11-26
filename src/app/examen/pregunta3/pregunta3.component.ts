import { Component , OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-pregunta3',
  templateUrl: './pregunta3.component.html',
  styleUrls: ['./pregunta3.component.css']
})

export class Pregunta3Component implements OnInit {

  episodios: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://rickandmortyapi.com/api/episode')
      .subscribe((data: any) => {
        this.episodios = data.results.filter((episodio: any) => episodio.id % 2 !== 0);
      });
  
}
}