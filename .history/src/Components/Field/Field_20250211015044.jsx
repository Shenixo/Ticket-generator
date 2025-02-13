import "./Field.css"
const Field = ({label_content}) => {
  return (
    <div className="field">
      <label htmlFor={label_content}></label>
    </div>
  )
}

export default Field
