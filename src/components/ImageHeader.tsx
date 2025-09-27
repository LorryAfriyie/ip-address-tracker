import desktop_bg from "./pattern-bg-desktop.png";
import mobile_bg from "./pattern-bg-mobile.png";

export default function ImageHeader() {
  return (
    <div>
      <img src={desktop_bg} alt={desktop_bg} />
      <p>Image</p>
    </div>
  );
}
