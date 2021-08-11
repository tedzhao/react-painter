import React from 'react'
import { CanvasElementType } from '../util/constans'

interface ToolboxProps{
    onItemSelected: (itemType: CanvasElementType) => void
}

interface ToolboxItemProps{
    width: number,
    height:  number
}

export const ToolboxLineItem = (props: ToolboxItemProps) => {
    return <svg x="0" y="0" width={props.width} height={props.height}>
        <line x1="0" x2={props.width} y1={props.height/2} y2={props.height/2} />
    </svg>
}

export const ToolboxRectItem = (props: ToolboxItemProps) => {
    return <svg x="0" y="0" width={props.width} height={props.height}>
        <rect x="0" width={props.width} y="0" height={props.height} />
    </svg>
}

export const ToolboxEllipseItem = (props: ToolboxItemProps) => {
    return <svg x="0" y="0" width={props.width} height={props.height}>
        <ellipse cx={props.width/2} rx={props.width/2} cy={props.height/2} ry={props.height/2} />
    </svg>
}

const DefaultToolboxItemWidth = 32
const DefaultToolboxItemHeight = 32

export const Toolbox = (props: ToolboxProps) => {
    return <div className="toolbox">
        <p>Toolbox</p>
        <div onClick={ () => props.onItemSelected(CanvasElementType.Line) }>
            <ToolboxLineItem width={DefaultToolboxItemWidth} height={DefaultToolboxItemHeight}/>
        </div>
        <div onClick={ () => props.onItemSelected(CanvasElementType.Rect) }>
            <ToolboxRectItem width={DefaultToolboxItemWidth} height={DefaultToolboxItemHeight}/>
        </div>
        <div onClick={ () => props.onItemSelected(CanvasElementType.Ellipse) }>
            <ToolboxEllipseItem width={DefaultToolboxItemWidth} height={DefaultToolboxItemHeight}/>
        </div>
    </div>
}