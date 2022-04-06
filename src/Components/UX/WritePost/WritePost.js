import './WritePost.css'
import { PrimaryButton } from '../Button/Button'
import Input from '../Input/Input'

const WritePost = ({txtWritePostValue, onChange: onChangeHandler, onConfirm: onConfirmClick}) => {
  return (
    <div className="write-post-container">
      <Input
          type="text"
          name="txtWritePost"
          placeholder="Que tiene en mente hoy?"
          value={txtWritePostValue}
          onChange={onChangeHandler}
        />
      <div>
        <PrimaryButton onClick={onConfirmClick}>Publicar</PrimaryButton>
      </div>
    </div>
  )
}

export default WritePost