import React from "react";
import { Footer, ScheduleTabs } from "../../Containers";
import { Heading, RezNavbar } from "../../Components";
import ScheduleModal from "../../Components/scheduleModal/ScheduleModal";

const Schedule = () => {
  return (
    <div>
      <RezNavbar style={{ top: 0, background: "var( --gradient-bg)" }} />
      <div className="my-3">
        <Heading text={"Schedule"} style={{ alignItems: "center" }} />
      </div>
      <ScheduleTabs />
      <Footer />
    </div>
  );
};

export default Schedule;
