import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import React from "react";
import { data } from "./App";

export function Dashboard() {
  return (
    <div className="body">
      <div className="title">
        <h1>Dashboard</h1>
        <Button variant="contained">
          <DownloadIcon fontSize="small" /> Generate Report
        </Button>
      </div>
      <Dashboardcards />
      <div className="charts">
        <ChartsSegment />
      </div>
      <div className="otherStuff">
        <div className="othersLeftContainer">
          <ProgressBar />
          <Colors />
        </div>
        <div className="othersRightContainer">
          <Illustrations />
          <Development />
        </div>
      </div>
    </div>
  );
}
function DisplayCards({ name, icon, progress, content, color }) {
  var styles = {
    color: color,
  };
  var cardBorderStyle = {
    borderLeft: "5px solid " + color,
  };
  return (
    <Card style={cardBorderStyle}>
      <CardContent className="card">
        <div className="cardContentWrapper">
          <div className="contentWrapper">
            <div className="name" style={styles}>
              {name}
            </div>
            {progress ? (
              <span className="progress">
                <span>{progress}% </span>
                <progress style={styles} value={progress} max="100" />
              </span>
            ) : (
              <div className="content">{content}</div>
            )}
          </div>
          <div className="iconWrapper">{icon}</div>
        </div>
      </CardContent>
    </Card>
  );
}

export function Dashboardcards() {
  return (
    <div className="earningCards">
      {data.map((value) => {
        return (
          <div className="eachCardItem">
            <DisplayCards
              key={value.id}
              name={value.name}
              icon={value.icon}
              progress={value.progress}
              content={value.content}
              color={value.color}
            />
          </div>
        );
      })}
    </div>
  );
}

export function ChartsSegment() {
  const garphData = [
    {
      month: "Jan",
      earnings: 0,
    },
    {
      month: "Feb",
      earnings: 10000,
    },
    {
      month: "Mar",
      earnings: 5000,
    },
    {
      month: "Apr",
      earnings: 15000,
    },
    {
      month: "May",
      earnings: 10000,
    },
    {
      month: "Jun",
      earnings: 20000,
    },
    {
      month: "Jul",
      earnings: 15000,
    },
    {
      month: "Aug",
      earnings: 25000,
    },
    {
      month: "Sep",
      earnings: 20000,
    },
    {
      month: "Oct",
      earnings: 30000,
    },
    {
      month: "Nov",
      earnings: 25000,
    },
    {
      month: "Dec",
      earnings: 40000,
    },
  ];

  return (
    <>
      <div styles={{ width: "100%", height: "350" }}>
        <ResponsiveContainer>
          <AreaChart data={garphData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="earnings"
              stroke="#8884d8"
              fill="red"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
function ProgressBar() {
  return (
    <div className="progressbarWrapper">
      <div className="progressbarHeader">Projects</div>
      <div className="progressBarBlock">
        <label className="label" htmlFor="project1">
          Server Migration <span>20%</span>
        </label>
        <progress className="progress" value="20" max="100" id="project1">
          20%
        </progress>
        <label className="label" htmlFor="project2">
          Sales Tracking <span>40%</span>
        </label>
        <progress className="progress" value="40" max="100" id="project2">
          40%
        </progress>
        <label className="label" htmlFor="project3">
          Customer Database <span>60%</span>
        </label>
        <progress className="progress" value="60" max="100" id="project3">
          60%
        </progress>
        <label className="label" htmlFor="project4">
          Payout Details <span>80%</span>
        </label>
        <progress className="progress" value="80" max="100" id="project4">
          80%
        </progress>
        <label className="label" htmlFor="project5">
          Account Setup <span>Complete!</span>
        </label>
        <progress className="progress" value="100" max="100" id="project5">
          100%
        </progress>
      </div>
    </div>
  );
}
function Colors() {
  const colorData = [
    {
      name: "Primary",
      hexcode: "#4e73df",
    },
    {
      name: "Success",
      hexcode: "#1c88a",
    },
    {
      name: "Info",
      hexcode: "#36b9cc",
    },
    {
      name: "Warning",
      hexcode: "#f6c23e",
    },
    {
      name: "Danger",
      hexcode: "#e74a3b",
    },
    {
      name: "Secondary",
      hexcode: "#858796",
    },
    {
      name: "Light",
      hexcode: "#f8f9fc",
    },
    {
      name: "Dark",
      hexcode: "#5a5c69",
    },
  ];
  return (
    <div className="colorWrapper">
      {colorData.map((value) => (
        <ColorCard color={value.name} hexcode={value.hexcode} />
      ))}
    </div>
  );
}
function ColorCard({ color, hexcode }) {
  const styles = { backgroundColor: hexcode };
  return (
    <div
      style={styles}
      className={
        color === "Light"
          ? "LightColorCardWrapper colorCardWrapper"
          : "colorCardWrapper"
      }
    >
      <div className="colorName">{color}</div>
      <div className="hexCode">{hexcode}</div>
    </div>
  );
}
function Illustrations() {
  return (
    <div className="illustrationWrapper">
      <div className="illustrationHeader">Illustrations</div>
      <div className="illustrationContent">
        <div className="illustrationImage">
          <img
            src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg"
            alt="image error"
          />
        </div>
        <div className="illustrationText">
          Add some quality, svg illustrations to your project courtesy of{" "}
          <a href="">unDraw</a>, a constantly updated collection of beautiful
          svg images that you can use completely free and without attribution!
        </div>
        <div className="illustrationLink">
          <a href="">Browse Illustrations on unDraw →</a>
        </div>
      </div>
    </div>
  );
}
function Development() {
  return (
    <div className="developmentWrapper">
      <div className="developmentHeader">Development Approach</div>
      <div className="developmentContent">
        <p>
          SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order
          to reduce CSS bloat and poor page performance. Custom CSS classes are
          used to create custom components and custom utility classes.
        </p>
        <p>
          Before working with this theme, you should become familiar with the
          Bootstrap framework, especially the utility classes.
        </p>
      </div>
    </div>
  );
}
