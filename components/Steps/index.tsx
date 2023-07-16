import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Carousel } from "react-bootstrap";
import VisualizationCarousel from "../StepsSlider/VisualizationCarousel";

interface StepProps {
  children: React.ReactNode;
}

interface StepsSliderProps {
  children: React.ReactNode;
}

function Steps({ children }: StepsProps) {

  const carouselItems = React.Children.map(children, (child, index) => (
    <Carousel.Item style={{ height: "100%" }} key={uuidv4()}>
      {child}
    </Carousel.Item>
  ));

  return (
    <div className="w-100 position-relative" style={{ height: "100%" }}>
      <div className="py-3 h-100">
        <VisualizationCarousel >
          {carouselItems}
        </VisualizationCarousel>
      </div>
    </div>
  );
}

const Step = ({ children }: StepProps) => <div>{children}</div>;

export default Steps;
export { Step };