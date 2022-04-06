import './Input.css'

const Input = (
  {
    label, 
    type, 
    name, 
    placeholder, 
    value, 
    hasError, 
    error, 
    info, 
    className: customClassName = [], 
    onChange: onChangeHandler = () => {}, 
    ...rest
  }
) => {
  
  return(
    <section className={(['input-container', ...customClassName]).join(' ')}>
      
      <input
        className='input'
        type={type}
        name={name}
        placeholder="comments"
        value={value}
        onChange={onChangeHandler}
        {...rest}
      />
      {
        info && <span className='input-info'>{info}</span>
      }
      {
        hasError && <span className='input-error'>{error}</span>
      }
    </section>
  
  )
    }
    



// Input.prototype = {}
export default Input