import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import PropTypes from "prop-types";

const Slider = ({ images }) => {
  const { img1, img2, img3, img4 } = images;

  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div ref={sliderRef} className=" keen-slider container mx-auto">
      <div className="keen-slider__slide number-slide1">
        <img
          className="mx-auto rounded-3xl max-h-[300px] md:max-h-[500px] lg:max-h-[700px] lg:w-3/4 px-4"
          src={img1}
          alt=""
        />
      </div>
      <div className="keen-slider__slide number-slide1">
        <img
          className="mx-auto rounded-3xl max-h-[300px] md:max-h-[500px] lg:max-h-[700px] lg:w-3/4 px-4"
          src={img2}
          alt=""
        />
      </div>
      {img3 && (
        <div className="keen-slider__slide number-slide1">
          <img
            className="mx-auto rounded-3xl max-h-[300px] md:max-h-[500px] lg:max-h-[700px] lg:w-3/4 px-4"
            src={img3}
            alt=""
          />
        </div>
      )}
      {img4 && (
        <div className="keen-slider__slide number-slide1">
          <img
            className="mx-auto rounded-3xl max-h-[300px] md:max-h-[500px] lg:max-h-[700px] lg:w-3/4 px-4"
            src={img4}
            alt=""
          />
        </div>
      )}
    </div>
  );
};

Slider.propTypes = {
  images: PropTypes.object,
};

export default Slider;
