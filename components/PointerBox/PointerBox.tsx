import React from 'react'
import Arrow from '../Arrow/Arrow';

type Props = {
    color?: number[]
    pointed?: boolean
    arrow: boolean
    arrowOrientation: string
}
// TODO: Fix colors
function PointerBox({ color = [122, 123, 124], pointed=false, arrow=false, arrowOrientation='right'}: Props) {
    const colorSides = `RGBA(${color[0] - 100},${color[1] - 100},${color[2] - 100},${color[3]})`;
    const colorTop = `RGBA(${color[0] - 30},${color[1] - 30},${color[2] - 30},${color[3]})`;
    return (
        <div 
        className='pointerBox position-relative' style={{zIndex: '99'}}>
            {/* TODO: we have to change coloring of those borders / tops and light to reflect colors or whatever */}
            <svg width="100%" style={{ transform: 'rotate(-30deg)', marginLeft: '-58%'}} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" tabIndex={0}>
                <rect className="buttonSides" x="5.04999" y="51" width="90.62" height="8" fill={colorSides} />
                <rect className="buttonSides" width="57" height="57" rx="8" transform="matrix(0.866025 -0.5 0.866025 0.5 1 59)" fill={colorSides} />
                <g clipPath="url(#clip0_106_11)">
                    <rect className="buttonTop" width="57" height="57" rx="8" transform="matrix(0.866025 -0.5 0.866025 0.5 1 51)" fill={colorTop} />
                    <path className="buttonSides playSides" d="M 60.909 58.762 L 32.221 52.35 L 51.327 38.067 L 60.909 58.762 Z" fill={colorSides}></path>
                    <g opacity={pointed ? '1' : '0'} filter="url(#filter0_d_106_11)">
                        <path d="M 60.909 58.762 L 32.221 52.35 L 51.327 38.067 L 60.909 58.762 Z" fill="white" />
                    </g>
                    <g opacity={pointed ? '0.5' : '0'} filter="url(#filter1_f_106_11)">
                        <path d="M73.0478 36.9032L58.6665 67.8905L19.3761 45.2062L73.0478 36.9032Z" fill="white" />
                    </g>
                </g>
                <path opacity={pointed ? '0.5' : '0'} d="M60.5 58.5L32.5 52.3L30 8L70 6L64 40Z" fill="url(#paint0_linear_106_11)" />
                <defs>
                    <filter id="filter0_d_106_11" x="23.4353" y="34.5" width="48.7846" height="34.9282" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="4" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_11" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_11" result="shape" />
                    </filter>
                    <filter id="filter1_f_106_11" x="3.37613" y="20.9032" width="85.6716" height="62.9873" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="8" result="effect1_foregroundBlur_106_11" />
                    </filter>
                    <linearGradient id="paint0_linear_106_11" x1="47" y1="48" x2="47" y2="8" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <clipPath id="clip0_106_11">
                        <rect width="57" height="57" rx="8" transform="matrix(0.866025 -0.5 0.866025 0.5 1 51)" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            {arrow ? <Arrow arrowOrientation={arrowOrientation}/> : null}
        </div>
    )
}

export default PointerBox