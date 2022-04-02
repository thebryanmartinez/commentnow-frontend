import './WritePost.css'
import { PrimaryButton } from '../Button/Button'


const WritePost = () => {
  return (
    <div className="write-post-container">
      <textarea name="writePost" id="writePost" placeholder="Que tiene en mente hoy?" cols="30" rows="5" maxlength="150"></textarea>
      <div>
        <PrimaryButton>Publicar</PrimaryButton>
      </div>
    </div>
  )
}

export default WritePost