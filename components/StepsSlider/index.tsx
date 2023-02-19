import { useEffect, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import NodeBox from '../NodeBox/NodeBox';
import Step from '../Step';

// TODO: Remove any
function StepsSlider({ visualization }: { visualization: any }) {
    console.log("🚀 ~ file: index.tsx:8 ~ StepsSlider ~ visualization", visualization)
    const ref = useRef<any>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [numberOfItems, setNumberOfItems] = useState(0);
     useEffect(() => {
         const numberOfItems = ref.current.element.querySelectorAll('.carousel-item').length;
         setNumberOfItems(numberOfItems)
     }, [visualization])

     useEffect(() => {
         const numberOfItems = ref.current.element.querySelectorAll('.carousel-item').length;
         setNumberOfItems(numberOfItems)
     }, [visualization])

    const onStartClick = () => {
        setActiveIndex(0)
    };
    const onPrevClick = () => {
        if (numberOfItems)
            activeIndex === 0 ? setActiveIndex(numberOfItems - 1) : setActiveIndex(i => i - 1)
    };
    const onNextClick = () => {
        if (numberOfItems)
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
                
                {visualization && Array.isArray(visualization) && visualization.map(({ text, rows, stepId, orientation }) => {
                    return (
                        <Carousel.Item key={stepId+text}>
                            <p className='ww-bold'>
                                {text}
                            </p>
                            {rows.map((row,index) => {
                                return (
                                    <div key={JSON.stringify(row)+index} className={`d-flex mb-5 flex-${orientation}`}>
                                        {row.map((r, index) => {
                                            return <div key={JSON.stringify(r)+index}>
                                                <NodeBox {...r} />
                                            </div>
                                        })}
                                    </div>
                                )
                            })}
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
    );
}

export default StepsSlider;