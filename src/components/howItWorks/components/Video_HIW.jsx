const VideoHIW = () => {
  return (
    <section className="flex flex-col items-center justify-center py-10 sm:gap-10">
      <h2 className="text-3xl sm:text-5xl font-semibold text-center py-6">
        How PillUp works video
      </h2>

      <iframe
        className="h-[230px] sm:h-[360px] md:h-[450px] lg:h-[550px] xl:h-[540px] w-5/6 max-w-[840px] rounded-xl shadow-2xl"
        src="https://www.youtube.com/embed/XcFrv3pL0vg?si=RYfxQCfFPM8sCqpp"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </section>
  );
};

export default VideoHIW;
