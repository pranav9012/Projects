// import extension from '@theatre/r3f/dist/extension';
// import studio from '@theatre/studio';
import { useProgress } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect } from "react";
import CustomLoader from "./CustomLoader";
import SceneController from './SceneController';
// if (import.meta.env.DEV) {
//     studio.initialize()
//     studio.extend(extension)
// }${(currentStage == 0) ? ((isRotating) ? "cursor-grabbing" : "cursor-grab") : ""}

function Home({isRotating, currentStage, setIsRotating, transitioning,
            setTransitioning, changeColor, demoSheet, show, setShow}){
    const { active, progress } = useProgress();
    useEffect(() => {
        // console.log(active, progress, errors, item, loaded, total);
        let t;
        if(active !== show) t = setTimeout(() => setShow(active), 1000)
        
        return () => clearTimeout(t)
    }, [active, progress]);


    return(
            <section className="w-full h-screen relative overflow-auto">
                { show ? <CustomLoader /> : null}
                <Canvas
                    gl={{preserveDrawingBuffer: true}}
                    className={`w-full h-screen bg-transparent`}
                camera={{
                    type: 'perspective',
                    fov: 75,
                    near: 0.1,
                    far: 1000,
                    position: [0, 0, 10],
                        }}
                >
                    <Suspense fallback={null}>
                    <SceneController
                        isRotating={isRotating}
                        currentStage={currentStage}
                        setIsRotating={setIsRotating}
                        transitioning={transitioning}
                        setTransitioning={setTransitioning}
                        changeColor={changeColor}
                        demoSheet={demoSheet}
                    />
                    </Suspense>
                </Canvas>
            </section>
    )

}

export default Home;