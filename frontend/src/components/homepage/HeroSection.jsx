const PlayButton = () => {
  return (
    <button
      type="button"
      className="relative text-sm items-center backdrop-blur-[10px] bg-slate-500/20 caret-transparent inline-flex h-8 justify-center tracking-[0.3px] leading-5 text-center align-middle w-8 border p-0 rounded-[1000px] border-solid border-transparent hover:bg-slate-500/20 hover:border-slate-400"
    >
      <img
        src="https://c.animaapp.com/mfhttwk3ObI8ZY/assets/icon-2.svg"
        alt="Icon"
        className="box-border caret-transparent h-4 w-4"
      />
    </button>
  );
};

 const VideoPlayer = () => {
  return (
    <video
      autoPlay
      loop
      playsInline
      muted
      src="/hs.mp4"
      className="box-border caret-transparent h-full object-cover w-full"
    ></video>
  );
};

const HeroSection = () => {
  return (
    <section className="relative text-gray-100 aspect-[0.561311_/_1] bg-cover box-border caret-transparent leading-[0px] max-h-[528px] w-full bg-center md:aspect-[1.77805_/_1] md:max-h-[928px]">
      <VideoPlayer />
      <div className="absolute box-border caret-transparent right-4 bottom-4 md:right-6 md:bottom-6">
        <PlayButton />
      </div>
    </section>
  );
};
export default HeroSection;
