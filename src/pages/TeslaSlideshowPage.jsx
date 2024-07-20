import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { Experience } from "../components/Experience";
import { Overlay } from "../components/Overlay";
import LoadingScreen from "../components/LoadingScreen";
import "../styles/TeslaSlideshowPage.css";

function TeslaSlideShowPage() {
  return (
    <>
      <Leva hidden />
      <LoadingScreen />
      <Overlay />
      <div className="full-screen-canvas">
        <Canvas shadows camera={{ position: [0, 0, 5], fov: 30 }}>
          <color attach="background" args={["#ececec"]} />
          <Experience />
        </Canvas>
      </div>
    </>
  );
}

export default TeslaSlideShowPage;
