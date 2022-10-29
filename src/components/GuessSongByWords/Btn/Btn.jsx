import { Button } from './Btn.styled';

const Btn = ({ isTypingAnswer, setIsTypingAnswer }) => {
  if (isTypingAnswer) {
    return <Button type="submit">Відправити відповідь</Button>;
  }

  return (
    <Button
      onClick={() => {
        setIsTypingAnswer(true);
      }}
      type="button"
    >
      Ввести всі слова пісні
    </Button>
  );
};

export default Btn;
