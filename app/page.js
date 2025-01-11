import BriefAbout from "@/components/BriefAbout";
import Carousal from "@/components/Carousal";
import PhotoSlider from "@/components/PhotoSlider";
import { Divider } from "@mui/material";

export default function Home() {
  return (
    <div>
      <Carousal />
      <BriefAbout />
      <PhotoSlider />
    </div>
  );
}
