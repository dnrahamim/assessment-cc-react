import { Monster } from '../../models/interfaces/monster.interface';
import { StatBar } from '../stat-bar/StatBar';
import {
  BattleMonsterCard,
  BattleMonsterTitle,
  // Extra imports
  HorizontalRule,
  MonsterImage,
} from './MonsterBattleCard.styled';

type EmptyBattleCardProps = { title?: string };

const EmptyBattleCard = ({ title }: EmptyBattleCardProps) => (
  <BattleMonsterCard centralized>
    <BattleMonsterTitle>{title!}</BattleMonsterTitle>
  </BattleMonsterCard>
);

type MonsterCardProps = {
  monster?: Monster | null;
  title?: string;
};

// Add the 'monster' prop
const MonsterBattleCard: React.FC<MonsterCardProps> = ({ title, monster }) => {
  if (!monster) {
    return <EmptyBattleCard title={title} />;
  }
  return (
    <BattleMonsterCard>
      {/* Add this MonsterImage */}
      {monster && <MonsterImage src={monster.imageUrl} />}
      <BattleMonsterTitle>{title!}</BattleMonsterTitle>
      {monster && <HorizontalRule />}
      <StatBar statKey="hp" monster={monster} />
      <StatBar statKey="attack" monster={monster} />
      <StatBar statKey="defense" monster={monster} />
      <StatBar statKey="speed" monster={monster} />
    </BattleMonsterCard>
  );
};

export { MonsterBattleCard };
