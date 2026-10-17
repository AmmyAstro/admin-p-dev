
"use client";

import { useEffect } from "react";
import { initDatadogRUM } from "./utils/datadogRUM";

export default function DatadogRUM() {
  useEffect(() => {
    initDatadogRUM();
  }, []);

  return null;
}
