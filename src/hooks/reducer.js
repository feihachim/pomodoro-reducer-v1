import pomodoroModule from '../utils/pomodoroModule';

const initialState = {
    sessionLabel: 'Session',
    sessionLength: 25,
    breakLabel: 'Break',
    breakLength: 5,
    timerLabel: 'Session',
    timerLength: 1500,
    playStatus: false,
};

const pomodoroReducer = (state, action) => {
    switch (action.type) {
    case 'INCREMENT_SESSION':
        return pomodoroModule.incrementSession(state);
    case 'DECREMENT_SESSION':
        return pomodoroModule.decrementSession(state);
    case 'INCREMENT_BREAK':
        return pomodoroModule.incrementBreak(state);
    case 'DECREMENT_BREAK':
        return pomodoroModule.decrementBreak(state);
    case 'PLAY_PAUSE':
        return pomodoroModule.playPause(state);
    case 'RESET':
        return pomodoroModule.reset(state);
    case 'DECREASE_TIME':
        return pomodoroModule.decreaseTime(state);
    case 'SWITCH_TIME':
        return pomodoroModule.switchTime(state);
    default:
        return state;
    }
};

export { initialState, pomodoroReducer };
