import * as React from "react";
import { render } from "@testing-library/react";
import Events from "../src/components/events";

describe("Event", () => {
  it("renders Event component", () => {
    render(<Events />);
  });
});
