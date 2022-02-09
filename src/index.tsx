import { Box, ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react";
import * as React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Contact } from "./Contact";
import { Prize } from "./Prize";
import { RaffleType } from "./RaffleType";
import { JobSetting } from "./JobSettings";
import { BreadCrumbs } from "./BreadCrumbs";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ColorModeScript />

        <Box
          textAlign="center"
          fontSize="xl"
          p={4}
          w="container.lg"
          m="0 auto"
          display="flex"
          flexDir="row"
        >
          <BreadCrumbs />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/finish" element={<App />} />
            <Route path="job" element={<JobSetting />} />
            <Route path="job/raffle" element={<RaffleType />} />
            <Route path="job/raffle/prizes" element={<Prize />} />
            <Route path="job/prizes" element={<Prize />} />
            <Route path="job/raffle/prizes/contact" element={<Contact />} />
            <Route path="job/prizes/contact" element={<Contact />} />
          </Routes>{" "}
        </Box>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
