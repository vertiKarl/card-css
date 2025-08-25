import Card from "./components/Card/Card";
import style from "./App.module.css";
import { useState } from "react";
import { CardFinishes, type CardFinish } from "./lib/CardFinish";
import { CardRarities, type CardRarity } from "./lib/CardRarity";
import { CardPatterns, type CardPattern } from "./lib/CardPattern";
import { ControlsWrapper } from "./components/ControlsWrapper/ControlsWrapper";

function App() {
  const [cardFinish, setCardFinish] = useState<CardFinish>("normal");
  const [cardRarity, setCardRarity] = useState<CardRarity>("common");
  const [cardPattern, setCardPattern] = useState<CardPattern>("none");
  const [cardImage, setCardImage] = useState<string | null>(null);
  const [isNewPickup, setIsNewPickup] = useState(false);

  return (
    <>
      <div className={style.main}>
        <Card
          finish={cardFinish}
          rarity={cardRarity}
          pattern={cardPattern}
          isNewPickup={isNewPickup}
          image={cardImage}
        ></Card>
      </div>
      <ControlsWrapper>
        <h3>Imagelink</h3>
        <form
          className={style.form}
          onSubmit={(ev) => {
            ev.preventDefault();
            const formData = new FormData(ev.currentTarget);
            const data = Object.fromEntries(formData.entries()) as Record<
              string,
              string
            >;
            setCardImage(data.link);
          }}
        >
          <input
            className={style.link}
            name="link"
            placeholder="anilist image"
          ></input>
          <input
            className={style.submit}
            type="submit"
            value={cardImage ? "✓" : "🗘"}
          ></input>
        </form>
        <span className={style.spacer} />
        <h3>Finish</h3>
        <div className={style.controls}>
          {Object.values(CardFinishes).map((type) => (
            <button
              key={`${type}-button`}
              onClick={() => {
                setCardFinish(type);
              }}
            >
              {type}
            </button>
          ))}
        </div>
        <span className={style.spacer} />
        <h3>Rarity</h3>
        <div className={style.controls}>
          {Object.values(CardRarities).map((type) => (
            <button
              key={`${type}-button`}
              onClick={() => {
                setCardRarity(type);
              }}
            >
              {type}
            </button>
          ))}
        </div>
        <span className={style.spacer} />
        <h3>Pattern</h3>
        <div className={style.controls}>
          {Object.values(CardPatterns).map((type) => (
            <button
              key={`${type}-button`}
              onClick={() => {
                setCardPattern(type);
              }}
            >
              {type}
            </button>
          ))}
        </div>
        <span className={style.spacer} />
        <h3>new pickup</h3>
        <input
          value={String(isNewPickup)}
          onChange={(ev) => {
            setIsNewPickup(ev.target.checked);
          }}
          type="checkbox"
        ></input>
        <span className={style.spacer} />
      </ControlsWrapper>
    </>
  );
}

export default App;
