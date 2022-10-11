import React, { Component } from 'react';
import { Overlay, ModalWindowContent, Img } from './Modal.styled';

export class Modal extends Component {
  render() {
    return (
      <Overlay>
        <ModalWindowContent>
          <Img src="" alt="" />
        </ModalWindowContent>
      </Overlay>
    );
  }
}

export default Modal;
