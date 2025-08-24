import React from "react";
import { Route, Routes, useMatch } from "react-router-dom";
import Home from "./pages/student/Home.jsx";
import CoursesList from "./pages/student/CoursesList.jsx";
import CourseDetail from "./pages/student/CourseDetails.jsx";
import MyEnrollMents from "./pages/student/MyEnrollment.jsx";
import Player from "./pages/student/Player.jsx";
import Loading from "./components/students/Loading.jsx";
import Educator from "./pages/educator/Educator.jsx";
import Dashboard from "./pages/educator/Dashboard.jsx";
import AddCourse from "./pages/educator/AddCourece.jsx"; 
import MyCourses from "./pages/educator/MyCources.jsx";
import StudentsEnrolled from "./pages/educator/StudentsEnrolled.jsx";
import Navbar from "./components/students/Navbar.jsx";


const App = () => {
  const isEducatorRoute = useMatch("/educator/*");

  return (
    <div className="text-default min-h-screen bg-white">
      {!isEducatorRoute && <Navbar/>}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<CoursesList />} />
        <Route path="/course-list/:input" element={<CoursesList />} />
        <Route path="/course-detail/:id" element={<CourseDetail />} />
        <Route path="/my-enrollments" element={<MyEnrollMents/>} />
        <Route path="/player/:id" element={<Player />} />
        <Route path="/loading/:path" element={<Loading />} />
        <Route path="/educator" element={<Educator/>}>
           <Route path="educator" element={<Dashboard />} />
           <Route path="add-course" element={<AddCourse />} />
            <Route path="my-courses" element={<MyCourses />} />
            <Route path="students-enrolled/:id" element={<StudentsEnrolled />} />

           
        </Route>
      </Routes>
    </div>
  );
};

export default App;
