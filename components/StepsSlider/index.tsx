import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import NodeBox from "../NodeBox";
import TreeVizualization from "@/pages/tree-vizualization";

export interface VisualizationRows extends Array<any> {
  name: string;
  color: number[];
  pointer: boolean;
}

interface VisualizationSteps {
  text: string;
  rows: Array<VisualizationRows>;
  stepId: number;
  orientation?: string;
  frame?: string;
}

function StepsSlider({ dataStructure, visualization }: { visualization: any }) {
  const ref = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [numberOfItems, setNumberOfItems] = useState(0);
  useEffect(() => {
    const numberOfItems =
      ref?.current?.element?.querySelectorAll(".carousel-item").length;
    setNumberOfItems(numberOfItems);
  }, [visualization]);

  useEffect(() => {
    const numberOfItems =
      ref?.current?.element?.querySelectorAll(".carousel-item").length;
    setNumberOfItems(numberOfItems);
  }, [visualization]);

  const onStartClick = () => {
    setActiveIndex(0);
  };
  const onPrevClick = () => {
    if (numberOfItems)
      activeIndex === 0
        ? setActiveIndex(numberOfItems - 1)
        : setActiveIndex((i) => i - 1);
  };
  const onNextClick = () => {
    if (numberOfItems)
      activeIndex === numberOfItems - 1
        ? setActiveIndex(0)
        : setActiveIndex((i) => i + 1);
  };

  console.log("visualization: ", visualization);
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
        {dataStructure === "tree"
          ? visualization &&
            Array.isArray(visualization) &&
            visualization.map((el) => {
              console.log("EL: ", el);
              return (
                <Carousel.Item style={{ height: "100%" }} key={uuidv4()}>
                  <div style={{ height: "100%" }}>
                    <TreeVizualization data={el} />
                  </div>
                </Carousel.Item>
              );
            })
          : visualization &&
            Array.isArray(visualization) &&
            visualization.map(
              ({ text, rows, stepId, orientation = "row", frame }) => {
                return (
                  <Carousel.Item style={{ height: "100%" }} key={uuidv4()}>
                    <p className="ww-bold" style={{ minHeight: "120px" }}>
                      {text}
                    </p>
                    {rows.map((row: any, index: number) => {
                      return (
                        <div
                          key={uuidv4()}
                          className={`d-flex flex-${orientation} align-items-center`}
                          style={{
                            maxWidth: "696px",
                            minWidth: "288px",
                            position: "relative",
                          }}
                        >
                          {frame ? (
                            <div
                              className="frame"
                              style={{
                                borderRight: "5px solid black",
                                borderLeft: "5px solid black",
                                borderBottom:
                                  frame === "sides-bottom"
                                    ? "5px solid black"
                                    : "none",
                                borderRadius: "5px",
                                width: "50%",
                                height: "100%",
                                position: "absolute",
                              }}
                            ></div>
                          ) : null}
                          {row.map((r: any, index: number) => {
                            return (
                              <div
                                key={uuidv4()}
                                style={{
                                  width: r.color[3] == 0 ? "10%" : "30%",
                                }}
                              >
                                <NodeBox {...r} />
                              </div>
                            );
                          })}
                        </div>
                      );
                    })}
                  </Carousel.Item>
                );
              }
            )}
      </Carousel>

      {/*TODO:fix hardcoding value below (30). It must be length of steps array */}
      {/* TODO: It can be lavereged to the top and render props / custom hook */}
    </div>
  );
}

export default StepsSlider;
