import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../app/hooks';
import { MonsterBattleCard } from '../../components/monster-battle-card/MonsterBattleCard';
import { MonstersList } from '../../components/monsters-list/MonstersList';
import { Title } from '../../components/title/Title';
import {
  fetchMonstersData,
  postBattleData,
} from '../../reducers/monsters/monsters.actions';
import {
  selectBattleData,
  selectMonsters,
  selectSelectedMonster,
  selectComputerMonster,
} from '../../reducers/monsters/monsters.selectors';
import {
  BattleSection,
  PageContainer,
  StartBattleButton,
} from './BattleOfMonsters.styled';
import { WinnerDisplay } from '../../components/winner-display/WinnerDisplay';

const BattleOfMonsters = () => {
  const dispatch = useAppDispatch();

  const monsters = useSelector(selectMonsters);
  const selectedMonster = useSelector(selectSelectedMonster);
  const computerMonster = useSelector(selectComputerMonster);
  const battle = useSelector(selectBattleData);

  useEffect(() => {
    dispatch(fetchMonstersData());
  }, [dispatch]);

  const handleStartBattleClick = () => {
    if (!selectedMonster || !computerMonster) {
      return null;
    }
    dispatch(
      postBattleData({
        monster1Id: selectedMonster.id,
        monster2Id: computerMonster.id,
      }),
    );
  };

  return (
    <PageContainer>
      <Title>Battle of Monsters</Title>

      <MonstersList monsters={monsters} />

      {battle && (
        <WinnerDisplay
          text={battle.tie ? 'Tie - No winner' : `${battle.winner.name} wins!`}
        />
      )}

      <BattleSection>
        <MonsterBattleCard
          // Pass in selectedMonster
          monster={selectedMonster}
          title={selectedMonster?.name || 'Player'}
        />
        <StartBattleButton
          data-testid="start-battle-button"
          disabled={selectedMonster === null}
          onClick={handleStartBattleClick}>
          Start Battle
        </StartBattleButton>
        <MonsterBattleCard
          monster={computerMonster}
          title={computerMonster?.name || 'Computer'}
        />
      </BattleSection>
    </PageContainer>
  );
};

export { BattleOfMonsters };
