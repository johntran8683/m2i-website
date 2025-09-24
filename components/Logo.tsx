import React from 'react'

type LogoProps = {
  size?: number
  className?: string
}

export default function Logo({ size = 32, className = '' }: LogoProps) {
  const rounded = 12
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      {/* Background */}
      <rect x="2" y="2" width="60" height="60" rx={rounded} fill="currentColor" />
      {/* Brand text only */}
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
        fontWeight={800}
        fontSize={26}
        fill="#ffffff"
      >
        M2I
      </text>
    </svg>
  )
}


