import React, { PureComponent } from 'react';

import FormComponent from 'components/FormComponent';
import { Toggle, Navigation } from 'components/Common';

export default class SearchForm extends PureComponent {
  state = {
    toggled_filterValue: 'rating',
    toggled_searchValue: 'title',
  };

  handleInput = e => {
    this.setState({
      [`${e.target.name}Value`]: e.target.value,
    });
  };

  render() {
    return (
      <>
        <FormComponent
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <input type="text" name="search" placeholder="Search..." onChange={this.handleInput} />
          <input type="submit" value="Search" />
          <Toggle
            labels={['Genre', 'Title']}
            type="search"
            text="Search by:"
            onChange={this.handleInput}
          />
        </FormComponent>
        <Navigation>
          <span>10 films are found</span>
          <Toggle
            labels={['Date', 'Rating']}
            type="filter"
            text="Filter by:"
            onChange={this.handleInput}
          />
        </Navigation>
      </>
    );
  }
}
