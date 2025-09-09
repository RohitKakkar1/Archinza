import { useState } from "react";

import Jobs from "./Jobs";
import Courses from "./Courses";
import Events from "./Events";

export default function PersonalTabs() {


  return (
    <section className="flex flex-col  pb-8">
      {/* Sticky Sub Tabs */}
        <h1 className="pb-2 text-lg font-bold">Curated content for you</h1>
        <Jobs />
        <Events />
        <Courses />

    </section>
  );
}
