import styles from './Arrow.module.css'

export type ArrowOrientation = "top" | "right" | "bottom" | "left";

const getArrowPosition = (arrowOrientation: ArrowOrientation = 'right') => {
    let rotation = '0';
    let viewBox = "-7 -3 70 70";
    switch (arrowOrientation) {
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
    return { rotation, viewBox }
}

export default function Arrow({ arrowOrientation }: { arrowOrientation: ArrowOrientation }) {
    const { rotation, viewBox } = getArrowPosition(arrowOrientation);
    return (
        <>
            <svg
                className={styles.svg}
                style={{ transform: `translate(-50%, -50%) rotate(${rotation}deg)` }}
                viewBox={viewBox}
                width="150%"
                xmlns="http://www.w3.org/2000/svg">
                <path className={styles.path} d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
            </svg>
        </>
    )
}
