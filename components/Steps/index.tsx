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
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    // Perform any necessary actions when the active step changes
    // For example, update the UI or trigger animations
    console.log("Active Step:", activeStep);
  }, [activeStep]);

  const carouselItems = React.Children.map(children, (child, index) => (
    <Carousel.Item style={{ height: "100%" }} key={uuidv4()}>
      {child}
    </Carousel.Item>
  ));

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="w-100 position-relative" style={{ height: "100%" }}>
      <div className="py-3 h-100">
        <VisualizationCarousel activeIndex={activeStep}>
          {carouselItems}
        </VisualizationCarousel>
      </div>
    </div>
  );
}

const Step = ({ children }: StepProps) => <div>{children}</div>;

export default Steps;
export { Step };