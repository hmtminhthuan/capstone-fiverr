import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";

import { HomeTemplate } from "./templates/HomeTemplate";
import { createBrowserHistory } from "history";
//Cấu hình redux
import "./assets/css/sass/style.scss";
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import Home from "./pages/Home/Home";
import Admin from "./pages/Admin/Admin";
import JobDetail from "./pages/JobDetail/JobDetail";
import JobList from "./pages/JobList/JobList";
import JobType from "./pages/JobType/JobType";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

export const history = createBrowserHistory();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<Home />}></Route>

          <Route path="jobdetail">
            <Route path=":id" element={<JobDetail />}></Route>
          </Route>
          <Route path="joblist">
            <Route path=":keySearch" element={<JobList />}></Route>
            <Route path="" element={<JobList />}></Route>
          </Route>
          <Route path="jobtype" element={<JobType />}></Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Route>
        <Route path="admin" element={<Admin />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);
