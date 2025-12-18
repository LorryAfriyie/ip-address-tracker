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
      className={"bg-white rounded-2xl dark-gray network-info gap-4 md:gap-0"}
    >
      <div className={"col"}>
        <small className={"uppercase font-bold"}>ip address</small>
        <p className={"xl:text-2xl ip-address"}>{ip}</p>
      </div>

      <div className={"col"}>
        <small className={"uppercase font-bold"}>location</small>
        <p className={"xl:text-2xl region"}>{region}</p>
      </div>

      <div className={"col"}>
        <small className={"uppercase font-bold"}>timezone</small>
        <p className={"xl:text-2xl timezone"}>{timezone}</p>
      </div>

      <div className={"col"}>
        <small className={"uppercase font-bold"}>isp</small>
        <p className={"xl:text-2xl isp"}>{isp}</p>
      </div>
    </div>
  );
}
