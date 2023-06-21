import { IconProps } from "./iconProps";

export const ChevronLeft = ({
  ariaLabel,
  height = "13",
  width = "8",
  fill = "#151516",
  ...restProps
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 8 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={ariaLabel}
      role="image"
      {...restProps}
    >
      <title>{ariaLabel}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.35809 12.7353L0.194768 6.94124C-0.0649227 6.69734 -0.0649227 6.30329 0.194768 6.05876L6.35809 0.26465C6.73298 -0.0882167 7.34292 -0.0882167 7.71847 0.26465C8.09336 0.617517 8.09336 1.19021 7.71847 1.54308L2.44609 6.50032L7.71847 11.4563C8.09336 11.8098 8.09336 12.3825 7.71847 12.7353C7.34292 13.0882 6.73298 13.0882 6.35809 12.7353Z"
        fill={fill}
      />
    </svg>
  );
};
