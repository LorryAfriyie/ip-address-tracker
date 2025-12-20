import IPTracker from "./IPTracker.tsx";

export default function ImageHeader() {
  return (
    <section className={"image-header-section"}>
      <h2 className={"text-white text-center text-[2rem]"}>
        IP Address Tracker
      </h2>
      <IPTracker />
      {/*<p>wow</p>*/}
    </section>
  );
}
