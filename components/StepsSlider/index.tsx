import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button, Carousel } from "react-bootstrap";
import VisualizationCarousel from "./VisualizationCarousel";
import NodeBox from "../NodeBox";
import TreeVisualization from "@/pages/tree-vizualization";
import GraphVisualization from "@/pages/graph-visualization";

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

function StepsSlider({ dataStructure, visualization, children }: { visualization: any }) {
  console.log(
    "🚀 ~ file: index.tsx:24 ~ StepsSlider ~ visualization:",
    visualization
  );
  const renderVisualizationItem = ({
    text,
    rows,
    stepId,
    orientation = "row",
    frame,
  }: VisualizationSteps) => (
    <Carousel.Item style={{ height: "100%" }} key={uuidv4()}>
      <p className="ww-bold" style={{ minHeight: "120px" }}>
        {text}
      </p>
      {rows &&
        rows.map((row, index) => (
          <div
            key={uuidv4()}
            className={`d-flex flex-${orientation} align-items-center`}
            style={{
              maxWidth: "696px",
              minWidth: "288px",
              position: "relative",
            }}
          >
            {frame && (
              <div
                className="frame"
                style={{
                  borderRight: "5px solid black",
                  borderLeft: "5px solid black",
                  borderBottom:
                    frame === "sides-bottom" ? "5px solid black" : "none",
                  borderRadius: "5px",
                  width: "50%",
                  height: "100%",
                  position: "absolute",
                }}
              />
            )}
            {row.map((r) => (
              <div
                key={uuidv4()}
                style={{
                  width: r.color[3] === 0 ? "10%" : "30%",
                }}
              >
                <NodeBox {...r} />
              </div>
            ))}
          </div>
        ))}
    </Carousel.Item>
  );

  let carouselItems =
    Array.isArray(visualization) &&
    visualization.map((step: VisualizationSteps) =>
      renderVisualizationItem(step)
    );

  if (dataStructure === "tree") {
    carouselItems =
      Array.isArray(visualization) &&
      visualization.map((el) => (
        <Carousel.Item style={{ height: "100%" }} key={uuidv4()}>
          <div style={{ height: "100%" }}>
            <TreeVisualization data={el} />
          </div>
        </Carousel.Item>
      ));
  }

  if (dataStructure === 'graph') {
    carouselItems = Array.isArray(visualization) &&
      visualization.map((el) => (
        <Carousel.Item style={{ height: "100%" }} key={uuidv4()}>
          <div
            style={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <GraphVisualization data={el} />
          </div>
        </Carousel.Item>
      ))
  }

  return (
    <div className="w-100 position-relative" style={{ height: "100%" }}>
      <div className="py-3 h-100">
        <VisualizationCarousel>
          {children}
          {/* {carouselItems} */}
        </VisualizationCarousel>
      </div>
    </div>
  );
}

export default StepsSlider;

export const Step = ({ children }: { children: React.ReactNode }) => {
  <Carousel.Item style={{ height: "100%" }} key={uuidv4()}>
    <div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  </Carousel.Item>
}
