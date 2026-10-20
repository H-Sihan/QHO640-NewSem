import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./app";
import Counter from "./counter";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div>
    <App />
    <Counter />
</div>
)