import React, { useState } from "react";

const ws = new WebSocket("ws://127.0.0.1:5000");

const App = () => {
  const [foo, setData] = useState([]);
  ws.onmessage = function(event) {
    setData([JSON.parse(event.data), ...foo]);
  };

  ws.onclose = console.warn;

  ws.onerror = console.error;

  return (
    <ul>
      {foo.map(data => (
        <li key={data.id}>{data.id}</li>
      ))}
    </ul>
  );
};

export default App;
