import { Monster, StatKey } from '../../models/interfaces/monster.interface';
import {
  BattleMonsterCard,
  BattleMonsterTitle,
  // Extra imports
  HorizontalRule,
  MonsterImage,
  ProgressBar,
} from './MonsterBattleCard.styled';

type EmptyBattleCardProps = { title?: string };

const EmptyBattleCard = ({ title }: EmptyBattleCardProps) => (
  <BattleMonsterCard>
    <BattleMonsterTitle>{title!}</BattleMonsterTitle>
  </BattleMonsterCard>
);

type MonsterCardProps = {
  monster?: Monster | null;
  title?: string;
};

const statKeys: StatKey[] = ['hp', 'attack', 'defense', 'speed'];

// Add the 'monster' prop
const MonsterBattleCard: React.FC<MonsterCardProps> = ({ title, monster }) => {
  if (!monster) {
    return <EmptyBattleCard title={title} />;
  }
  const stats = Object.entries(monster)
    .filter(([k, v]) => statKeys.includes(k as StatKey))
    .sort(
      ([k1, v1], [k2, v2]) =>
        statKeys.indexOf(k1 as StatKey) - statKeys.indexOf(k2 as StatKey),
    );
  return (
    // remove 'centralized' to make things align left
    <BattleMonsterCard>
      {/* Add this MonsterImage */}
      {monster && <MonsterImage src={monster.imageUrl} />}
      <BattleMonsterTitle>{title!}</BattleMonsterTitle>
      {monster && <HorizontalRule />}
      {stats.map(([k, v]) => (
        <div key={k}>
          {k}
          <ProgressBar value={v} variant="determinate" />
        </div>
      ))}
    </BattleMonsterCard>
  );
};

export { MonsterBattleCard };
