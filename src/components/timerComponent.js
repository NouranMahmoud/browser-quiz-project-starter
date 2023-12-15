import { TIMER_COMPONENT_ID, TIMER_SECONDS } from '../constants';

export const createTimerComponent = (onFinish) => {
  const element = document.createElement('div');
  element.id = TIMER_COMPONENT_ID;
  element.className = 'timer-component';

  element.innerHTML = appendTimer(TIMER_SECONDS);
  setCounter(element, onFinish);

  return element;
};

const setCounter = (element, onFinish) => {
  let seconds = TIMER_SECONDS;
  const timerId = setInterval(() => {
    if (seconds === 0) {
      clearInterval(timerId);
      onFinish();
      return;
    }

    element.innerHTML = appendTimer(--seconds);
  }, 1000);
};

const appendTimer = (seconds) => {
  // second turn in percentage
  // 100% = 20 seconds
  const percentage = (seconds / TIMER_SECONDS) * 100;

  return String.raw`
  <div class="meter orange nostripes">
	<span style="width: ${percentage}%"></span>
</div>
  `;
};
