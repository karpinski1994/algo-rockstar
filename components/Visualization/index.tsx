import React from "react";
import StepsSlider from "../StepsSlider";

interface VisualizationRows {
  name: string;
  color: number[];
  pointer: boolean;
}

interface VisualizationSteps {
  text: string;
  rows: Array<VisualizationRows>;
  stepId: number;
  orientation?: string;
}

export const Visualization = ({
  dataStructure,
  visualization,
}: {
  visualization: Array<VisualizationSteps>;
}) => {
  return <>{visualization && <StepsSlider dataStructure={dataStructure} visualization={visualization} />}</>;
};
