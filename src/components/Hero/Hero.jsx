import Image from "next/image";
import LogoHero from "../../../public/hero/logo.png";
import IconButton from "../IconButton/IconButton";
import SliderInfinity from "../SliderInfinity/SliderInfinity";

function Hero() {
  return (
    <div className="hero">
      <div className="relative">
        <div className="hero-bg relativem overflow-hidden">
          <SliderInfinity />
          <div className="overlay absolute top-0 bottom-0 left-0 right-0 z-[2]"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[5]">
          <Image src={LogoHero} alt="Logo Hero" className="" />
        </div>
      </div>
      <div className="flex flex-col items-center max-w-[1000px] mx-auto relative mt-[-196px] text-center z-10">
        <h1 className="mb-4">The Best Streaming Experience</h1>
        <p className="mb-8">
          StreamVibe is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere. With StreamVibe, you
          can enjoy a wide variety of content, including the latest
          blockbusters, classic movies, popular TV shows, and more. You can also
          create your own watchlists, so you can easily find the content you
          want to watch.
        </p>
        <IconButton label={"Start Watching Now"} />
      </div>
    </div>
  );
}

export default Hero;
