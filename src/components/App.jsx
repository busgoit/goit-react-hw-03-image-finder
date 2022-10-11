import React, { Component } from 'react';
import Searchbar from './Searchbar';
import Oval from './Loader';
import ImageGallery from './ImageGallery';
import Button from './Button';
// import Modal from './Modal';

export class App extends Component {
  state = {
    searchValue: '',
  };

  onFormSubmit = inputValue => {
    this.setState({ searchValue: inputValue });
  };

  render() {
    return (
      <>
        <Searchbar onFormSubmit={this.onFormSubmit} />
        <Oval />
        <ImageGallery />
        <Button />
        {/* <Modal /> */}
      </>
    );
  }
}
