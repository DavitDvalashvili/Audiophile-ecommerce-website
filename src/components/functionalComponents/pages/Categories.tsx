import { ProductContainer } from "../ProductContainer";
import { StoryWrapper } from "../ProductContainer";
import { useLocation, useNavigate } from "react-router-dom";
import PageStyle from "../../styleComponents/pages/CategoryStyle";
import dataCategories from "../../../../dataCategories.json";
import useWindowWidth from "../../../Hooks/useWindowWidth";

const Pages = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  let pageArr = ["headphones", "speakers", "earphones"];
  const location = useLocation();
  const pathName = location.pathname.slice(1);
  let index = pageArr.indexOf(pathName);

  const width = useWindowWidth();

  return (
    <>
      <PageStyle>
        <h1>{pathName}</h1>
        <div className="productsContainer">
          {dataCategories[index].product.map((category) => (
            <div className="products" key={category.name}>
              <img
                src={
                  width < 768
                    ? category.Image.mobile
                    : width < 1440
                    ? category.Image.tablet
                    : category.Image.desktop
                }
                alt="productsImage"
              />
              <div className="textWrapper">
                {category.new && <span>NEW PRODUCT</span>}
                <h2>{category.name}</h2>
                <p>{category.description}</p>
                <button>See Product</button>
              </div>
            </div>
          ))}
        </div>
      </PageStyle>
      <ProductContainer handleClick={handleClick} />
      <StoryWrapper />
    </>
  );
};

export default Pages;
