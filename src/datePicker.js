import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./dataPicker.scss";

function Datepicker() {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <DatePicker
      className="date"
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
      showYearDropdown
      placeholderText="DD/MM/YYYY"
    />
  );
}

export default Datepicker;
