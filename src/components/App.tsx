import React from 'react'

import { Toolbox } from './Toolbox'
import { Canvas } from './Canvas'

import "../style/main.css"

const onToolboxItemSelected = (itemType : string) => {
    console.log(`on ${itemType} selected`)
}

export const App = () => {
    return <>
            <Toolbox onItemSelected={onToolboxItemSelected} />
            <Canvas />
    </>
}