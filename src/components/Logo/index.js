import * as React from 'react'
import { Svg } from './styles'

export const Logo = (props) => {
  return (
    <Svg
      width={313.25}
      height={122.021}
      viewBox='93.375 13.989 313.25 122.021'
      style={{
        background: '0 0'
      }}
      preserveAspectRatio='xMidYMid'
      {...props}
    >
      <defs>
        <linearGradient
          id='prefix__editing-gradow-gradient'
          x1={0}
          x2={1}
          y1={0.5}
          y2={0.5}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#f0f' />
          <stop offset={1} stopColor='#0ff' />
        </linearGradient>
        <filter
          id='prefix__editing-gradow-filter'
          x='-100%'
          y='-100%'
          width='300%'
          height='300%'
        >
          <feFlood floodColor='#fffcd9' result='flood' />
          <feComposite
            operator='in'
            in2='SourceAlpha'
            in='flood'
            result='shadow'
          />
          <feOffset dx={-4} dy={-4} in='SourceGraphic' result='offset-1' />
          <feOffset dx={4} dy={4} in='shadow' result='offset-2' />
          <feMerge>
            <feMergeNode in='offset-2' />
            <feMergeNode in='offset-1' />
          </feMerge>
        </filter>
      </defs>
      <g filter='url(#prefix__editing-gradow-filter)'>
        <path
          d='M24.96-4.8q0-4.48 1.79-13.44h-9.47L13.76 0H.38l8.13-42.24h13.51L18.3-23.36h9.48l3.52-18.88h13.5q-.9 4.74-2.05 10.05l-2.17 10.43Q38.14-9.6 38.14-4.29q0 2.18.71 3.39-3.2 2.18-6.95 2.18-3.74 0-5.34-1.79-1.6-1.79-1.6-4.29zm47.3-6.02q1.6 1.09 1.6 3.49 0 2.4-1.22 3.94-1.22 1.53-3.2 2.56-4.1 2.11-8.51 2.11-4.42 0-7.01-.96T49.6-2.43q-3.39-3.39-3.39-9.6 0-9.67 5.25-15.55 5.63-6.34 15.42-6.34 6.08 0 9.09 2.56 2.24 1.92 2.24 5.06 0 11.26-19.46 11.26-.25 1.66-.25 3.07 0 2.95 1.31 4.07t3.74 1.12q2.43 0 5.03-1.12 2.59-1.12 3.68-2.92zM59.2-17.79q4.54 0 7.17-2.82 2.62-2.69 2.62-6.97 0-1.48-.54-2.28-.55-.8-1.63-.8-1.09 0-2.02.42-.93.42-1.89 1.82-2.37 3.2-3.71 10.63zm41.22-.19q2.3-4.1 2.3-8.26 0-2.75-1.98-2.75-1.54 0-3.14 2.62-1.66 2.63-2.18 6.02L92.1 0 78.85 1.28l6.53-33.92 10.56-1.28-1.16 6.46q3.14-6.46 10.18-6.46 3.71 0 5.73 1.92 2.01 1.92 2.01 5.86 0 3.93-2.59 6.43-2.59 2.49-7.01 2.49-1.92 0-2.68-.76zm27.26 19.26q-14.08 0-14.08-13.25 0-9.41 5.18-15.49 5.51-6.46 15.04-6.46 6.92 0 10.44 3.2 3.52 3.2 3.52 9.92 0 10.24-5.51 16.19-5.37 5.89-14.59 5.89zm1.66-27.84q-.76 1.73-1.37 4.32-.61 2.59-1.38 6.69-.77 4.09-.77 9.15 0 1.66.55 2.75.54 1.09 2.01 1.09 1.48 0 2.4-.7.93-.71 1.64-2.37 1.28-2.95 2.3-8.42 1.02-5.47 1.12-7.84.1-2.37.1-4.13 0-1.76-.52-2.91-.51-1.15-1.95-1.15t-2.4.9q-.96.89-1.73 2.62zm48.13 15.74q1.6 1.09 1.6 3.49 0 2.4-1.21 3.94-1.22 1.53-3.2 2.56-4.1 2.11-8.52 2.11-4.41 0-7-.96-2.6-.96-4.32-2.75-3.4-3.39-3.4-9.6 0-9.67 5.25-15.55 5.63-6.34 15.43-6.34 6.08 0 9.08 2.56 2.24 1.92 2.24 5.06 0 11.26-19.45 11.26-.26 1.66-.26 3.07 0 2.95 1.31 4.07 1.32 1.12 3.75 1.12 2.43 0 5.02-1.12 2.59-1.12 3.68-2.92zm-13.05-6.97q4.54 0 7.16-2.82 2.63-2.69 2.63-6.97 0-1.48-.55-2.28-.54-.8-1.63-.8-1.09 0-2.01.42-.93.42-1.89 1.82-2.37 3.2-3.71 10.63zm40.32-4.67q.89-2.37.89-4.42 0-3.78-3.07-3.78-1.6 0-2.91 1.44t-1.31 3.24q0 1.28 1.02 2.3 1.47 1.41 5.25 3.71 3.77 2.31 5.21 4.19 1.44 1.89 1.44 4.48 0 2.6-1.24 4.96-1.25 2.37-3.49 4.04-4.8 3.58-12.48 3.58-4.16 0-7.36-2.18-3.2-2.11-3.2-4.6 0-2.5 1.82-3.97 1.83-1.47 4.51-1.47 2.69 0 4.36 1.02-.84 2.11-.84 3.52 0 4.22 3.59 4.22 1.53 0 2.56-.96 1.02-.96 1.02-2.62 0-3.26-5.5-6.72-4.48-2.94-5.51-4.1-1.72-2.04-1.72-4.6 0-2.56 1.21-5 1.22-2.43 3.46-4.16 4.67-3.58 12.8-3.58 4.16 0 6.62 1.66 2.47 1.67 2.47 4.48 0 2.82-1.7 4.42t-4.77 1.6q-2.11 0-3.13-.7z'
          fill='url(#prefix__editing-gradow-gradient)'
          transform='translate(142.64 96.752)'
        />
      </g>
      <style />
    </Svg>
  )
}