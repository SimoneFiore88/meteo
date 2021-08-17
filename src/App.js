import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";
import Main from "./components/Main/Main";

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=a44dbe17d9702693257f7556d12dec32`,
      )
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        });
    });
  }, []);

  return data ? (
    <Main data={data} cover={data.current.weather[0].main} />
  ) : (
    <Loader />
  );
}

export default App;
