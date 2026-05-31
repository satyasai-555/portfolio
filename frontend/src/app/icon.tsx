import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '6px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline' }}>
          <span
            style={{
              color: '#e8e8e8',
              fontSize: '15px',
              fontWeight: 800,
              fontFamily: 'Arial Black, Arial, sans-serif',
              letterSpacing: '-0.5px',
              lineHeight: 1,
            }}
          >
            SS
          </span>
          <span
            style={{
              color: '#3b82f6',
              fontSize: '17px',
              fontWeight: 800,
              fontFamily: 'Arial Black, Arial, sans-serif',
              lineHeight: 1,
            }}
          >
            .
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
