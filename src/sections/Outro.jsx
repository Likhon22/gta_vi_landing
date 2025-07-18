import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Outro = () => {
  useGSAP(() => {
    gsap.set(".final-text", {
      opacity: 0,
      marginTop: "-100vh",
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".final-text",
        start: "top top",
        end: "+=100%",
        scrub: true,
        pin: true,
      },
    });
    tl.to(".final-content", {
      opacity: 0,
      duration: 1,
      ease: "power1.inOut",
    });
    tl.to(".final-text", {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
    });
  });
  return (
    <section className="w-full h-dvh overflow-hidden final-text ">
      <div className="h-full col-center gap-10">
        <img src="/images/logo.webp" alt="logo" className="md:w-72 w-52" />

        <div>
          <h3>
            Coming <br /> May 26th <br /> 2026
          </h3>
        </div>

        <div className="flex-center gap-10">
          <img src="/images/ps-logo.svg" className="md:w-32 w-20" />
          <img src="/images/x-logo.svg" className="md:w-52 w-40" />
        </div>
      </div>
    </section>
  );
};

export default Outro;
