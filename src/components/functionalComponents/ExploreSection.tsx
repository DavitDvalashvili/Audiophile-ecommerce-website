import useWindowWidth from "../../Hooks/useWindowWidth";
import data from "../../../data.json";
import { Link, useNavigate } from "react-router-dom";
import {
  GalleryStyle,
  RecommendationStyle,
} from "../styleComponents/ExploreStyle";

const ExploreSection = () => {
  const slugArr = [
    "yx1-earphones",
    "xx59-headphones",
    "xx99-mark-one-headphones",
    "xx99-mark-two-headphones",
    "zx7-speaker",
    "zx9-speaker",
  ];

  //get the index based on the page url
  const baseUrl = window.location.origin;
  const index: number = slugArr.indexOf(location.pathname.split("/")[2]);
  const productData = data[index];

  // get back base url
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  //custom hook
  const width = useWindowWidth();

  return (
    <>
      <GalleryStyle>
        <img
          className="first"
          src={
            width < 768
              ? `${baseUrl}/${productData.gallery.first.mobile}`
              : width < 1440
              ? `${baseUrl}/${productData.gallery.first.tablet}`
              : `${baseUrl}/${productData.gallery.first.desktop}`
          }
          alt="galleryImageFirst"
        />
        <img
          className="second"
          src={
            width < 768
              ? `${baseUrl}/${productData.gallery.second.mobile}`
              : width < 1440
              ? `${baseUrl}/${productData.gallery.second.tablet}`
              : `${baseUrl}/${productData.gallery.second.desktop}`
          }
          alt="galleryImageSecond"
        />
        <img
          className="third"
          src={
            width < 768
              ? `${baseUrl}/${productData.gallery.third.mobile}`
              : width < 1440
              ? `${baseUrl}/${productData.gallery.third.tablet}`
              : `${baseUrl}/${productData.gallery.third.desktop}`
          }
          alt="galleryImageThird"
        />
      </GalleryStyle>

      <RecommendationStyle>
        <h2>you may also like</h2>
        <div className="recommendProducts">
          {productData.others.map((other) => (
            <div key={other.name}>
              <img
                src={
                  width < 768
                    ? `${baseUrl}/${other.image.mobile}`
                    : width < 1440
                    ? `${baseUrl}/${other.image.tablet}`
                    : `${baseUrl}/${other.image.desktop}`
                }
                alt="productImage"
              />
              <h3>{other.name}</h3>
              <Link to={other.slug}>
                <button onClick={handleClick}>SEE PRODUCT</button>
              </Link>
            </div>
          ))}
        </div>
      </RecommendationStyle>
    </>
  );
};

export default ExploreSection;
