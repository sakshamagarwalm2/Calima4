import { SVGProps } from 'react';

export function CalimaLogo({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 40"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <text
        x="10"
        y="30"
        fontFamily="Arial"
        fontSize="24"
        fontWeight="bold"
        fill="currentColor"
      >
        CALIMA
      </text>
    </svg>
  );
} 