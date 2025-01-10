import React from "react";


interface Props {
    children: React.ReactNode,
    styles?: React.CSSProperties 
}

export default function FlexCenter({ children, styles }: Props) {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', ...styles}}>
            { children }
        </div>
    )
}