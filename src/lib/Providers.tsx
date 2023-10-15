"use client";
// import { store } from "@/redux/store";
import StyledComponentsRegistry from "./AntdRegistry";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    // <Provider store={store}>
    <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    // </Provider>
  );
};

export default Providers;
