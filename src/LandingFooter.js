import React from 'react';
import { Link } from "react-router-dom";
import SpaceUnicorn from "./images/SpaceUnicorn";

const LandingFooter = () => (
  <footer className="flex -mx-4 leading-normal select-none">
    <SpaceUnicorn className="block flex-none mr-4" />

    <p className="mr-4">Space Unicorn wishes <br/> you a happy day!</p>

    <div className="flex-1" />

    <nav className="mb-8 flex-none">
      <Link to="/sign-up" className="text-inherit no-underline font-bold p-3">
        Get Started
      </Link>

      <Link to="/app/languages" className="text-inherit no-underline font-bold p-3">
        Languages
      </Link>

      <Link to="/app/code-of-conduct" className="text-inherit no-underline font-bold p-3">
        Code of Conduct
      </Link>

      <Link to="/app/thanks" className="text-inherit no-underline font-bold p-3">
        Thanks
      </Link>

      <Link to="/app/privacy" className="text-inherit no-underline font-bold p-3">
        Privacy
      </Link>

      <Link to="/app/terms" className="text-inherit no-underline font-bold p-3">
        Terms
      </Link>
    </nav>
  </footer>
);

export default LandingFooter;