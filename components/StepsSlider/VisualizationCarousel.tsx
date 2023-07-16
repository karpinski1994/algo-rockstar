import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

export interface VisualizationRows {
  name: string;
  color: number[];
  pointer: boolean;
}

interface VisualizationSteps {
  text: string;
  rows: VisualizationRows[];
  stepId: number;
  orientation?: string;
  frame?: string;
}

function VisualizationCarousel({ children, interval = 2000 }: { children: React.ReactNode, interval?: number }) {
  const ref = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = useRef<any>(null);

  useEffect(() => {
    const numberOfItems = ref?.current?.element?.querySelectorAll(
      ".carousel-item"
    ).length;
    setNumberOfItems(numberOfItems);
  }, []);

  const onStartClick = () => {
    setActiveIndex(0);
  };

  const onPrevClick = () => {
    if (numberOfItems) {
      setActiveIndex((i) => (i === 0 ? numberOfItems - 1 : i - 1));
    }
  };

  const onNextClick = () => {
    if (numberOfItems) {
      setActiveIndex((i) => (i === numberOfItems - 1 ? 0 : i + 1));
    }
  };

  const onPlayClick = () => {
    if (isPlaying) {
      clearInterval(intervalRef.current);
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      intervalRef.current = setInterval(() => {
        setActiveIndex((i) => (i === numberOfItems - 1 ? 0 : i + 1));
      }, interval);
    }
  };

  return (
    <div className="w-100 position-relative" style={{ height: "100%" }}>
      <div className="py-3">
        <Button
          size="lg"
          variant="light"
          className="me-1 font-weight-bold btn-outline-danger"
          onClick={onStartClick}
        >
          {"|| <"}
        </Button>
        <Button
          size="lg"
          variant="light"
          className="me-1 font-weight-bold btn-outline-dark"
          onClick={onPrevClick}
        >
          {"<"}
        </Button>
        <Button
          size="lg"
          className="font-weight-bold"
          variant="dark"
          onClick={onNextClick}
        >
          {"Next Step >"}
        </Button>
        <Button
          size="lg"
          className="ms-1 font-weight-bold"
          variant="info"
          onClick={onPlayClick}
        >
          {isPlaying ? "Stop" : "Play"}
        </Button>
      </div>

      <Carousel
        variant="dark"
        activeIndex={activeIndex}
        ref={ref}
        indicators={false}
        interval={null}
        slide={false}
        style={{ height: "100%" }}
      >
        {children}
      </Carousel>
    </div>
  );
}

export default VisualizationCarousel;
