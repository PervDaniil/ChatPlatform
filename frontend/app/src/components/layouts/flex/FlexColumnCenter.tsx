import React from "react";


interface Props {
    children: React.ReactNode,
    styles?: React.CSSProperties 
}

export default function FlexColumnCenter({ children, styles }: Props) {
    return (
        <div style={{ display: 'flex', width: '100%', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', ...styles}}>
            { children }
        </div>
    )
}