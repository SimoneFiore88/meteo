import classes from "./Main.module.css";

export default function Main(props) {
  console.log(props.data);
  console.log(getTime(new Date(props.data.sunset * 1000)));
  return (
    <div
      className={"container-fluid px-md-5 min-vh-100  " + classes[props.cover]}
    >
      <div className="row min-vh-100 align-items-center justify-content-center">
        <div className="col-12 col-md-6 px-5">
          <div className={classes.card}>
            <p className="text-center display-3">{props.data.temp} °C</p>
            <p className="text-center lead">
              Feels like {props.data.feels_like} °C
            </p>
            <p className="text-center h3">
              {props.data.weather[0].description.toUpperCase()}
            </p>
            <p>Humidity {props.data.humidity} %</p>
            <p>Pressure {props.data.pressure} mbar</p>
            <p>Sunrise {getTime(new Date(props.data.sunrise * 1000))}</p>
            <p>Sunset {getTime(new Date(props.data.sunset * 1000))}</p>
          </div>
        </div>
        <div className="col-12 col-md-6 text-center"></div>
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
