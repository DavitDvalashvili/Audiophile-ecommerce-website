import { Link } from "react-router-dom";
import HomeStyle from "../../styleComponents/pages/HomeStyle";
import { ProductContainer, StoryWrapper } from "../ProductContainer";
import speakerMobile from "../../../assets/home/mobile/image-speaker-zx9.png";
import speakerTablet from "../../../assets/home/tablet/image-speaker-zx9.png";
import speakerDesktop from "../../../assets/home/desktop/image-speaker-zx9.png";
import useWindowWidth from "../../../Hooks/useWindowWidth";

const Home = () => {
  const width = useWindowWidth();
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
      <section className="products">
        <div className="speakerZX9">
          <div className="imageWrapper">
            {width < 768 && <img src={speakerMobile} alt="speaker" />}
            {width >= 768 && width < 1440 && (
              <img src={speakerTablet} alt="speaker" />
            )}
            {width >= 1440 && <img src={speakerDesktop} alt="speaker" />}
          </div>
          <div className="textWrapper">
            <h1>ZX9 SPEAKER</h1>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link to="speakers/zx9-speaker">
              <button>See Product</button>
            </Link>
          </div>
        </div>
        <div className="speakerZX7">
          <h1>ZX7 SPEAKER</h1>
          <Link to="speakers/zx7-speaker">
            <button>See Product</button>
          </Link>
        </div>
        <div className="earphone">
          <div className="imageBox"></div>
          <div className="textBox">
            <h1>YX1 EARPHONES</h1>
            <Link to="earphones/yx1-earphones">
              <button>See Product</button>
            </Link>
          </div>
        </div>
      </section>
      <StoryWrapper />
    </HomeStyle>
  );
};

export default Home;
