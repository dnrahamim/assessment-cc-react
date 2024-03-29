import { store } from '../../app/store';
import { render, screen } from '@testing-library/react';
import monstersData from '../../../data/monsters.json';
import {
  Monster,
  StatKey,
  statKeys,
} from '../../models/interfaces/monster.interface';
import { sample } from 'lodash';
import { StatBar } from './StatBar';
import { Provider } from 'react-redux';
const monster = sample(monstersData.monsters) as Monster;
const statKey = sample(statKeys) as StatKey;

const monsterCardFactory = (data = monster) => {
  render(
    <Provider store={store}>
      <StatBar statKey={statKey} monster={data} />
    </Provider>,
  );
};

describe('StatBar', () => {
  it('should render the StatBar', () => {
    monsterCardFactory();
    const statBar = screen.getByTestId('statbar');
    const statTitle = screen.getByTestId('stattitle');
    const progressBar = screen.getByTestId('progressbar');
    expect(statBar).toBeVisible();
    expect(statTitle.textContent?.toLowerCase()).toEqual(statKey);
    expect(progressBar).toBeVisible();
  });
});
