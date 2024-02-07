import { Monster } from '../../models/interfaces/monster.interface';
import {
  BattleMonsterCard,
  BattleMonsterTitle,
  // Extra imports
  HorizontalRule,
  MonsterImage,
} from './MonsterBattleCard.styled';

type MonsterCardProps = {
  monster?: Monster | null;
  title?: string;
};

// Add the 'monster' prop
const MonsterBattleCard: React.FC<MonsterCardProps> = ({ title, monster }) => {
  return (
    // remove 'centralized' to make things align left
    <BattleMonsterCard>
      {/* Add this MonsterImage */}
      {monster && <MonsterImage src={monster.imageUrl} />}
      <BattleMonsterTitle>{title!}</BattleMonsterTitle>
      <HorizontalRule />
    </BattleMonsterCard>
  );
};

export { MonsterBattleCard };
