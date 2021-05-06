const style = {
  width: 34,
  height: 34,
  marginTop: '-1px',
  marginLeft: '-1px',
  border: '1px solid #999',
  fontWeight: 'bold',
  fontSize: 24,
  lineHeight: '34px',
}

export const Square = ({ value, onClick }) => {
  return (
    <button style={style} onClick={onClick}>
      {value}
    </button>
  )
}
