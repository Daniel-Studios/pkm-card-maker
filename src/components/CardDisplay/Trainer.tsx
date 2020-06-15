import React from 'react';
import { Card } from 'interfaces';
import styles from './CardDisplay.module.scss';
import { formatText, relativePathPrefix } from './index';

interface Props {
  imagePath?: string,
  card: Card,
}

const TrainerCard: React.FC<Props> = ({ imagePath, card }) => {
  return (
    <div className={styles.card} id='card'>
      {card.backgroundImage && <img src={card.backgroundImage} className={styles.backgroundImage} alt='' />}
      <span className={styles.name}>{formatText(card.name)}</span>
      <span className={styles.subname}>{formatText(card.subname)}</span>
      <div className={styles.descriptionWrapper}>
        <p className={styles.description}>{formatText(card.description)}</p>
      </div>
      {card.illustrator && <span className={styles.illustrator}>{`Illus. ${card.illustrator}`}</span>}
      {card.set && <img src={relativePathPrefix(`/assets/icons_symbols/sets/${card.set.number}_SetIcon_${card.set.shortName}.png`)} alt={card.set.name} className={styles.setIcon} />}
      {card.rotation && <img src={relativePathPrefix(`/assets/icons_symbols/rotations/${card.rotation?.shortName}.png`)} alt={card.rotation?.name} className={styles.rotation} />}
      <span className={styles.setNumber}>
        {`${card.cardNumber || ''}${card.totalInSet ? `/${card.totalInSet}` : ''}`}
        {card.rarityIcon &&
          <img src={relativePathPrefix(`/assets/icons_symbols/rarities/${card.rarityIcon.shortName}${card.type?.hasWhiteText ? '_white' : ''}.png`)}
            alt={card.rarityIcon.name} className={styles.rarityIcon} />
        }
      </span>
      {card.imageLayer1 && <img src={card.imageLayer1} className={styles.imageLayer1} alt='' />}
      <img src={imagePath} className={styles.image} alt={card.name || ''} />
      {card.imageLayer2 && <img src={card.imageLayer2} className={styles.imageLayer2} alt='' />}
    </div>
  )
}

export default TrainerCard;