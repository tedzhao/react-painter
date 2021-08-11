import React from 'react'

import { Toolbox } from './Toolbox'
import { Canvas, CanvasElementProps } from './Canvas'

import { Rect, CanvasElementType } from '../util/constans'

import "../style/main.css"

export const App = () => {
    const [elements, setElements] = React.useState<CanvasElementProps[]>([
        {
            Bounds: new Rect(100, 100, 80, 80),
            Type: CanvasElementType.Line
        },
        {
            Bounds: new Rect(200, 200, 80, 80),
            Type: CanvasElementType.Ellipse
        }
    ])

    const onToolboxItemSelected = (itemType : CanvasElementType) => {
        const x = Math.floor(Math.random() * 800)
        const y = Math.floor(Math.random() * 600)

        const newElement: CanvasElementProps = {
            Type: itemType,
            Bounds: new Rect(x, y, 50, 50)
        }

        setElements([...elements, newElement])
    }

    return <>
        <Toolbox onItemSelected={onToolboxItemSelected} />
        <Canvas Elements={elements}/>
    </>
}