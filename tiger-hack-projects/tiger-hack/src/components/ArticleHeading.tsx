import { FC, useCallback, useState } from "react";
import { Article } from "../types/Article"
import Content from "./Content";
import PublishButton from "./PublishButton";
import Title from "./Title";
import TitleChangeInput from "./TitleChangeInput";

type Props = {
  article: Article;
}

const ArticleHeading: FC<Props> = ({ article }) => {
  const [isPublished, setIsPublished] = useState<boolean>(article.published)

  const onClickChangePublished = useCallback(() => {
    setIsPublished(!isPublished)
  }, [isPublished])

  return (
    <>
      { isPublished &&
        <div>
          <Title title={article.title} />
          <Content content={article.content} />
          <hr />
          <TitleChangeInput title={article.title} />
        </div>
      }
      <PublishButton
        isPublished={isPublished}
        onClickChangePublish={onClickChangePublished}
      />
    </>
  )
}

export default ArticleHeading
