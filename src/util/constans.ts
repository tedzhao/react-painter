export class Point{
    x: number = 0
    y: number = 0

    constructor(px: number, py: number){
        this.x = px
        this.y = py
    }
}

export class Rect{
    x: number = 0
    y: number = 0
    
    width: number = 0
    height: number = 0

    getCenter() : Point 
    {
        return new Point(this.x + this.width / 2, this.y + this.height / 2)
    }

    constructor(px: number, py: number, w: number, h: number){
        this.x = px
        this.y = py

        this.width = w
        this.height = h
    }
} 

export enum CanvasElementType{
    Line = 0,
    Rect = 1,
    Ellipse = 2
}