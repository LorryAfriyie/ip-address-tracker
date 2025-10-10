import IPTracker from "./IPTracker.tsx";

export default function ImageHeader() {
  return (
    <section
      className={
        "image-header-section flex items-center justify-center flex-col"
      }
    >
      <h2 className={"text-white font-bold"}>IP Address Tracker</h2>
      <IPTracker />
    </section>
  );
}
