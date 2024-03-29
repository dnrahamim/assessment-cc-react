import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { MonsterBattleCard } from './MonsterBattleCard';
import monstersData from '../../../data/monsters.json';
import { intersection, sample } from 'lodash';
import { Monster, statKeys } from '../../models/interfaces/monster.interface';
const monster = sample(monstersData.monsters) as Monster;

const monsterCardFactory = (data = monster) => {
  render(
    <Provider store={store}>
      <MonsterBattleCard title={data.name} monster={data} />
    </Provider>,
  );
};

describe('MonsterBattleCard', () => {
  it('should render the monster card', () => {
    monsterCardFactory();
    const monsterBattleCard = screen.getByTestId('monster-battle-card');
    expect(monsterBattleCard).toBeVisible();
  });

  it('should render the given monster', () => {
    monsterCardFactory();
    const monsterName = monster.name;
    const battleMonsterTitle = screen.getByTestId('battle-monster-title');
    expect(battleMonsterTitle.textContent).toEqual(monsterName);
  });

  it('should render four progress bars', () => {
    monsterCardFactory();
    const progressbars = screen.getAllByTestId('progressbar');
    expect(progressbars.length).toEqual(4);
  });

  it('should render the correct stats', () => {
    monsterCardFactory();
    const statTitles = screen.getAllByTestId('stattitle');
    const actualStatTitleText = statTitles.map((t) =>
      t.textContent?.toLowerCase(),
    );
    expect(intersection(statKeys, actualStatTitleText).length).toEqual(4);
  });
});
