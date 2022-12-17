import { useReducer } from 'react';
import {
    StateContext,
    DispatchContext,
    initialState,
    pomodoroReducer,
} from './hooks';
import { Counter, Timer } from './components';
import './App.css';

function App() {
    const [state, dispatch] = useReducer(pomodoroReducer, initialState);
    return (
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
                <div className="App">
                    <div className="pomodoro">
                        <h1>25 + 5 Clock</h1>
                        <div className="pomodoro-set">
                            <Counter category="session" />
                            <Counter category="break" />
                        </div>
                        <Timer />
                    </div>
                </div>
            </StateContext.Provider>
        </DispatchContext.Provider>
    );
}

export default App;
