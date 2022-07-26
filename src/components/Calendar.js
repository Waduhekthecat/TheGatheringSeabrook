import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import "../App.css";
import { InlineWidget } from "react-calendly";

function CalendarApp() {
 
  return (
    <div className="calendar-style">
      <InlineWidget url="https://calendly.com/tatsujoestar?hide_gdpr_banner=1" />
    </div>
  );
}

export default CalendarApp;