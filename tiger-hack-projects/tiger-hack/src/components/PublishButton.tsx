import { FC } from "react";

type Props = {
  isPublished: boolean;
  onClickChangePublish: () => void;
}

const PublishButton: FC<Props> = ({ isPublished, onClickChangePublish }) => {
  const buttonLabel = isPublished ? '非公開' : '公開'
  return <button onClick={onClickChangePublish}>{ buttonLabel }</button>
}

export default PublishButton
