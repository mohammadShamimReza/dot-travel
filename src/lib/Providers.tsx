"use client";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import StyledComponentsRegistry from "./AntdRegistry";
import { UserProvider } from "./UserProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <UserProvider>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </UserProvider>
    </Provider>
  );
};

export default Providers;
