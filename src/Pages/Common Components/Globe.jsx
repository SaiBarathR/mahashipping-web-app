import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export default function Globe() {
    const canvasRef = useRef();

    useEffect(() => {
        let phi = 0;

        const globe = createGlobe(canvasRef.current, {
            baseColor: [0.3, 0.3, 0.3],
            markerColor: [0.1, 0.8, 1],
            devicePixelRatio: 1,
            width: 2200,
            height: 950,
            glowColor: [1, 1, 1],
            diffuse: 3,
            mapBrightness: 2,
            phi: 4.12,
            theta: 0,
            dark: 1,
            scale: 1,
            mapSamples: 20000,
            markers: [
                { location: [37.7595, -122.4367], size: 0.03 },
                { location: [40.7128, -74.006], size: 0.1 }
            ],
            onRender: (state) => {
                state.phi = phi;
                phi += 0.01;
            }

        });

        return () => {
            globe.destroy();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                background: "rgba(0, 255, 255, 0)",
                top: "17%",
                zIndex: "9999",
                height: "1100px",
                position: "absolute",
                alignContent: "center",
                display: "flex",
            }}
        />
    );
}
