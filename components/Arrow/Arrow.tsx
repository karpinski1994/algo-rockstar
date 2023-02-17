import css from 'styled-jsx/css'
export default function Arrow(){
    return(
        <div className='arrow'>
        <svg viewBox="0 0 70 70" 
            width="100%" 
            height="150px"
            style={{
                transform:'translate(-50%, -50%)',
                position: 'absolute',
                top: '50%',
                left: '58%',
            }}
            xmlns="http://www.w3.org/2000/svg">
            <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
                style={{transform: 'translate(40%, 40%)'}}/>
        </svg>
        </div>
    )
}

