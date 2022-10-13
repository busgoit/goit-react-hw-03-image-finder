import React, { Component } from 'react';
import API from '../services';
import Searchbar from './Searchbar';
import Oval from './Loader';
import ImageGallery from './ImageGallery';
import Button from './Button';
// import Modal from './Modal';

export class App extends Component {
  state = {
    pictures: null,
    searchQuery: '',
    isLoading: false,
    error: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.state;

    const prevQuery = prevState.searchQuery;

    if (prevQuery !== searchQuery) {
      this.setState({ isLoading: true });

      try {
        const pictures = await API.fetchImagesWithQuery(searchQuery);
        this.setState({ pictures });
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  onFormSubmit = inputValue => {
    this.setState({ searchQuery: inputValue });
  };

  render() {
    const { pictures, isLoading } = this.state;
    const isPictures = pictures && pictures.length > 0 && !isLoading;

    return (
      <>
        <Searchbar onFormSubmit={this.onFormSubmit} />
        {isLoading && <Oval />}
        {!isPictures && <p>Enter search query</p>}
        {isPictures && <ImageGallery pictures={pictures} />}
        {isPictures && <Button />}
        {/* <Modal /> */}
      </>
    );
  }
}
