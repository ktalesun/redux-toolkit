
import logo from './logo.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './store/slices/counter';

function App() {
  
  const { counter } = useSelector(state => state.counter );
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Count is: {counter}</p>
        <p style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
          <button type="button" onClick={()=> dispatch(increment())}>
            Increment
          </button>
          <button type="button" onClick={()=> dispatch(decrement())}>
            Decrement
          </button>
          <button type="button" onClick={()=> dispatch(incrementByAmount(2))}>
            Increment by 2
          </button>
        </p>
      </header>
    </div>
  )
}


export default App