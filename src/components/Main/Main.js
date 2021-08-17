import Chart from "../Chart";
import classes from "./Main.module.css";

export default function Main(props) {
  return (
    <div
      className={"container-fluid px-md-5 min-vh-100  " + classes[props.cover]}
    >
      <div className="row min-vh-100 align-items-center justify-content-center">
        <div className="col-12 col-md-6 px-5">
          <div className={classes.card}>
            <p className="text-center display-3">
              {props.data.current.temp} °C
            </p>
            <p className="text-center lead">
              Feels like {props.data.current.feels_like} °C
            </p>
            <p className="text-center h3">
              {props.data.current.weather[0].description.toUpperCase()}
            </p>
            <p>Humidity {props.data.current.humidity} %</p>
            <p>Pressure {props.data.current.pressure} mbar</p>
            <p>
              Sunrise {getTime(new Date(props.data.current.sunrise * 1000))}
            </p>
            <p>Sunset {getTime(new Date(props.data.current.sunset * 1000))}</p>
          </div>
        </div>
        <div
          className={"col-12 col-md-6 px-5" + classes.card}
          style={{ height: "400px" }}
        >
          <Chart data={props.data} />
        </div>
      </div>
    </div>
  );
}

function getTime(data) {
  let hours = data.getHours() < 10 ? "0" + data.getHours() : data.getHours();
  let minutes =
    data.getMinutes() < 10 ? "0" + data.getMinutes() : data.getMinutes();

  return hours + ":" + minutes;
}
