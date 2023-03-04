export default function Arrow({arrowOrientation='right'}){
    let rotation = '0';
    let viewBox = "-7 -3 70 70";
    switch (arrowOrientation){
        case 'top':
            rotation = '-90';
            viewBox = "-30 10 70 70";
            break;
        case 'right':
            rotation = '0';
            viewBox = "-7 -3 70 70";
            break;
        case 'bottom':
            rotation = '90';
            viewBox = "-33 -27 70 70";
            break;    
        case 'left':
            rotation = '180';
            viewBox = "-7 -3 70 70";
            break;
        default:
            rotation = '0';
            viewBox = "-7 -3 70 70";
            break;
    }
    return(
        <div className='arrow'>
        <svg viewBox={viewBox} width="150%" 
            style={{
                
            }}
            xmlns="http://www.w3.org/2000/svg">
            <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
                style={{transform: 'translate(19%, 30%)'}}/>
        </svg>
        <style jsx>{`
            svg {
                transform: translate(-50%, -50%) rotate(${rotation}deg);
                position: absolute;
                top: 50%;
                left: 58%;
                z-index: -1;
            }
        `}</style>
        </div>
    )
}
