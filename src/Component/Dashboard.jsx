import React from "react";
import Cards from "./Cards";
import {
  TableContainer,
  TableBody,
  TableCell,
  TableRow,
  Table,
  TextField,
  Button,
} from "@mui/material";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  BarChart,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

const dummyData = [
  {
    name: "python",
    student: 12,
    fee: 15,
  },
  {
    name: "javascript",
    student: 34,
    fee: 15,
  },
  {
    name: "C",
    student: 44,
    fee: 15,
  },
  {
    name: "C++",
    student: 46,
    fee: 15,
  },
  {
    name: "MERN",
    student: 33,
    fee: 15,
  },
  {
    name: "MEAN",
    student: 122,
    fee: 15,
  },
  {
    name: "LAMP",
    student: 22,
    fee: 15,
  },
];

export const Dashboard = () => {
  return (
    <div className="">
      <div>
        <Cards />
      </div>
        <div className="charts">
          {/* <ResponsiveContainer width="100%" aspect={3} margin = {9, 4, 7, -2}> */}
            {/* <LineChart
              data={dummyData}
              width={500}
              height={300}
              margin={{
                top: 50,
                right: 30,
                left: 20,
                bottom: -20,
              }}
            >
              <CartesianGrid />
              <XAxis dataKey="name" interval={"preserveStartEnd"} />
              <YAxis />
              <Line dataKey="student" />
            </LineChart> */}
{/* 
            <BarChart width={500} height={300} data={dummyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart> */}
          {/* </ResponsiveContainer> */}
        </div>
      </div>
  );
};
