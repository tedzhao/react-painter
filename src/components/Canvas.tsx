import React from 'react'
import { useState, useEffect } from "react";
import { Rect, CanvasElementType } from '../util/constans'

export interface CanvasElementProps{
    Bounds : Rect
    Type: CanvasElementType
}

export const CanvasElement = (props: CanvasElementProps) => {
    const bounds = props.Bounds
    const renderElement = () => {
        switch(props.Type){
            case CanvasElementType.Line:
                return <line x1={bounds.x} x2={bounds.x + bounds.width} y1={bounds.y + bounds.height/2} y2={bounds.y + bounds.height/2} />
            case CanvasElementType.Rect:
                return <rect x={bounds.x} width={bounds.width} y={bounds.y} height={bounds.height} />
            case CanvasElementType.Ellipse:
                return <ellipse cx={bounds.x + bounds.width/2} rx={bounds.width/2} cy={bounds.y + bounds.height/2} ry={bounds.height/2} />
            default:
                return <text>Not support</text>
        }
    }

    return renderElement()
}

export interface CanvasProps{
    Elements: CanvasElementProps[]
}

export const Canvas = (props: CanvasProps) => {
    const size = useCanvasSize();

    return <div className="canvas">
        <svg width={size.width} height={size.height}>
            {props.Elements.map((elementData, index) => {
                return <CanvasElement key={index} Bounds={elementData.Bounds} Type={elementData.Type} />
            })}
         </svg>
    </div>
}

interface CanvasSize {
    width: number
    height: number
  }
  

function useCanvasSize() : CanvasSize {
    const [canvasSize, setWindowSize] = useState<CanvasSize>({
      width: 0,
      height: 0,
    });

    useEffect(() => {
      const handleResize = () => {
        const canvasDom = document.getElementsByClassName('canvas')[0]
        const rect = canvasDom.getBoundingClientRect()
        setWindowSize({
          width: rect.width - 40,
          height: rect.height - 40
        });
      }

      window.addEventListener("resize", handleResize)
      
      handleResize()
      
      return () => window.removeEventListener("resize", handleResize);
    }, []); 

    return canvasSize;
  }