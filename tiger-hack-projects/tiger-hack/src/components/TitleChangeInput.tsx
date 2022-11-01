import { ChangeEvent, FC, useState } from "react";

type Props = {
  title: string;
}

const TitleChangeInput: FC<Props> = ({ title }) => {
  const [editedTitle, setEditedTitle] = useState<string>(title)

  const onChangeUpdateTitle = (e: ChangeEvent<HTMLInputElement>) => setEditedTitle(e.target.value)

  return (
    <div>
      <p>更新されたタイトル: {editedTitle}</p>
      <input
        type="text"
        value={editedTitle}
        onChange={onChangeUpdateTitle}
      />
    </div>
  )
}

export default TitleChangeInput
