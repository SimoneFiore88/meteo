import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Chart(props) {
  const next = props.data.daily.map((el) => {
    return {
      name: new Intl.DateTimeFormat("en", {
        dateStyle: "short",
      }).format(new Date(el.dt * 1000)),
      max: el.temp.max,
      min: el.temp.min,
    };
  });

  console.log(props.data);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={100} height={300} data={next}>
        <XAxis dataKey="name" tick={{ fill: "white" }} />
        <YAxis tick={{ fill: "white" }} domain={[20, 30]} />
        <Tooltip />
        {/* <Legend /> */}
        <Line type="monotone" dataKey="max" stroke="#000000" />
        <Line type="monotone" dataKey="min" stroke="#000000" />
      </LineChart>
    </ResponsiveContainer>
  );
}
