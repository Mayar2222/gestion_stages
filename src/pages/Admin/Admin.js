import React from "react";
import { Outlet, Link } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      {/* ======= Sidebar ======= */}
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <Link className="nav-link " to={"/admin/"}>
              <i className="bi bi-grid" />
              <span>Utilisateurs</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to={"/admin/entrprise"}>
              <i className="bi bi-grid" />
              <span>Entreprises</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to={"/admin/formations"}>
              <i className="bi bi-grid" />
              <span>Formations</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to={"/admin/offres"}>
              <i className="bi bi-grid" />
              <span>Stages</span>
            </Link>
          </li>
        </ul>
      </aside>
      {/* End Sidebar*/}
      <main
        id="main"
        className="main"
        style={{
          display: "flex",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Outlet />
      </main>
      {/* End #main */}
    </div>
  );
};

export default Admin;
