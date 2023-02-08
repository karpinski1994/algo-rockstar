import { useEffect, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Step from '../Step';

// TODO: Remove any
function StepsSlider({steps} : {steps: any}) {
    const ref = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [numberOfItems, setNumberOfItems] = useState(0);
    useEffect(() => {
        const numberOfItems = ref.current.element.querySelectorAll('.carousel-item').length;
        setNumberOfItems(numberOfItems)
    }, [steps])

    useEffect(() => {
        const numberOfItems = ref.current.element.querySelectorAll('.carousel-item').length;
        console.log("🚀 ~ file: index.tsx:18 ~ useEffect ~ numberOfItems", numberOfItems)
        setNumberOfItems(numberOfItems)
    }, [steps])

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
                <Button size="lg" className='font-weight-bold' variant="dark" onClick={onNextClick}>{'Next Step >'}</Button>
            </div>
            <Carousel variant="dark" activeIndex={activeIndex} ref={ref} indicators={false} interval={null} slide={false}>
                {/*TODO:fix hardcoding value below (30). It must be length of steps array */}
                {/* TODO: It can be lavereged to the top and render props / custom hook */}
                {steps && Array.isArray(steps) && steps.map(({text, nodes}) => (
                    <Carousel.Item key={text}>
                        <Step text={text} nodes={nodes}/>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default StepsSlider;