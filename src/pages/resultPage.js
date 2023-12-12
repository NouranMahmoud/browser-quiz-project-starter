import { RETRY_BUTTON_ID, USER_INTERFACE_ID } from '../constants.js';
import { createResultElement } from '../views/resultView.js';
import { quizData } from '../data.js';
import { initQuestionPage } from './questionPage.js';

export const initResultPage = () => {
  const element = document.getElementById(USER_INTERFACE_ID);
  element.innerHTML = ``;
  const resultElement = createResultElement();
  element.appendChild(resultElement);

  document
    .getElementById(RETRY_BUTTON_ID)
    .addEventListener('click', restartQuiz);

  return element;
};

const restartQuiz = () => {
  quizData.currentQuestionIndex = 0;
  initQuestionPage();
};
