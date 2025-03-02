import React from 'react'
import logo from '../images/juanifynew.png'

export default function Menu() {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <a href="index3.html" className="brand-link">
    <img src= {logo} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    <span className="brand-text font-weight-light">Juanify</span>
  </a>
  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user panel (optional) */}
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
      </div>
      <div className="info">
        <a href="#" className="d-block">Alexander Pierce</a>
      </div>
    </div>
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        <li className="nav-item has-treeview">
            <a href="/" className="nav-link">
              <i className="nav-icon fas fa-tachometer-alt" />
              <p>
                Dashboard
              </p>
            </a>
        </li>
        <li className="nav-item has-treeview">
          <a href="/forms" className="nav-link">
            <i className="nav-icon fas fa-edit" />
            <p>
              Add User
            </p>
          </a>
        </li>
        <li className="nav-item has-treeview">
          <a href="/newproduct" className="nav-link">
            <i className="nav-icon far fa-plus-square" />
            <p>
              Add New Product
            </p>
          </a>
        </li>
      </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>

    )
}
