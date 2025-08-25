import type { CardFinish } from "../../lib/CardFinish";
import type { CardPattern } from "../../lib/CardPattern";
import type { CardRarity } from "../../lib/CardRarity";
import { capitalize, combine } from "../../lib/util";
import style from "./Card.module.css";

export default function Card({
  finish,
  rarity,
  pattern,
  image,
}: {
  finish: CardFinish;
  rarity: CardRarity;
  pattern: CardPattern;
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
      <h3 className={style.rarityText}>{capitalize(rarity, 2).slice(0, 2)}</h3>
      <span className={combine(style.overlay, style[pattern])}></span>
      <img className={style.image} src={imageLink}></img>
    </div>
  );
}
