import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";
import Main from "./components/Main/Main";

function App() {
  const [today, setToday] = useState();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=a44dbe17d9702693257f7556d12dec32`,
      )
        .then((response) => response.json())
        .then((data) => {
          setToday(data.current);
        });
    });
  }, []);

  return (
    <div>
      {today ? <Main data={today} cover={today.weather[0].main} /> : <Loader />}
    </div>
  );
}

export default App;
