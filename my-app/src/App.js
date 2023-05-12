import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Jamie's First Website</h1>

      <p>
        Trying to create other pages
      </p>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="links" element={<Links />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/links">Links</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>This is where my info will go probs</p>
      <h2> Contact Me Here</h2>
        <ul>
          <li>Email</li>
          <li>Phone</li>
          <li>Carrier Pigeon</li>
          </ul>
    </div>
  );
}

function Links() {
  return (
    <div>
      <h2>links to all things here</h2>
      <ul>
          <li>
            <a href="https://www.google.com" target="_blank">Google</a>
          </li>
          <li>link2</li>
          <li>link3</li>
        </ul>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}