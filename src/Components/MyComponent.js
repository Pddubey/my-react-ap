import React, { useRef } from 'react';

function MyComponent() {
    const h1Ref = useRef(null);

    const handleClick = () => {
        if (h1Ref.current) {
            h1Ref.current.style.color = 'blue';
           
            h1Ref.current.textContent = 'H1 Clicked!';
        }
    };

    return (
        <h1 ref={h1Ref} onDoubleClick={handleClick}>
            Clickable H1
        </h1>
    );
}

export default MyComponent;