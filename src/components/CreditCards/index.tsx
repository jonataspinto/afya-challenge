import { HTMLAttributes } from 'react';
import { Dinnersclub } from './Brands/Dinnersclub';
import { Americanexpress } from './Brands/Americanexpress';
import { Elo } from './Brands/Elo';
import { Mastercard } from './Brands/Mastercard';
import { Visa } from './Brands/Visa';
import { IuguLogo } from './Brands/IuguLogo';
import { creditCardsName } from '@/utils/creditCard';

import styles from './creditCards.module.scss';

const creditCardLogoMapper = [
  { key: creditCardsName.MASTERCARD, Component: Mastercard },
  { key: creditCardsName.DIBBERSCLUB, Component: Dinnersclub },
  { key: creditCardsName.AMERICANEXPRESS, Component: Americanexpress },
  { key: creditCardsName.VISA, Component: Visa },
  { key: creditCardsName.ELO, Component: Elo },
];

interface CreditCardsProps extends HTMLAttributes<HTMLUListElement> {
  selectedCard?:
    | creditCardsName.MASTERCARD
    | creditCardsName.DIBBERSCLUB
    | creditCardsName.AMERICANEXPRESS
    | creditCardsName.VISA
    | creditCardsName.ELO;
}

export const CreditCards = ({
  className,
  selectedCard,
  ...restProps
}: CreditCardsProps) => {
  return (
    <div className={`${styles.container} ${className ? className : ''}`}>
      <ul {...restProps} className={styles.brandList}>
        {creditCardLogoMapper.map(({ key, Component }) => (
          <li
            key={key}
            title={key}
            className={
              key === selectedCard ? `isSelected ${styles.isSelectedCard}` : ''
            }
          >
            <Component />
          </li>
        ))}
      </ul>
      <span className={styles.paymentProvider}>
        Pagamentos por <IuguLogo />
      </span>
    </div>
  );
};
