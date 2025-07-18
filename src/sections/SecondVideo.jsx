import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const SecondVideo = () => {
  useGSAP(() => {
    gsap.set(".second-vd-wrapper", {
      marginTop: "-150vh",
      opacity: 0,
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".second-vd-wrapper",
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
      ".second-vd-wrapper",
      {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      },
      "<"
    );
    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, {
        currentTime: videoRef.current.duration,
        duration: 3,
        ease: "power1.inOut",
      });
    };
  });

  const videoRef = useRef(null);
  return (
    <section className="second-vd-wrapper">
      <div className="h-dvh">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/output2.mp4"
          className="second-vd"
        />
      </div>
    </section>
  );
};

export default SecondVideo;
