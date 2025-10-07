import IPTracker from "./IPTracker.tsx";

export default function ImageHeader() {
  return (
    <section className={"image-header-section"}>
      <h2 className={"text-white font-bold"}>IP Address Tracker</h2>
      <IPTracker />
    </section>
  );
}
