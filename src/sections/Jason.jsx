import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Jason = () => {
  useGSAP(() => {
    gsap.set(".jason", { marginTop: "-80vh" });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".jason",
        start: "top 90%",
        end: "10% center",
        scrub: 2,
      },
    });
    tl.to(".first-vd", {
      opacity: 0,
      duration: 1,
      ease: "power1.inOut",
    });
    const tl2 = gsap.to(
      ".jason .img-box",
      {
        scrollTrigger: {
          trigger: ".jason",
          start: "top center",
          end: "80% center",
          scrub: 2,
        },
        y: -300,
        duration: 1,
        ease: "power1.inOut",
      },
      "<"
    );
  });
  return (
    <section className="jason">
      <div className="max-w-lg jason-content">
        <h1>Jason Duval</h1>
        <h2>Jason wants an easy life,but things keep getting little harder</h2>
        <p>
          Jason grew up around grifters and crooks. He learned how to hustle and
          make a quick buck, but he also learned that life is never easy. Every
          time he thinks he's found a way out, something pulls him back in.
          Whether it's a bad deal or a betrayal from someone he trusted, Jason's
          life is a constant struggle to stay one step ahead.
        </p>
      </div>
      <div className="jason-2">
        <img src="/images/jason-2.webp" alt="jason" />
      </div>
      <div className="space-y-5 mt-96 img-box">
        <div className="jason-1">
          <img src="/images/jason-1.webp" alt="" />
        </div>
        <div className="jason-3">
          <img src="/images/jason-3.webp" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Jason;
