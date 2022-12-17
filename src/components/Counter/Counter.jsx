import { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { StateContext, DispatchContext } from '../../hooks/contexts';
import './Counter.css';

export default function Counter({ category }) {
    const state = useContext(StateContext);
    const dispatch = useContext(DispatchContext);
    const decrementElement = useRef();
    const incrementElement = useRef();

    const decrementCounter = () => {
        dispatch({ type: `DECREMENT_${category.toUpperCase()}` });
    };
    const incrementCounter = () => {
        dispatch({ type: `INCREMENT_${category.toUpperCase()}` });
    };

    useEffect(() => {
        if (state.playStatus) {
            incrementElement.current.disabled = true;
            incrementElement.current.style.cursor = 'default';
            decrementElement.current.disabled = true;
            decrementElement.current.style.cursor = 'default';
        }

        return (() => {
            incrementElement.current.disabled = false;
            incrementElement.current.style.cursor = 'pointer';
            decrementElement.current.disabled = false;
            decrementElement.current.style.cursor = 'pointer';
        });
    }, [state.playStatus]);

    return (
        <div className="element">
            <h2 id={`${category}-label`}>{state[`${category}Label`]}</h2>
            <span>
                <input ref={decrementElement} id={`${category}-decrement`} type="button" value="&#129075;" onClick={decrementCounter} />
                <h3 id={`${category}-length`}>{state[`${category}Length`]}</h3>
                <input ref={incrementElement} id={`${category}-increment`} type="button" value="&#129073;" onClick={incrementCounter} />
            </span>
        </div>
    );
}

Counter.propTypes = {
    category: PropTypes.string.isRequired,
};
