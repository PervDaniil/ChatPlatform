import React from "react";
import FlexColumnCenter from "./layouts/flex/FlexColumnCenter.tsx";


export default function Main({ children }: { children: React.ReactNode }) {
    return (
        <FlexColumnCenter styles={{ height: '100vh'}}>
            { children }
        </FlexColumnCenter>
    )
}