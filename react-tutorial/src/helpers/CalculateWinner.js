const calculateWinner =  squares => {
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ]

  const isGameSet = ([a, b, c]) => (
    squares[a] &&
    (squares[a] === squares[b]) &&
    (squares[a] === squares[c])
  )

  for (let i = 0; i < lines.length; i++) {
    const [a] = lines[i]
    if (isGameSet(lines[i])) return squares[a]
  }
  return null
}

export default calculateWinner
