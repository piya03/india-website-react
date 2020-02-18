import React from 'react';

function Image(props) {
    const {src, alt} = props
    return (
        <div style={{width: "80%", display: 'flex', justifyContent: 'center'}}>
            <img style={{width: "100%"}} src={src} alt={alt} />
        </div>
    )
}

export  default Image