import { useState } from "react";

export default function MovingDot() {

    const [position, setPosition] = useState({
        x: 0,
        y: 0
    });

    function move(e) {
        setPosition({
            x: e.clientX,
            y: e.clientY
        });
    }

    const circle= {
        "width": 20,
        "height": 20,
        "background": "white",
        "borderRadius": "50%",
        "transform": `translate(${position.x}px, ${position.y}px)`,
        "position": "absolute",
        "top": -10,
        "left": -10
    }

    return (
        <div className="container"
        style={{
            background: "hsla(0, 2%, 59%, 1)",
            width: '800px',
            height: '400px',
        }}
        onPointerMove={move}>
            <div className="circle" style={circle}></div>
        </div>
    )
}