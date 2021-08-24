import Chart from "../Chart";
import classes from "./Main.module.css";

export default function Main(props) {
  const data = props.data.hourly.map((el) => {
    return {
      date: new Intl.DateTimeFormat("it-IT", {
        timeStyle: "short",
        dateStyle: "short",
      }).format(new Date(el.dt * 1000)),
      value: el.temp,
    };
  });

  console.log(data);
  return (
    <div
      className={"container-fluid px-md-5 min-vh-100  " + classes[props.cover]}
    >
      <div className="row ">
        <div className="col-12 my-3">
          <div className="card p-3 shadow">
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
        <div className="col-12" style={{ height: "400px" }}>
          <div className="card p-3 shadow">
            <Chart data={data} />
          </div>
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
