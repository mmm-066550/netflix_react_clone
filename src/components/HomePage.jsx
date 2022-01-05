import React, { useEffect } from "react";

import HomeTrendings from "./HomeTrendings";
import HeroSlider from "./HeroSlider";
import PopularSlider from "./PopularSlider";
import NowPlayingSlider from "./NowPlayingSlider";
import TopRatedSlider from "./TopRatedSlider";

export default function HomePage() {
  useEffect(() => {
    document.title = `NETFLIX | Watch Movies, TV Shows Online`;
  }, []);
  return (
    <div>
      <HeroSlider />
      <HomeTrendings />
      <PopularSlider />
      <NowPlayingSlider />
      <TopRatedSlider />
    </div>
  );
}
