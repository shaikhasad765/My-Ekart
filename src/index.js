import React from "react";
import ReactDOM from "react-dom/client"; // Importing ReactDOM's client module for rendering.
import { BrowserRouter } from "react-router-dom"; // Importing BrowserRouter for routing.
import { Provider } from "react-redux"; // Importing Provider for Redux store.
import { PersistGate } from "redux-persist/integration/react"; // Importing PersistGate for Redux persistor integration.
import { store, persistor } from "./store/store"; // Importing the store and persistor from the "./store/store" module.

import App from "./App"; // Importing the main App component.

// Creating a root for rendering using ReactDOM.createRoot and selecting the element with the ID "root".
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Providing the Redux store to the entire app using the Provider component. */}
    <Provider store={store}>
      {/* Integrating Redux persistor using PersistGate with loading UI and the persistor. */}
      <PersistGate loading={null} persistor={persistor}>
        {/* Wrapping the app with BrowserRouter for routing functionality. */}
        <BrowserRouter>
          {/* Rendering the main App component. */}
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);