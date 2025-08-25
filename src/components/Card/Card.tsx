import type { CardFinish } from "../../lib/CardFinish";
import type { CardPattern } from "../../lib/CardPattern";
import type { CardRarity } from "../../lib/CardRarity";
import { combine } from "../../lib/util";
import style from "./Card.module.css";

export default function Card({
  finish,
  rarity,
  pattern,
  image,
  isNewPickup = false,
}: {
  finish: CardFinish;
  rarity: CardRarity;
  pattern: CardPattern;
  isNewPickup: boolean;
  image: string | null;
}) {
  const imageLink =
    image ||
    "https://s4.anilist.co/file/anilistcdn/character/large/default.jpg";

  return (
    <div
      className={combine(style.main, style[finish], style[rarity])}
      style={{ "--image": `url(${imageLink})` } as React.CSSProperties}
    >
      <h2 className={style["card-name"]}>Card name</h2>
      {isNewPickup && <h2 className={style["new-pickup"]}>NEW</h2>}
      <span className={combine(style.overlay, style[pattern])}></span>
      <img className={style.image} src={imageLink}></img>
      <div className={combine(style.wing, style["right-wing"])}>
        <p>Age</p>
        <p>Blood group</p>
        <p>Related media</p>
      </div>
      <div className={combine(style.wing, style["left-wing"])}>
        <p>{rarity}</p>
        <p>{finish}</p>
        <p>{pattern}</p>
      </div>
    </div>
  );
}
