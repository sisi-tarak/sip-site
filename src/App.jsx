import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import { Provider } from "./Components/Context/Context";
import { AuthContext } from "./Components/Context/AuthContext";
import RouteGuard from "./Components/RouteGuard/RouteGuard";
import Auth from "./Components/Auth/Auth";
import NotFound from "./Components/NotFound/NotFound";

const App = () => {
  const { auth } = useContext(AuthContext) || {};

  return (
    <Provider>
      <Router>
        <Routes>
          <Route
            path="/auth"
            element={
              <RouteGuard
                element={<Auth />}
                authenticated={auth?.authenticate}
                user={auth?.user}
              />
            }
          />

          {/* <Navbar /> */}
          {/* <Route
            path="/instructor"
            element={
              <RouteGuard
                element={<InstructorDashboardpage />}
                authenticated={auth?.authenticate}
                user={auth?.user}
              />
            }
          />
          <Route
            path="/instructor/create-new-course"
            element={
              <RouteGuard
                element={<AddNewCoursePage />}
                authenticated={auth?.authenticate}
                user={auth?.user}
              />
            }
          />
          <Route
            path="/instructor/edit-course/:courseId"
            element={
              <RouteGuard
                element={<AddNewCoursePage />}
                authenticated={auth?.authenticate}
                user={auth?.user}
              />
            }
          />
          <Route
            path="/"
            element={
              <RouteGuard
                element={<StudentViewCommonLayout />}
                authenticated={auth?.authenticate}
                user={auth?.user}
              />
            }
          > */}
          <Route path="" element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          {/* <Route path="home" element={<StudentHomePage />} />
            <Route path="courses" element={<StudentViewCoursesPage />} />
            <Route
              path="course/details/:id"
              element={<StudentViewCourseDetailsPage />}
            />
            <Route
              path="payment-return"
              element={<PaypalPaymentReturnPage />}
            />
            <Route path="student-courses" element={<StudentCoursesPage />} />
            <Route
              path="course-progress/:id"
              element={<StudentViewCourseProgressPage />}
            /> 
          </Route> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
