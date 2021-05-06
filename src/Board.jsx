import { Square } from './Square'

const style = {
  display: 'flex',
  flexWrap: 'wrap',
  width: 99,
}

export const Board = ({ squares, onClick }) => {
  return (
    <div style={style}>
      {squares.map((value, i) => {
        return <Square key={i} value={value} onClick={() => onClick(i)} />
      })}
    </div>
  )
}
