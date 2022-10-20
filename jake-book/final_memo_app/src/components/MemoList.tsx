import type { FC } from 'react'
import styled from 'styled-components'

type Props = {
  memos: Array<string>;
  onClickDelete: (index: number) => void
}

export const MemoList: FC<Props> = ({ memos, onClickDelete }: Props) => {
  return (
    <>
      <SContainer>
        <p>メモ一覧</p>
        <ul>
          { memos.map((memo: string, index: number) => (
            <li key={ memo }>
              <SMemoWrapper>
                <p>{ memo }</p>
                <SButton onClick={ () => onClickDelete(index) }>削除</SButton>
              </SMemoWrapper>
            </li>
          )) }
        </ul>
      </SContainer>
    </>
  )
}

const SButton = styled.button`
  margin-left: 16px;
`

const SContainer = styled.div`
  border: solid 1px #ccc;
  padding: 16px;
  margin: 8px;
`
const SMemoWrapper = styled.div`
  display: flex;
  align-items: center;
`
