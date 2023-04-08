import "./brands.css";

const Brand = ({ title, subTitle, description, compBackground }) => {
  return (
    <div
      className={
        compBackground === "blue"
          ? "quote-block__brands brands__blue"
          : "quote-block__brands"
      }
    >
      <div className="brands">
        <div className="brands__leftSide">
          {" "}
          <div className="brands__leftSideWrapper">
            <div className="brands__title">{title}</div>
            <div className="brands__subtitle">{subTitle}</div>
          </div>
        </div>

        <div className="brands__rightSide">
          <div className="brands__rightSideTop">{description}</div>
          <a href="#">Test hyperlink</a>
          <div className="brands__rightSideButtom">
            <button className="brands__rightSideButtom__button">
              Buy ticket
            </button>
            <button
              className="brands__rightSideButtom__button"
              style={{ backgroundColor: "white", color: "#d2b294" }}
            >
              Buy ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
