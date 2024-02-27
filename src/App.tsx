import React, { useEffect } from 'react';

function App() {
  const value = 'static web app ts!';

  useEffect(() => {
    async function loadForecast() {
      const response = await fetch("/api/WeatherForecast");
      const data = await response.json();
      console.log(data);
    }

    loadForecast();

  }, []);

  return <div>Hello {value}</div>;
}

export default App;
