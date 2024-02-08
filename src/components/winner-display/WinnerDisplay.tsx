import { WinnerDisplayContainer, WinnerText } from './WinnerDisplay.styled';

type Props = {
  text: string;
};

const WinnerDisplay: React.FC<Props> = ({ text }) => (
  <WinnerDisplayContainer data-testid="winner-display-container">
    <WinnerText data-testid="winner-text">{text}</WinnerText>
  </WinnerDisplayContainer>
);

export { WinnerDisplay };
