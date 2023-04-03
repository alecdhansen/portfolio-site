import { black, yellowBulb } from "../Themes";

const LightbulbFilled = (colorTheme?: any) => {
  return (
    <svg
      width="50px"
      height="50px"
      viewBox="-1.2 -1.2 26.40 27.40"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="0.00024000000000000003"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0">
        <path
          transform="translate(-1.2, -1.2), scale(1.65)"
          fill="url(#grad0)"
          d="M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z"
          strokeWidth="0"
        />
      </g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        <path
          fill={colorTheme.colorTheme === "light" ? yellowBulb : black}
          d="M15,16.372a7.5,7.5,0,1,0-6,0V18h6ZM11.221,6.087a3.5,3.5,0,0,0-2.7,3.023,1,1,0,0,1-.992.89,1.065,1.065,0,0,1-.112-.006,1,1,0,0,1-.884-1.1,5.5,5.5,0,0,1,4.246-4.754,1,1,0,0,1,.442,1.951ZM9,20h6v1a1,1,0,0,1-1,1H10a1,1,0,0,1-1-1Z"
        ></path>
      </g>
    </svg>
  );
};
export default LightbulbFilled;
