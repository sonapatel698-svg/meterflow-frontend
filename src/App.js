import { useState } from 'react';
function App() {
  const [requests, setRequests] = useState(0);
  const [limit] = useState(100);
  const sendRequest = () => {
    if (requests < limit) setRequests(requests + 1);
  };
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial' }}>
      <h1>MeterFlow - API Rate Limiter</h1>
      <h2>Requests: {requests} / {limit}</h2>
      <progress value={requests} max={limit} style={{width:'100%'}}></progress>
      <br/><br/>
      <button onClick={sendRequest}>Send Request</button>
      {requests >= limit && <p style={{color:'red'}}>⚠️ Limit Exceeded!</p>}
    </div>
  );
}
export default App;
