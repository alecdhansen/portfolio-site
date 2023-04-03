import { Props } from "../../utils/types";

export const TopCornerBorder: React.FC<Props> = ({ c1, c2 }) => {
  return (
    <svg
      width="300"
      height="300"
      data-name="corner-top-left"
      xmlns="http://www.w3.org/2000/svg"
      style={{ pointerEvents: "none" }}
      data-inlinesvg=".inlineSvgFile-1"
    >
      <defs>
        <linearGradient id="grad0" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0" stopColor={c1} />
          <stop offset=".5" stopColor={c2} />
          <stop offset="1" stopColor={c1} />
        </linearGradient>
      </defs>
      <path
        fill="url(#grad0"
        d="M8 0h292l-20 20H25a5 5 0 0 0-5 5v255L0 300V8a8 8 0 0 1 8-8Z"
      ></path>
    </svg>
  );
};

export const BottomCornerBorder = () => {
  return (
    <svg
      width="300"
      height="300"
      data-name="corner-bottom-right"
      xmlns="http://www.w3.org/2000/svg"
      style={{ pointerEvents: "none" }}
      data-inlinesvg=".inlineSvgFile-7"
    >
      <path
        fill="url(#grad0)"
        d="M292 300H0l20-20h255a5 5 0 0 0 5-5V20l20-20v292a8 8 0 0 1-8 8Z"
      ></path>
    </svg>
  );
};
