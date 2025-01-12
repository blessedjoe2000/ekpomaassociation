import BriefAbout from "@/components/BriefAbout";
import Carousal from "@/components/Carousal";
import PhotoSlider from "@/components/PhotoSlider";

export default function Home() {
  return (
    <div>
      <Carousal />
      <BriefAbout />
      <PhotoSlider />
    </div>
  );
}
