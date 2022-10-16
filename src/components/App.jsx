import React, { Component } from 'react';
import API from '../services';
import Searchbar from './Searchbar';
import Oval from './Loader';
import ImageGallery from './ImageGallery';
import Button from './Button';
// import Modal from './Modal';

export class App extends Component {
  state = {
    pictures: [],
    page: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
  };

  async componentDidUpdate(_, prevState) {
    const { searchQuery, page } = this.state;

    const prevQuery = prevState.searchQuery;
    const prevPage = prevState.page;
    const prevPictures = prevState.pictures;

    if (prevQuery !== searchQuery || prevPage !== page) {
      this.setState({ isLoading: true });

      try {
        const pictures = await API.fetchImagesWithQuery(searchQuery, page);
        this.setState({ pictures: [...prevPictures, ...pictures] });
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  onFormSubmit = inputValue => {
    this.setState({
      pictures: [],
      page: 1,
      searchQuery: inputValue,
    });
  };

  onLoadMoreButton = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
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
        {isPictures && <Button onLoadMoreBtnClick={this.onLoadMoreButton} />}
        {/* <Modal /> */}
      </>
    );
  }
}
