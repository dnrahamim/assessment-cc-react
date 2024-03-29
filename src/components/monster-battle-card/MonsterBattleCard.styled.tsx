import styled from '@emotion/styled';
import { Card, Typography } from '@mui/material';
import { colors } from '../../constants/colors';

export const BattleMonsterCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'centralized',
})<{ centralized?: boolean }>(({ centralized }) => ({
  // padding: '13px 11px',
  width: 'calc(307px - 22px)',
  height: '415px',
  background: colors.white,
  boxShadow: '-2px 3px 10px rgba(0, 0, 0, 0.25)',
  borderRadius: '7px',
  display: centralized ? 'flex' : 'auto',
  alignItems: centralized ? 'center' : 'auto',
  justifyContent: centralized ? 'center' : 'auto',
  // My Additions
  flexFlow: 'column',
  padding: '11px 12px',
}));

export const BattleMonsterTitle = styled(Typography)(() => ({
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '400',
  // fontSize: '36px',
  // lineHeight: '42px',
  color: colors.black,
  // My Additions
  fontSize: '22px',
  lineHeight: '26px',
  textAlign: 'left',
}));

// My Style Components
export const MonsterImage = styled.img(() => ({
  borderRadius: '7px',
  width: '100%',
  marginBottom: '14px',
}));

export const HorizontalRule = styled.hr(() => ({
  borderBottom: '1px',
  borderColor: colors.horizontalRuleGrey,
}));
