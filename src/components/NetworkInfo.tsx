export default function NetworkInfo() {
  return (
    <div className={"flex justify-center gap-5"}>
      <div>
        <p className={"uppercase"}>ip address</p>
      </div>

      <div>
        <p className={"uppercase"}>location</p>
      </div>

      <div>
        <p className={"uppercase"}>timezone</p>
      </div>

      <div>
        <p className={"uppercase"}>isp</p>
      </div>
    </div>
  );
}
