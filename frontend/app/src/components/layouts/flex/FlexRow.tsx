import React from "react";


interface Props {
    children: React.ReactNode,
    styles?: React.CSSProperties 
}

export default function FlexRow({ children, styles }: Props) {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', alignItems: 'center', ...styles}}>
            { children }
        </div>
    )
}