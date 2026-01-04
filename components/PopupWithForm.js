import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popupElement.querySelector(".popup__form");
  }

  _getInputValues() {
    this._inputList = this._popupForm.querySelectorAll(".popup__input");
  }

  setEventListeners() {
    super.setEventListeners();
    this._submitHandler = (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(evt);
    };
    this._popupForm.addEventListener("submit", this._submitHandler, {
      once: true,
    });
  }
}
