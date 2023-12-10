import { useParams } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

const Home = () => {

  const { roomId } = useParams();

  return (
    <>
      {/** Navbar */}
      <Navbar roomId={roomId} />

      {/** Hero Section */}
      <HeroSection />
    </>
  )
}

export default Home;