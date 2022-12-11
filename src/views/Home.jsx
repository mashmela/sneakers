import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddBlock from "../components/AddBlock";

import ItemCard from "../components/ItemCard";

function Home() {
  const navigate = useNavigate();
  const sneakers = useSelector((state) => state.sneakers);
  const addblocks = useSelector((state) => state.addblocks);

  const [selectedAddBlockId, setSelectedAddBlockId] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () =>
        setSelectedAddBlockId(
          selectedAddBlockId === addblocks.length - 1 ? 0 : selectedAddBlockId + 1,
        ),
      5000,
    );
    return () => clearInterval(intervalId);
  }, [selectedAddBlockId, addblocks]);

  function handleClick() {
    const item = addblocks[selectedAddBlockId];
    if (!item.action) return;

    if (item.action === "redirect") {
      navigate(item.url);
      return;
    }

    if (item.action === "scroll") {
      const element = document.getElementById(item.containerId);
      if (!element) return;
      element.scrollIntoView({ behavior: "smooth", block: "end" });
      return;
    }
  }

  const handleAddBlockSwitch = (id) => {
    setSelectedAddBlockId(id);
  };

  return (
    <div>
      <div className="addBlock">
        {addblocks.length > 0 && (
          <div
            style={{ backgroundImage: `url(images/ForAdd/ad-${selectedAddBlockId}.png)` }}
            onClick={handleClick}
            className="addBlockImg"
          >
            <AddBlock {...addblocks[selectedAddBlockId]} />
          </div>
        )}
        <div className="switch">
          {addblocks.map((block, index) => (
            <img
              onClick={() => handleAddBlockSwitch(index)}
              src={
                index === selectedAddBlockId
                  ? "/images/ForAdd/EllipseActive.png"
                  : "/images/ForAdd/Ellipse.png"
              }
              alt=""
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="itemsBlock">
        <div className="nameBlock">
          <div>Nike Air Force</div>
          {/* <img src="/images/Vector 1.png" alt="смотреть больше" /> */}
        </div>
        <div className="cards">
          {sneakers
            .filter((item) => item.brand === "NIKE")
            .map((obj, index) => (
              <ItemCard {...obj} key={index} />
            ))}
        </div>
      </div>
      <div className="newCollection"></div>
      <div className="itemsBlock">
        <div className="nameBlock">
          <div>Adidas</div>
          {/* <img src="/images/Vector 1.png" alt="смотреть больше" /> */}
        </div>
        <div className="cards">
          {sneakers
            .filter((item) => item.brand === "Adidas")
            .map((obj, index) => (
              <ItemCard {...obj} key={index} />
            ))}
        </div>
      </div>
      <div className="itemsBlock">
        <div className="nameBlock">
          <div>Converse</div>
          {/* <img className="moreButon" src="/images/Vector 1.png" alt="смотреть больше" /> */}
        </div>
        <div id="scroll-container" className="cards">
          {sneakers
            .filter((item) => item.brand === "Converse")
            .map((obj, index) => (
              <ItemCard {...obj} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
