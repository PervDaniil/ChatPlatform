import React, { useEffect, useState } from "react";
import { Backdrop, CircularProgress } from "@mui/material";


export default function PreloadBar() {
    const [isLoading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        document.addEventListener('DOMContentLoaded', () => {
            setLoading(false);
        });

        return () => {
            document.removeEventListener('DOMContentLoaded', () => {
                setLoading(false);
            });
        }
    }, []);

    return (
        <Backdrop open={false} sx={{ zIndex: 9999}}>
            <CircularProgress />
        </Backdrop>
    )
}