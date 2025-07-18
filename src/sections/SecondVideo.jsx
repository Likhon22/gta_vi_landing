import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const SecondVideo = () => {
  useGSAP(() => {
    gsap.set(".lucia", {
      marginTop: "-60vh",
      opacity: 0,
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".lucia",
        start: "top top",
        end: "+=200%",
        scrub: true,
        pin: true,
      },
    });
    tl.to(".jason", {
      opacity: 0,
      ease: "power1.inOut",
    }).to(
      ".lucia",
      {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      },
      "<"
    );
    (videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, {
        currentTime: videoRef.current.duration,
        duration: 3,
        ease: "power1.inOut",
      });
    }),
      "<";
  });

  const videoRef = useRef(null);
  return (
    <section className="lucia">
      <div className="h-dvh">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/output2.mp4"
          className="second-vd size-full object-cover"
          style={{ objectPosition: "30% 0%" }}
        />
      </div>
    </section>
  );
};

export default SecondVideo;
