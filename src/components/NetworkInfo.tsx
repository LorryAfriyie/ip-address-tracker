type NetworkInfoProps = {
  ip?: string;
  region?: string;
  timezone?: string;
  isp?: string;
};

export default function NetworkInfo({ ...props }: NetworkInfoProps) {
  const { ip, region, timezone, isp } = props;
  return (
    <div className={"flex justify-center items-center gap-5 bg-white w-100"}>
      <div>
        <p className={"uppercase"}>ip address</p>
        <p>{ip}</p>
      </div>

      <div>
        <p className={"uppercase"}>location</p>
        <p>{region}</p>
      </div>

      <div>
        <p className={"uppercase"}>timezone</p>
        <p>{timezone}</p>
      </div>

      <div>
        <p className={"uppercase"}>isp</p>
        <p>{isp}</p>
      </div>
    </div>
  );
}
