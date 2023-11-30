import { IconProps } from './iconProps';

export const Sad = ({
  ariaLabel,
  height = '90',
  width = '90',
  ...restProps
}: IconProps) => (
  <svg
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-label={ariaLabel}
    {...restProps}
  >
    <title>{ariaLabel}</title>
    <path
      stroke="#f5850b"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="5"
      d="M45 87c23.196 0 42-18.804 42-42S68.196 3 45 3 3 21.804 3 45s18.804 42 42 42Z"
    />
    <path
      stroke="#f5850b"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="5"
      d="M61.8 61.8s-6.3-8.4-16.8-8.4-16.8 8.4-16.8 8.4"
    />
    <path
      stroke="#f5850b"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
      d="M32.4 32.4h.042M57.6 32.4h.042"
    />
  </svg>
);
