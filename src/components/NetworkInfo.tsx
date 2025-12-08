type NetworkInfoProps = {
  ip?: string;
  region?: string;
  timezone?: string;
  isp?: string;
};

export default function NetworkInfo({ ...props }: NetworkInfoProps) {
  const { ip, region, timezone, isp } = props;
  return (
    <div className={"bg-white rounded-2xl dark-gray px-5 py-2 network-info"}>
      <div className={"mb-4 lg:mb-0"}>
        <small className={"uppercase font-bold"}>ip address</small>
        <p className={"xl:text-2xl ip-address"}>{ip}</p>
      </div>

      <div className="lg:border-e-2 lg:ms-[3rem] lg:me-[2rem]"></div>

      <div className={"mb-4 lg:mb-0"}>
        <small className={"uppercase font-bold"}>location</small>
        <p className={"xl:text-2xl region"}>{region}</p>
      </div>

      <div className="lg:border-e-2 lg:ms-[3rem] lg:me-[2rem]"></div>

      <div className={"mb-4 lg:mb-0"}>
        <small className={"uppercase font-bold"}>timezone</small>
        <p className={"xl:text-2xl timezone"}>{timezone}</p>
      </div>

      <div className="lg:border-e-2 lg:ms-[3rem] lg:me-[2rem]"></div>

      <div>
        <small className={"uppercase font-bold"}>isp</small>
        <p className={"xl:text-2xl isp"}>{isp}</p>
      </div>
    </div>
  );
}
