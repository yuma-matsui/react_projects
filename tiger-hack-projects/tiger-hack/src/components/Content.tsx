import { FC } from "react";

type Props = {
  content: string;
}

const Content: FC<Props> = ({ content }) => {
  return <p>{ content }</p>
}

export default Content
