/* eslint-disable jsx-a11y/media-has-caption */
import { useContext, useEffect, useRef } from 'react';
import { StateContext, DispatchContext } from '../../hooks/contexts';
import { displayTime } from '../../utils/helper';
import './Timer.css';
import PlayIcon from '../../assets/images/play_icon.png';
import PauseIcon from '../../assets/images/pause_icon.png';
import ResetIcon from '../../assets/images/download_loop_recycle_repeat_icon.png';
import BeepSound from '../../assets/sounds/alarm-no3-14864.mp3';

export default function Timer() {
    const state = useContext(StateContext);
    const dispatch = useContext(DispatchContext);
    const audioElement = useRef();
    const timeLeftElement = useRef();
    let intervalId = 0;
    let timeoutId = 0;

    const changeTextColor = (color) => {
        if (timeLeftElement.current.style.color !== color) {
            timeLeftElement.current.style.color = color;
        }
    };

    const playTime = () => {
        dispatch({ type: 'PLAY_PAUSE' });
    };

    const resetTimer = () => {
        dispatch({ type: 'RESET' });
        audioElement.current.load();
    };

    useEffect(() => {
        if (state.playStatus) {
            intervalId = setInterval(() => {
                dispatch({ type: 'DECREASE_TIME' });
                if (state.timerLength > 0 && state.timerLength >= 60) {
                    changeTextColor('green');
                }
                if (state.timerLength > 0 && state.timerLength < 60) {
                    changeTextColor('red');
                }
                if (state.timerLength === 0) {
                    audioElement.current.play();
                    timeoutId = setTimeout(() => {
                        dispatch({ type: 'SWITCH_TIME' });
                    }, 1000);
                }
            }, 1000);
        }

        return (() => {
            clearInterval(intervalId);
            clearTimeout(timeoutId);
        });
    }, [state.playStatus, state.timerLength]);

    return (
        <div className="timer-element">
            <div className="timer-element-label">
                <h2 id="timer-label">{state.timerLabel}</h2>
                <span ref={timeLeftElement} id="time-left">{displayTime(state.timerLength)}</span>
            </div>
            <div className="timer-buttons">
                <button type="button" id="start_stop" onClick={playTime}>
                    <img src={PlayIcon} alt="play icon" />
                    <img src={PauseIcon} alt="pause icon" />
                </button>
                <button type="button" id="reset" onClick={resetTimer}>
                    <img src={ResetIcon} alt="download icon" />
                </button>
            </div>
            <audio ref={audioElement} id="beep" src={BeepSound} />
        </div>
    );
}
