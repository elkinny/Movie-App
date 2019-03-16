import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

const e = React.createElement;

// components creation using functional components
const MovieTitle = props => e('h2', { className: 'list-item__title' }, props.title);

const MoviePic = props =>
  e('img', {
    className: 'list-item__img',
    src: props.picLink,
    height: '400',
  });

const MovieDescription = props =>
  e('p', { className: 'list-item__description' }, props.description);

const MovieLink = props =>
  e(
    'a',
    {
      className: 'list-item__link',
      href: props.link,
      target: '_blank',
    },
    'Watch trailer',
  );

// component creation using React.Component
class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, description, link, picLink } = this.props;
    return e(
      'div',
      { className: 'list-item' },
      MovieTitle({ title }),
      MoviePic({ picLink }),
      MovieDescription({ description }),
      MovieLink({ link }),
    );
  }
}

// component creation using React.PureComponent
class List extends React.PureComponent {
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
    return movies.map(movie => e(ListItem, movie));
  }

  render() {
    return e('div', { className: 'list' }, ...this.createList());
  }
}

// component creation using createElement
const AppTitle = e('h1', { className: 'app__title' }, 'Movie App');

// component creation using React.Component
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return e('div', { className: 'app' }, AppTitle, e(List));
  }
}

ReactDOM.render(e(App), document.getElementById('root'));
