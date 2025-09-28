import desktop_bg from "./pattern-bg-desktop.png";
import mobile_bg from "./pattern-bg-mobile.png";

export default function ImageHeader() {
  return (
    <div>
      <picture>
        <source media={"(min-width: 40em)"} srcSet={desktop_bg} />
        <source srcSet={mobile_bg} />
        <img src={desktop_bg} alt={desktop_bg} />
      </picture>
    </div>
  );
}
