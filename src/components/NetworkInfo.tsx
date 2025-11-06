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
        "flex justify-center items-center gap-5 bg-white rounded-[7px] dark-gray px-5 py-2 network-info"
      }
    >
      <div>
        <p className={"uppercase font-bold"}>ip address</p>
        <p className={"xl:text-2xl ip-address font-bold"}>{ip}</p>
      </div>

      <div>
        <p className={"uppercase font-bold"}>location</p>
        <p className={"xl:text-2xl region font-bold"}>{region}</p>
      </div>

      <div>
        <p className={"uppercase font-bold"}>timezone</p>
        <p className={"xl:text-2xl timezone font-bold"}>{timezone}</p>
      </div>

      <div>
        <p className={"uppercase font-bold"}>isp</p>
        <p className={"xl:text-2xl isp font-bold"}>{isp}</p>
      </div>
    </div>
  );
}
