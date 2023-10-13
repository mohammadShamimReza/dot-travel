"use client";
import { ThemeProvider } from "next-themes";
// import { store } from "@/redux/store";
import StyledComponentsRegistry from "./AntdRegistry";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    // <Provider store={store}>
    <StyledComponentsRegistry>
      <ThemeProvider attribute="class">{children} </ThemeProvider>
    </StyledComponentsRegistry>
    // </Provider>
  );
};

export default Providers;
