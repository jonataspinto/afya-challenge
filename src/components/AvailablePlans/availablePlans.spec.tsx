import userEvent from '@testing-library/user-event';
import { fireEvent, render, screen } from '@testing-library/react';
import { availablePlansMock } from '@/mock/availablePlans';
import { AvailablePlans } from '.';

describe('AvailablePlans', () => {
  it('should render a list with available plans', async () => {
    render(<AvailablePlans plans={availablePlansMock} />);

    expect(screen.getByRole('list')).toBeInTheDocument();

    availablePlansMock.forEach((planData) => {
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

      expect(
        screen.getByRole('radio', { name: String(planData.id) }),
      ).toBeInTheDocument();
    });
  });

  it('should highlight the selected plan', async () => {
    render(<AvailablePlans plans={availablePlansMock} />);

    const plan = screen.getByRole('radio', {
      name: String(availablePlansMock[0].id),
    });

    await fireEvent.click(plan);

    expect(plan).toBeChecked();
  });
});
