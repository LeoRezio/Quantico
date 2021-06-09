import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  cards = [
    {
      img: './assets/images/img-card-1.jpeg',
      date: 'maio 18',
      type: 'podcast',
      title:
        'Nubank deve mirar IPO e expansão internacional com Buffett como parceiro',
    },
    {
      img: './assets/images/img-card-2.jpeg',
      date: 'maio 22',
      type: 'artigo',
      title: 'Nubank de cara nova: conheça as mudanças na nossa marca',
    },
    {
      img: './assets/images/img-card-3.png',
      date: 'maio 29',
      type: 'vídeo',
      title: 'Nunbak faz brincandeira com vídeo de presente de aniversário',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
