import React from 'react'
interface ToolboxProps{
    onItemSelected: (itemType: string) => void
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

const LineItem = "Line"
const RectItem = "Rect"
const EllipseItem = "Ellipse" 

export const Toolbox = (props: ToolboxProps) => {
    return <div className="toolbox">
        <p>Toolbox</p>
        <div onClick={ () => props.onItemSelected(LineItem) }>
            <ToolboxLineItem width={DefaultToolboxItemWidth} height={DefaultToolboxItemHeight}/>
        </div>
        <div onClick={ () => props.onItemSelected(RectItem) }>
            <ToolboxRectItem width={DefaultToolboxItemWidth} height={DefaultToolboxItemHeight}/>
        </div>
        <div onClick={ () => props.onItemSelected(EllipseItem) }>
            <ToolboxEllipseItem width={DefaultToolboxItemWidth} height={DefaultToolboxItemHeight}/>
        </div>
    </div>
}