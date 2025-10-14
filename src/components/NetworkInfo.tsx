type NetworkInfoProps = {
  ip?: string;
  region?: string;
  timezone?: string;
  isp?: string;
};

export default function NetworkInfo({ ...props }: NetworkInfoProps) {
  const { ip, region, timezone, isp } = props;
  return (
    <div
      className={
        "flex justify-center items-center gap-5 bg-white w-100 rounded-[7px] dark-gray"
      }
    >
      <div>
        <p className={"uppercase font-bold"}>ip address</p>
        <p>{ip}</p>
      </div>

      <div>
        <p className={"uppercase font-bold"}>location</p>
        <p>{region}</p>
      </div>

      <div>
        <p className={"uppercase font-bold"}>timezone</p>
        <p>{timezone}</p>
      </div>

      <div>
        <p className={"uppercase font-bold"}>isp</p>
        <p>{isp}</p>
      </div>
    </div>
  );
}
