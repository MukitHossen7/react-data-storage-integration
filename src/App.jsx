import { useState } from "react";
import "./App.css";
import Sunglass from "./components/Sunglass/Sunglass";
import Watch from "./components/Watch/Watch";
import { useEffect } from "react";

function App() {
  // const watches = [
  //   {
  //     id: 1,
  //     brand: "Apple",
  //     model: "Apple Watch Series 9",
  //     price: 399,
  //     features: ["Heart Rate Monitor", "GPS", "ECG", "Water Resistant"],
  //     batteryLife: "18 hours",
  //   },
  //   {
  //     id: 2,
  //     brand: "Samsung",
  //     model: "Galaxy Watch 6",
  //     price: 299,
  //     features: [
  //       "Heart Rate Monitor",
  //       "GPS",
  //       "Sleep Tracking",
  //       "Water Resistant",
  //     ],
  //     batteryLife: "24 hours",
  //   },
  //   {
  //     id: 3,
  //     brand: "Garmin",
  //     model: "Forerunner 255",
  //     price: 349,
  //     features: ["GPS", "Heart Rate Monitor", "Sleep Tracking", "VO2 Max"],
  //     batteryLife: "14 days",
  //   },
  //   {
  //     id: 4,
  //     brand: "Fitbit",
  //     model: "Fitbit Versa 4",
  //     price: 199,
  //     features: [
  //       "Heart Rate Monitor",
  //       "Sleep Tracking",
  //       "Water Resistant",
  //       "GPS",
  //     ],
  //     batteryLife: "6 days",
  //   },
  //   {
  //     id: 5,
  //     brand: "Amazfit",
  //     model: "GTS 4 Mini",
  //     price: 129,
  //     features: [
  //       "Heart Rate Monitor",
  //       "GPS",
  //       "Sleep Tracking",
  //       "Water Resistant",
  //     ],
  //     batteryLife: "15 days",
  //   },
  //   {
  //     id: 6,
  //     brand: "Apple",
  //     model: "Apple Watch SE 2",
  //     price: 279,
  //     features: [
  //       "Heart Rate Monitor",
  //       "GPS",
  //       "Fall Detection",
  //       "Water Resistant",
  //     ],
  //     batteryLife: "18 hours",
  //   },
  //   {
  //     id: 7,
  //     brand: "Samsung",
  //     model: "Galaxy Watch 5",
  //     price: 279,
  //     features: [
  //       "Heart Rate Monitor",
  //       "GPS",
  //       "Sleep Tracking",
  //       "Water Resistant",
  //     ],
  //     batteryLife: "40 hours",
  //   },
  //   {
  //     id: 8,
  //     brand: "Garmin",
  //     model: "Venu 2",
  //     price: 399,
  //     features: ["GPS", "Heart Rate Monitor", "SpO2", "Water Resistant"],
  //     batteryLife: "11 days",
  //   },
  //   {
  //     id: 9,
  //     brand: "Fitbit",
  //     model: "Sense 2",
  //     price: 299,
  //     features: [
  //       "ECG",
  //       "Heart Rate Monitor",
  //       "Sleep Tracking",
  //       "Water Resistant",
  //     ],
  //     batteryLife: "6 days",
  //   },
  //   {
  //     id: 10,
  //     brand: "Amazfit",
  //     model: "GTR 3 Pro",
  //     price: 249,
  //     features: ["Heart Rate Monitor", "GPS", "SpO2", "Water Resistant"],
  //     batteryLife: "12 days",
  //   },
  //   {
  //     id: 11,
  //     brand: "Apple",
  //     model: "Apple Watch Ultra",
  //     price: 799,
  //     features: [
  //       "Heart Rate Monitor",
  //       "GPS",
  //       "ECG",
  //       "Water Resistant",
  //       "Advanced Fitness Tracking",
  //     ],
  //     batteryLife: "36 hours",
  //   },
  //   {
  //     id: 12,
  //     brand: "Samsung",
  //     model: "Galaxy Watch Active 2",
  //     price: 199,
  //     features: [
  //       "Heart Rate Monitor",
  //       "GPS",
  //       "Sleep Tracking",
  //       "Water Resistant",
  //     ],
  //     batteryLife: "40 hours",
  //   },
  //   {
  //     id: 13,
  //     brand: "Garmin",
  //     model: "Fenix 7X Solar",
  //     price: 899,
  //     features: [
  //       "GPS",
  //       "Heart Rate Monitor",
  //       "Solar Charging",
  //       "Water Resistant",
  //     ],
  //     batteryLife: "28 days",
  //   },
  //   {
  //     id: 14,
  //     brand: "Fitbit",
  //     model: "Fitbit Charge 5",
  //     price: 149,
  //     features: [
  //       "Heart Rate Monitor",
  //       "ECG",
  //       "Sleep Tracking",
  //       "Water Resistant",
  //     ],
  //     batteryLife: "7 days",
  //   },
  //   {
  //     id: 15,
  //     brand: "Amazfit",
  //     model: "T-Rex 2",
  //     price: 199,
  //     features: [
  //       "Heart Rate Monitor",
  //       "GPS",
  //       "SpO2",
  //       "Water Resistant",
  //       "Military-grade Durability",
  //     ],
  //     batteryLife: "24 days",
  //   },
  // ];

  const [watches, setWatches] = useState([]);
  useEffect(() => {
    fetch("watch.json")
      .then((res) => res.json())
      .then((data) => setWatches(data));
  }, []);
  return (
    <>
      <h2>React Data Storage Integration</h2>
      <Sunglass></Sunglass>
      {watches.map((watch) => (
        <Watch key={watch.id} watch={watch}></Watch>
      ))}
    </>
  );
}

export default App;
