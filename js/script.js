const $ = (selector) => document.getElementById(selector);

const $tooltip = $("tooltip");
const $shareButton = $("share-button");

document.addEventListener("click", (e) =>
  buttonPressed(e) ? showTooltip() : hideTooltip()
);

const buttonPressed = (e) => {
  return (
    e.target.tagName === "BUTTON" ||
    e.target.className === "share-button--active__icon"
  );
};

const showTooltip = () => {
  $shareButton.classList.toggle("share-button--active");
  $tooltip.classList.toggle("tooltip--active");
};

const hideTooltip = () => {
  $shareButton.classList.remove("share-button--active");
  $tooltip.classList.remove("tooltip--active");
};
