import { useState } from 'react';
import { sample } from 'lodash';
import { useAppDispatch } from '../../app/hooks';
import { Monster } from '../../models/interfaces/monster.interface';
import {
  setSelectedMonster,
  setComputerMonster,
} from '../../reducers/monsters/monsters.actions';
import {
  Image,
  ListTitle,
  MonsterCard,
  MonsterName,
  MonstersSection,
} from './MonstersList.styled';

type MonstersListProps = {
  monsters: Monster[];
};

const MonstersList: React.FC<MonstersListProps> = ({ monsters }) => {
  const dispatch = useAppDispatch();

  const [selectedMonsterId, setSelectedMonsterId] = useState<string | null>(
    null,
  );

  const handleMonsterClick = (monster: Monster) => {
    const value = selectedMonsterId === monster.id ? null : monster.id;
    const getComputerMonseter = () =>
      sample(
        monsters.filter((monster) => monster.id !== selectedMonsterId),
      ) as Monster;
    const computerMonster =
      selectedMonsterId === null ? null : getComputerMonseter();
    setSelectedMonsterId(value);
    dispatch(setSelectedMonster(!value ? null : monster));
    dispatch(setComputerMonster(!value ? null : computerMonster));
  };

  return (
    <div>
      <ListTitle>
        {monsters.length > 0 ? 'Select your monster' : 'No monsters available'}
      </ListTitle>

      <MonstersSection data-testid="monsters-list-section">
        {monsters.map((monster) => (
          <MonsterCard
            key={monster.id}
            onClick={() => handleMonsterClick(monster)}
            selected={monster.id === selectedMonsterId}
            data-testid={monster.id}>
            <Image src={monster.imageUrl} />
            <MonsterName>{monster.name}</MonsterName>
          </MonsterCard>
        ))}
      </MonstersSection>
    </div>
  );
};

export { MonstersList };
