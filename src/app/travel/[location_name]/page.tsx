import Details from "../../pages/details/page";

type Props = {
  params: {
    location_name: string;
  };
};

const LocationName = ({ params: { location_name } }: Props) => {
  return (
    <Details location_name={location_name} />
  );
};

export default LocationName;
