import './index.css'

const DenominationItem = props => {
  const {DenominationMoney, onDelete} = props
  const {value} = DenominationMoney

  const onDeleteButton = () => {
    onDelete(value)
  }

  return (
    <li>
      <button type="button" className="button" onClick={onDeleteButton}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
