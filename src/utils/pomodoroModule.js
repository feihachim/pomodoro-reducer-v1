import { changeCounter } from './helper';

const pomodoroModule = (() => {
    function incrementSession(state) {
        const newSessionLength = changeCounter(state.sessionLength, 1);
        return {
            ...state,
            sessionLength: newSessionLength,
            timerLength: (!state.playStatus && state.timerLabel === 'Session') ? newSessionLength * 60 : state.timerLength,
        };
    }

    function decrementSession(state) {
        const newSessionLength = changeCounter(state.sessionLength, -1);
        return {
            ...state,
            sessionLength: newSessionLength,
            timerLength: (!state.playStatus && state.timerLabel === 'Session') ? newSessionLength * 60 : state.timerLength,
        };
    }

    function incrementBreak(state) {
        const newBreakLength = changeCounter(state.breakLength, 1);
        return {
            ...state,
            breakLength: newBreakLength,
            timerLength: (!state.playStatus && state.timerLabel === 'Break') ? newBreakLength * 60 : state.timerLength,
        };
    }

    function decrementBreak(state) {
        const newBreakLength = changeCounter(state.breakLength, -1);
        return {
            ...state,
            breakLength: newBreakLength,
            timerLength: (!state.playStatus && state.timerLabel === 'Break') ? newBreakLength * 60 : state.timerLength,
        };
    }

    function playPause(state) {
        return {
            ...state,
            playStatus: !state.playStatus,
        };
    }

    function decreaseTime(state) {
        return {
            ...state,
            timerLength: (state.timerLength > 0) ? state.timerLength - 1 : state.timerLength,
        };
    }

    function switchTime(state) {
        if (state.timerLabel === state.sessionLabel) {
            return {
                ...state,
                timerLabel: state.breakLabel,
                timerLength: state.breakLength * 60,
            };
        }
        return {
            ...state,
            timerLabel: state.sessionLabel,
            timerLength: state.sessionLength * 60,
        };
    }

    function reset(state) {
        return {
            ...state,
            sessionLabel: 'Session',
            sessionLength: 25,
            breakLabel: 'Break',
            breakLength: 5,
            timerLabel: 'Session',
            timerLength: 1500,
            playStatus: false,

        };
    }

    return {
        incrementSession,
        decrementSession,
        incrementBreak,
        decrementBreak,
        playPause,
        decreaseTime,
        reset,
        switchTime,
    };
})();

export default pomodoroModule;
