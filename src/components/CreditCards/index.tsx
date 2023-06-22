import { HTMLAttributes } from 'react';
import { Dinnersclub } from './Brands/Dinnersclub';
import { Americanexpress } from './Brands/Americanexpress';
import { Elo } from './Brands/Elo';
import { Mastercard } from './Brands/Mastercard';
import { Visa } from './Brands/Visa';
import { IuguLogo } from './Brands/IuguLogo';

import styles from './creditCards.module.scss';

const creditCardLogoMapper = [
  { key: 'mastercard', Component: Mastercard },
  { key: 'dinnersclub', Component: Dinnersclub },
  { key: 'americanexpress', Component: Americanexpress },
  { key: 'visa', Component: Visa },
  { key: 'elo', Component: Elo },
];

interface CreditCardsProps extends HTMLAttributes<HTMLUListElement> {
  selectedCard?: 'mastercard' | 'dinnersclub' |  'americanexpress'  | 'visa' | 'elo';
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
            className={key === selectedCard ? 'isSelected' : ''}
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
