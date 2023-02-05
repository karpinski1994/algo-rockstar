import { useEffect, useRef, useState } from 'react';
import { Button, Card, Placeholder } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import NodeBox from '../NodeBox/NodeBox';
import PointerBox from '../PointerBox/PointerBox';
import ValueBox from '../ValueBox/ValueBox';

function StepsSlider() {
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
                <Carousel.Item>
                    <div className="d-flex">
                        <NodeBox name="swinia" color={[122, 144, 155, 1]} />
                        <NodeBox name="krowa" color={[122, 144, 155, 1]} />
                        <NodeBox name="kura" color={[122, 144, 155, 1]} />
                    </div>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Item>
                <Carousel.Item>
                    <PointerBox color={[122, 144, 155, 1]} />
                    {/* <img className="d-block w-100" src='http://placekitten.com/g/400/200' /> */}
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Item>
                <Carousel.Item>
                    <ValueBox color={[122, 144, 155, 1]} />
                    {/* <img className="d-block w-100" src='http://placekitten.com/g/400/200' /> */}
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Item>

            </Carousel>
        </div>
    );
}

export default StepsSlider;