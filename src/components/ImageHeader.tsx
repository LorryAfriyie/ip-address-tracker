import desktop_bg from "./pattern-bg-desktop.png";
import mobile_bg from "./pattern-bg-mobile.png";

export default function ImageHeader() {
  return (
    <section className={"image-header-section"}>
      <picture>
        <source media={"(min-width: 60em)"} srcSet={desktop_bg} />
        <source srcSet={mobile_bg} />
        <img
          src={desktop_bg}
          alt={desktop_bg}
          className={"image-header-section__img"}
        />
      </picture>
    </section>
  );
}
