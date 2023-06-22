import userEvent from '@testing-library/user-event';
import { fireEvent, render, screen } from '@testing-library/react';
import { AvailablePlans } from '.';

const plansMock = [
  {
    id: 1,
    title: 'premium Anual',
    description: 'À Vista',
    order: 2,
    discountPercentage: 0.1,
  },
  {
    id: 2,
    title: 'premium Anual',
    description: 'parcelado',
    order: 1,
    discountPercentage: 0.1,
  },
];

describe('AvailablePlans', () => {
  it('should render a list with available plans', async () => {
    render(<AvailablePlans plans={plansMock} />);

    expect(screen.getByRole('list')).toBeInTheDocument();

    plansMock.forEach((planData) => {
      const nameToQuery = ` ${planData.title} | ${planData.description}`;
      const discountTagId = `discount plan #ID ${planData.id}`;
      const discountValue = `${planData.discountPercentage * 100}%`;

      expect(
        screen.queryByRole('listitem', {
          name: new RegExp(nameToQuery, 'i'),
        }),
      ).toBeInTheDocument();

      expect(
        screen.getByTestId(new RegExp(discountTagId, 'i')),
      ).toHaveTextContent(String(discountValue));

      expect(screen.getByRole('radio', { name: String(planData.id) })).toBeInTheDocument();
    });
  });

  it('should highlight the selected plan', async () => {
    render(<AvailablePlans plans={plansMock} />);

    const plan = screen.getByRole('radio', { name: String(plansMock[0].id) });

    await fireEvent.click(plan);

    expect(plan).toBeChecked();
  });
});
