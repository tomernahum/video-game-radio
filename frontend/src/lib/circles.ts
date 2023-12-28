



function getPositionsForCircle(n:number, centerX:number, centerY:number, radius:number){
    // let centerX = 50;
    // let centerY = 50;
    // let radius = 50;
    
    // divide into n angles
    let angleSize = 2*Math.PI / n; // 6 o-clock

    //calculate positions
    let startingAngle = 2.5*Math.PI
    let positions = [];
    for(let i = 0; i < n; i++){
        positions.push([
            centerX + radius*Math.cos(startingAngle + i*angleSize), 
            centerY + radius*Math.sin(startingAngle + i*angleSize)
        ])
    }


    return positions

}

export function getPositionsAndSizeForRadioCircleWithTouchingIcons(n:number): [number[][], number] {
    //chatgpt helped me figure this out
    let outerCircleRadius = 50;
    const iconRadius = outerCircleRadius / 
                        (1+ (1/(Math.sin(Math.PI / n))));
    const innerCircleRadius = 50 - iconRadius;


    let positions = getPositionsForCircle(n, 50, 50, innerCircleRadius);
    
    
    //offset to account for image size and position being at top left corner
    positions = positions.map(([x, y]) => [x-(iconRadius), y-(iconRadius)]);

    console.log(positions)

    const size = iconRadius*2 -0.2;
    return [positions, size]
}