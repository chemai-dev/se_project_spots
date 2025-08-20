const editProfileButton = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileCloseButton = editProfileModal.querySelector(
  ".modal__close-button"
);
const editProfileNameInput = editProfileModal.querySelector("#profile-name");
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description"
);

const newPostButton = document.querySelector(".profile__post-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseButton = newPostModal.querySelector(".modal__close-button");
const newPostForm = newPostModal.querySelector(".modal__form");
const newPostImageLinkInput = newPostModal.querySelector("#post-image-link");
const newPostCaptionInput = newPostModal.querySelector("#post-caption");

const profileNameElement = document.querySelector(".profile__name");
const profileDescriptionElement = document.querySelector(
  ".profile__description"
);

editProfileButton.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-opened");
  editProfileNameInput.value = profileNameElement.textContent;
  editProfileDescriptionInput.value = profileDescriptionElement.textContent;
});

editProfileCloseButton.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});
function handleEditProfileSubmit(event) {
  event.preventDefault();
  profileNameElement.textContent = editProfileNameInput.value;
  profileDescriptionElement.textContent = editProfileDescriptionInput.value;
  editProfileModal.classList.remove("modal_is-opened");
  console.log("submitted");
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);

newPostButton.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

newPostCloseButton.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});

function handleNewPostSubmit(event) {
  event.preventDefault();
  console.log(newPostCaptionInput.value);
  console.log(newPostImageLinkInput.value);
  newPostModal.classList.remove("modal_is-opened");
}

newPostForm.addEventListener("submit", handleNewPostSubmit);
