import { Provider } from "react-redux";
import store from "../store";
import ThemeProvider from "./ThemeProvider";
import { ErrorBoundary, GlobalError } from "../error";

function AppProviders({ children }) {
  return (
    <ErrorBoundary fallback={<GlobalError />}>
      <Provider store={store}>
        <ThemeProvider>{children}</ThemeProvider>
      </Provider>
    </ErrorBoundary>
  );
}

export default AppProviders;
