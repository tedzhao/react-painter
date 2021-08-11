import React from 'react'

interface HelloProps{
    name: string
}

const Hello = (props: HelloProps) => {
    return <h1>Hello {props.name}</h1>
}

export default Hello