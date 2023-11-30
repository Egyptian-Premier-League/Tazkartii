import { useParams } from "react-router-dom";
import { PriceContainer, PriceCard } from "./Invoice.styled";

const Final = () => {
  const { selected, totalprice } = useParams();
  return (
    <PriceContainer>
      <PriceCard>
        <h3>SELECTED SEATS</h3>
        {selected}
        <h3>TOTALPRICE : {totalprice}</h3>
      </PriceCard>
    </PriceContainer>
  );
};

export default Final;
