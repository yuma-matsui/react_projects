import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { Album } from "../types/album"

const sleep = (ms: number): Promise<void> => {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

const fetchAlbums = async () => {
  const result = await axios.get<Array<Album>>('https://jsonplaceholder.typicode.com/albums')
  await sleep(5000)
  return result.data
}

export const AlbumList = () => {
  const { data } = useQuery<Array<Album>>(['albums'], fetchAlbums)

  return (
    <div
      style={{
        height: '300px',
        border: '2px solid gray',
        background: 'cornsilk',
        overflowY: 'scroll'
      }}
    >
      <h2>アルバム</h2>
      { data?.map(album => <p key={album.id}>{album.title}</p>) }
    </div>
  )
}

