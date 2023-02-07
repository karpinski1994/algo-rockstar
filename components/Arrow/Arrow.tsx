import css from 'styled-jsx/css'
export default function Arrow(){
    return(
        <div>
        <svg viewBox="0 0 20 20" width="100px" height="50px" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
            <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/>
        </svg>
        <style jsx>{arrowStyle}</style>
        </div>
    )
}

const arrowStyle = css`
svg{
    position: relative;
    top: -123px;
    left: 217px;
}
`