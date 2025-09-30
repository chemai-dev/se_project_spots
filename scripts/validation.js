const configure = {
  formSelector: ".modal__form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__save-button",
  inactiveButtonClass: "form__save-button_inactive",
  inputErrorClass: "form__input_type_error",
};

const showInputError = (formElement, inputElement, errorMessage, configure) => {
  const errorMsgElement = formElement.querySelector(
    `#${inputElement.id}-error`
  );
  errorMsgElement.textContent = errorMessage;
  inputElement.classList.add(configure.inputErrorClass);
};

const hideInputError = (formElement, inputElement, configure) => {
  const errorMsgElement = formElement.querySelector(
    `#${inputElement.id}-error`
  );
  errorMsgElement.textContent = "";
  inputElement.classList.remove(configure.inputErrorClass);
};

const checkInputValidity = (formElement, inputElement, configure) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      configure
    );
  } else {
    hideInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      configure
    );
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, configure) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(configure.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(configure.inactiveButtonClass);
    buttonElement.disabled = false;
  }
};

const setEventListeners = (formElement, configure) => {
  const inputList = Array.from(
    formElement.querySelectorAll(configure.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    configure.submitButtonSelector
  );
  toggleButtonState(inputList, buttonElement, configure);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, configure);
      toggleButtonState(inputList, buttonElement, configure);
    });
  });
};

const enableValidation = (configure) => {
  const formList = document.querySelectorAll(configure.formSelector);
  formList.forEach((formElement) => {
    setEventListeners(formElement, configure);
  });
};

enableValidation(configure);
