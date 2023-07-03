import React from 'react'
import { ItemContainer } from './style'

const ItemRepo = ({repo, handleRemoveApp}) => {

  const handleRemove = () => {
    handleRemoveApp(repo.id)
  }

  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} rel="noreferrer" target="_blank">Ver repositório</a>
      <br/>
      <a href={handleRemoveApp}  onClick={handleRemove} className='remover' rel="noreferrer">Remover</a>
      <hr/>
    </ItemContainer>
  )
}

export default ItemRepo
