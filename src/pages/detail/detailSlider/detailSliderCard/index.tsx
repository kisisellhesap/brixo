import { FC } from "react";

interface DetailSliderCardProps {
  item: string;
}
const DetailSliderCard: FC<DetailSliderCardProps> = ({ item }) => {
  return (
    <div className="bg-pink mx-auto w-[50%] ">
      <img src={item} className="mix-blend-darken   object-fit-cover " />
    </div>
  );
};

export default DetailSliderCard;
