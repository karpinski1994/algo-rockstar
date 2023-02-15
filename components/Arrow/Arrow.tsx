import css from 'styled-jsx/css'
export default function Arrow({arrow}){
    return(
        <div>
        <svg viewBox="0 0 70 70" 
            width="100%" 
            height="100%"
            style={{
                visibility: arrow ? 'visible' : 'hidden',
                left: 0,
                top: 0,
                transform:'translate(50%, -60%)',
            }}
            xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
            <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/>
        </svg>
        </div>
    )
}

