import { render } from "@testing-library/react";
import ReactQueryTestWrapper from "./wrappers/ReactQueryTestWrapper";

export const customRender = (ui, options = {}) =>
  render(ui, {
    wrapper: ReactQueryTestWrapper,
    ...options,
  });
