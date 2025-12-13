import IPTracker from "./IPTracker.tsx";
import NetworkInfo from "./NetworkInfo";

export default function ImageHeader() {
  return (
    <section className={"image-header-section"}>
      <div className="center">
        <h2 className={"text-white text-center text-[2rem]"}>
          IP Address Tracker
        </h2>
        <IPTracker />
      </div>

      <NetworkInfo />
    </section>
  );
}
