export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal-wrapper .title'),
  btnClose: document.querySelector('.modal-wrapper .close'),

  open() {
    Modal.wrapper.classList.add('open')
  },

  close() {
    Modal.wrapper.classList.remove('open')
  }
}

function closeModalOnEsc(event) {
  if (event.key === 'Escape' && Modal.wrapper.classList.contains('open')) {
    Modal.close()
  }
}

window.addEventListener('keydown', closeModalOnEsc)
Modal.btnClose.onclick = () => Modal.close()
