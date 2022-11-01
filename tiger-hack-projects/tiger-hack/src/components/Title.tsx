import { FC } from "react";

type Props = {
  title: string;
}

const Title: FC<Props> = ({ title }) => {
  return <h1>{ title }</h1>
}

export default Title
