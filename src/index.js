import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App(){
    const [count, setCount] = useState(0);

    return(
        <div>
            <h1>Contador React</h1>
            <p>Valor do contador: {count}</p>
            <button onClick={() => setCount(count - 1)}>Decrementar</button>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));