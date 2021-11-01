import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Icon: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <g transform="scale(0.3161845848614251)">
        <g transform="translate(-35.25225340640391, -31.837655985203632) scale(1.5966733117731922)" fill={textColor}>
          <path d="M82.55 71q0-.2-.15-.4-.35-.8-.5-.85L55.85 24.6q-1.7-3-2.15-3.5-.15-.5-.9-1-.45-.2-.95-.15-.75.15-1.2.75l-8.9 15.75-17.6 30.15q-1.75 2.75-2 4.25l-.05.4v.05q-.15 1 .75 1.45l.8.1 42.05-.3 16.1-.35.5-.15.1-.2q.15-.15.15-.85M45 36.95l7.1-12.45 26.15 44.8H64.1L52.8 49.6q-6-9.95-7.35-12.05-.2-.35-.45-.6m-1.8 2.95l5.9 9.3 11.35 20.05H46.1l-8.95-15.8q-.7-1.35-.95-1.5l7-12.05M26.5 69.3l8.3-13.7 8 13.4-14.7.3h-1.6z" />
        </g>
      </g>
    </Svg>
  );
};

export default Icon;
