import { Link } from "react-router-dom";
import HomeStyle from "../../styleComponents/pages/HomeStyle";
import { ProductContainer, StoryWrapper } from "../ProductContainer";

const Home = () => {
  return (
    <HomeStyle>
      <section className="cover">
        <span>NEW PRODUCT</span>
        <h2>XX99 Mark II HeadphoneS</h2>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Link to="headphones/xx99-mark-two-headphones">
          <button>See Product</button>
        </Link>
      </section>
      <ProductContainer handleClick={() => {}} />
      <StoryWrapper />
    </HomeStyle>
  );
};

export default Home;
