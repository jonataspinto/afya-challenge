import { IconProps } from './iconProps';

export const CheckIcon = ({
  ariaLabel,
  height = '60',
  width = '60',
  fill = '#191847',
  ...restProps
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={ariaLabel}
      role="img"
      {...restProps}
    >
      <title>{ariaLabel}</title>
      <circle cx="30" cy="30" r="29" stroke="#F4F3F6" strokeWidth="2" />
      <path
        d="M39.8689 24.14L26.8067 38.2285C26.3687 38.701 25.6305 38.7289 25.158 38.2908C25.1241 38.2594 25.0921 38.2259 25.0622 38.1907L20.1646 32.4273C19.7473 31.9363 19.0111 31.8765 18.5201 32.2938C18.0291 32.711 17.9693 33.4473 18.3865 33.9383L23.2841 39.7017C23.3739 39.8073 23.4699 39.9076 23.5716 40.0018C24.9891 41.3161 27.2036 41.2324 28.5178 39.8149L41.58 25.7264C42.0181 25.2539 41.9902 24.5158 41.5177 24.0777C41.0452 23.6396 40.307 23.6675 39.8689 24.14Z"
        fill={fill}
      />
    </svg>
  );
};
