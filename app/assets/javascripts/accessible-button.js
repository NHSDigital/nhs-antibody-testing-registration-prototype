/*
 *   This content is licensed according to the W3C Software License at
 *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 *   JS code for the button design pattern
 */

'use strict';

var ICON_MUTE_URL = '#icon-mute';
var ICON_SOUND_URL = '#icon-sound';

function init() {
  var actionButton = document.getElementById('snap');
  actionButton.addEventListener('click', activateActionButton);
  actionButton.addEventListener('keydown', actionButtonKeydownHandler);
  actionButton.addEventListener('keyup', actionButtonKeyupHandler);
}

/**
 * Activates the snap button with the enter key.
 *
 * @param {KeyboardEvent} event
 */
function actionButtonKeydownHandler(event) {
  // The action button is activated by space on the keyup event, but the
  // default action for space is already triggered on keydown. It needs to be
  // prevented to stop scrolling the page before activating the button.
  if (event.keyCode === 32) {
    event.preventDefault();
  }
  // If enter is pressed, activate the button
  else if (event.keyCode === 13) {
    event.preventDefault();
    activateActionButton();
  }
}

/**
 * Activates the snap button with the space key.
 *
 * @param {KeyboardEvent} event
 */
function actionButtonKeyupHandler(event) {
  if (event.keyCode === 32) {
    event.preventDefault();
    activateActionButton();
  }
}

// function activateActionButton() {
//  window.print();
// }

window.onload = init;
