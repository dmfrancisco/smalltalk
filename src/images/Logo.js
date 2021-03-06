import React from "react";

const Logo = props => {
  const { animated, className, width, height, ...otherProps } = props;
  const wrapperClassName = `Logo ${className || ""}`;
  const svgClassName = `Logo-chars ${animated ? "Logo-chars--animated" : ""}`;

  return (
    <div className={wrapperClassName} style={{ width, height }} {...otherProps}>
      <div className={svgClassName + " Logo-chars--0"}>
        <svg viewBox="0 0 374 45">
          <g fillRule="evenodd">
            <path d="M27.2 1.3h8.4V39h-8.4l-18-23.7V39H.8V1.3h7.9l18.5 24.3V1.3zM92 23l6.7-21.7h8.8l6.7 21.7 7.5-21.7h9l-13 37.7h-6.4l-8.2-26.2L94.9 39h-6.3L75.4 1.3h9.2L92 23zm80.5-21.7h8.4V39h-8.4V1.3zm83.2 7.2V39h-8.4V8.5h-10.7V1.3h29.8v7.2h-10.7zM310.1 39V1.3h8.4v30.2h16V39h-24.4z" />
          </g>
        </svg>
      </div>
      <div className={svgClassName + " Logo-chars--1"}>
        <svg viewBox="0 0 374 45">
          <g fillRule="evenodd">
            <path d="M72.1 6.3v7.5H53.4v7.7h16.9v7.2h-17v7.8h19.4V44H45V6.3h27.2zM151.8 44h-16.5V6.3H150c2.5 0 4.7.3 6.6.9 1.8.6 3.2 1.4 4.2 2.5 1.7 1.9 2.5 4.1 2.5 6.5 0 3-1 5.2-2.9 6.6a10.3 10.3 0 0 1-2.7 1.6c2.4.5 4.2 1.6 5.6 3.2 1.4 1.6 2.1 3.5 2.1 6 0 2.6-.9 4.9-2.7 6.9-2 2.3-5.7 3.5-10.9 3.5zm-8.1-22.5h4c2.3 0 4-.2 5.2-.7 1.1-.5 1.7-1.6 1.7-3.3 0-1.7-.5-2.8-1.6-3.3-1-.5-2.8-.8-5.3-.8h-4v8.1zm0 15.4h5.8c2.4 0 4.2-.3 5.4-1 1.2-.5 1.8-1.7 1.8-3.4 0-1.8-.6-3-2-3.5-1.2-.5-3.2-.8-6-.8h-5v8.7zm73.7-30.6v7.5h-18.8v7.7h17v7.2h-17v7.8H218V44h-27.8V6.3h27.2zM296.7 44l-3.5-8.2h-15.8l-3.5 8.2h-9l16.3-37.7h8.2L305.7 44h-9zm-11.4-26.5l-4.7 11h9.4l-4.7-11zm55.4-11.2h8.5v15.5l14.2-15.5h10.4l-15 16.6a2400.1 2400.1 0 0 1 15 21.1H364l-11-14.9-3.8 4.2V44h-8.5V6.3z" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Logo;
