import { Page } from "./style";

interface Props {
  content: string;
}

const Title: React.FC<Props> = ({content}) => {
  return <Page>{content}</Page>;
};

export default Title;
