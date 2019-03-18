import React, { PureComponent } from 'react';

import MovieItem from './MovieItem/MovieItem';

import './movies-list.scss';

export default class MoviesList extends PureComponent {
  constructor() {
    super();

    this.state = {
      movies: [
        {
          title: 'Captain Marvel',
          description:
            'Carol Danvers becomes one of the universe`s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.',
          link: 'https://www.youtube.com/watch?v=0LHxvxdRnYc',
          picLink:
            'https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
        },
        {
          title: 'Dark Phoenix',
          description:
            'Jean Grey begins to develop incredible powers that corrupt and turn her into a Dark Phoenix. Now the X-Men will have to decide if the life of a team member is worth more than all the people living in the world.',
          link: 'https://www.youtube.com/watch?v=1-q8C_c-nlM',
          picLink:
            'https://m.media-amazon.com/images/M/MV5BMjAwNDgxNTI0M15BMl5BanBnXkFtZTgwNTY4MDI1NzM@._V1_SY1000_CR0,0,631,1000_AL_.jpg',
        },
        {
          title: 'Hellboy',
          description:
            'Based on the graphic novels by Mike Mignola, Hellboy, caught between the worlds of the supernatural and human, battles an ancient sorceress bent on revenge.',
          link: 'https://www.youtube.com/watch?v=dt5g5_1cKVk',
          picLink:
            'https://m.media-amazon.com/images/M/MV5BYTMyYjg0MTItYTcyZS00MmRiLWIxNWQtYTRiZjRkYWMxZGNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SY1000_CR0,0,657,1000_AL_.jpg',
        },
        {
          title: 'The Lion King',
          description: 'CGI re-imagining of the 1994 Disney classic.',
          link: 'https://www.youtube.com/watch?v=4CbLXeGSDxg',
          picLink:
            'https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
        },
        {
          title: 'Alita: Battle Angel',
          description:
            'A deactivated female cyborg is revived, but cannot remember anything of her past life and goes on a quest to find out who she is.',
          link: 'https://www.youtube.com/watch?v=U3D2vmWD88w',
          picLink:
            'https://m.media-amazon.com/images/M/MV5BNzVhMjcxYjYtOTVhOS00MzQ1LWFiNTAtZmY2ZmJjNjIxMjllXkEyXkFqcGdeQXVyNTc5OTMwOTQ@._V1_.jpg',
        },
        {
          title: 'Pokémon Detective',
          description:
            'In a world where people collect Pokémon to do battle, a boy comes across an intelligent talking Pikachu who seeks to be a detective.',
          link: 'https://www.youtube.com/watch?v=1roy4o4tqQM',
          picLink:
            'https://m.media-amazon.com/images/M/MV5BNDU4Mzc3NzE5NV5BMl5BanBnXkFtZTgwMzE1NzI1NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
        },
        {
          title: 'Aquaman',
          description:
            'Arthur Curry, the human-born heir to the underwater kingdom of Atlantis, goes on a quest to prevent a war between the worlds of ocean and land.',
          link: 'https://www.youtube.com/watch?v=WDkg3h8PCVU',
          picLink:
            'https://m.media-amazon.com/images/M/MV5BOTk5ODg0OTU5M15BMl5BanBnXkFtZTgwMDQ3MDY3NjM@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
        },
        {
          title: 'Avengers: Infinity War',
          description:
            'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.',
          link: 'https://www.youtube.com/watch?v=6ZfuNTqbHE8',
          picLink:
            'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
        },
        {
          title: 'Robin Hood',
          description:
            'A war-hardened Crusader and his Moorish commander mount an audacious revolt against the corrupt English crown.',
          link: 'https://www.youtube.com/watch?v=zwPn9ZnbCo0',
          picLink:
            'https://m.media-amazon.com/images/M/MV5BOGQzZDM0NGUtZGE1NS00ZjQwLTk0N2EtMWI0NTgxYTkwYWQ4XkEyXkFqcGdeQXVyNDMzMzI5MjM@._V1_SY1000_CR0,0,648,1000_AL_.jpg',
        },
        {
          title: 'Mortal Engines',
          description:
            'In a post-apocalyptic world where cities ride on wheels and consume each other to survive, two people meet in London and try to stop a conspiracy.',
          link: 'https://www.youtube.com/watch?v=IRsFc2gguEg',
          picLink:
            'https://m.media-amazon.com/images/M/MV5BNzY1MDA2OTQ0N15BMl5BanBnXkFtZTgwMTkzNjU2NTM@._V1_SY1000_CR0,0,631,1000_AL_.jpg',
        },
      ],
    };
  }

  createList() {
    const { movies } = this.state;
    return movies.map((movie, i) => <MovieItem {...movie} key={`${movie.title}_${i}`} />);
  }

  render() {
    return <div className="movie-list">{this.createList()}</div>;
  }
}
