import React, {useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload} from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import styled from "styled-components";


const StyledCanvasWrapper = styled.div`
    width: 150%;
    height: 150%;
    position: absolute;
    inset: 0;
`;


const Stars = (props) => {
    const ref = useRef();
    const [sphere] = useState(() =>
        random.inSphere(new Float32Array(5000), { radius: 6.5 }) // Larger radius
    );

    useFrame((state, delta) => {
        const t = state.clock.elapsedTime;
        ref.current.rotation.x = Math.sin(t / 2) * Math.PI / 4; // Dynamic rotation
        ref.current.rotation.y = Math.cos(t / 2) * Math.PI / 4;
        ref.current.position.x = Math.sin(t) * 1.5; // Horizontal orbit
        ref.current.position.z = Math.cos(t) * 1.5; // Depth orbit
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points
                ref={ref}
                positions={sphere}
                stride={3}
                frustumCulled
                {...props}
            >
                <PointMaterial
                    transparent
                    color="#f272c8"
                    size={0.01}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};


const StyledStarCanvas = () => {
    return (
    <StyledCanvasWrapper>
        <Canvas cammera={{position: [0,0,1]}}>
            <Suspense fallback={null}>
                <Stars/>
            </Suspense>
            <Preload all/>
        </Canvas>
    </StyledCanvasWrapper>
    );
};


export default StyledStarCanvas;