interface Props {
  percent: number;
  price: number;
}

export const discountPercentage = ({ percent, price }: Props) => {
  return (price * (100 - percent)) / 100;
};
