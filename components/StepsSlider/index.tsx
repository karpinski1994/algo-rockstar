import { useEffect, useRef, useState } from 'react';
import { Button, Card, Placeholder } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import NodeBox from '../NodeBox/NodeBox';
import PointerBox from '../PointerBox/PointerBox';
import Step from '../Step';
import ValueBox from '../ValueBox/ValueBox';

function StepsSlider(route) {
    const ref = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [numberOfItems, setNumberOfItems] = useState(0);
    useEffect(() => {
        const numberOfItems = ref.current.element.querySelectorAll('.carousel-item').length;
        setNumberOfItems(numberOfItems)
    }, [])

    useEffect(() => {
        const numberOfItems = ref.current.element.querySelectorAll('.carousel-item').length;
        setNumberOfItems(numberOfItems)
    }, [])

    const onStartClick = () => {
        setActiveIndex(0)
    };
    const onPrevClick = () => {
        activeIndex === 0 ? setActiveIndex(numberOfItems - 1) : setActiveIndex(i => i - 1)
    };
    const onNextClick = () => {
        activeIndex === numberOfItems - 1 ? setActiveIndex(0) : setActiveIndex(i => i + 1)
    };

    
    return (
        <div className="w-100 position-relative">
            <div className='py-3'>
                <Button size="lg" variant="light" className='me-1 font-weight-bold btn-outline-danger' onClick={onStartClick}>{'|| <'}</Button>
                <Button size="lg" variant="light" className='me-1 font-weight-bold btn-outline-dark' onClick={onPrevClick}>{'<'}</Button>
                <Button size="lg font-weight-bold" variant="dark" onClick={onNextClick}>{'Next Step >'}</Button>
            </div>
            <Carousel variant="dark" activeIndex={activeIndex} ref={ref} indicators={false} interval={null} slide={false}>
                {/*TODO:fix hardcoding value below (30). It must be length of steps array */}
                {Array(30).fill().map((_, i) => (
                    <Carousel.Item>
                        <Step route={route} stepIndex={i} />
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default StepsSlider;