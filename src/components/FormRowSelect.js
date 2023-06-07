
export const FormRowSelect = ({status, labelText, onHandleChange, statusOptions = [], name}) => {
    return (
    <div className='form-row'>
        <label className='form-label'>
            {labelText}
        </label>
        <select
            onChange={onHandleChange}
            name={name}
            value={status}
            className='form-select'
        >
            {statusOptions.map((stat, index) => (
                <option value={stat} key={index}>
                    {stat}
                </option>
            ))}
        </select>
    </div>
  )
}
