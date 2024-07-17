import React from "react";
import { NavLink } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <nav className="w-full mb-4 bg-gradient-to-b from-black to-customBg  border-b border-b-customColor3">
      <ul className="flex w-3/5 justify-between py-5 mx-4">
        <li>
          <NavLink to={"/admin/upload"}>Add Project</NavLink>
        </li>
        <li>
          <NavLink to={"/admin/"}>All Project</NavLink>
        </li>
        <li>
          <NavLink to={"/admin/allCourse"}>All Courses</NavLink>
        </li>
        <li>
          <NavLink to={"/admin/allCertificate"}>All Certificate</NavLink>
        </li>
        <li>
          <NavLink to={"/admin/allMessage"}>All Message</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
