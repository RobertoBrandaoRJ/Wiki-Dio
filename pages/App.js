import { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import logo from '../img/logo.png'
import { Container } from './style';
import { api } from '../services/api'

function App() {

  const [currentRepo, setCurrentRepo] = useState('')
  const [repos, setRepos] = useState([])

  const handleSearchRepo = async () => {
    const { data } = await api.get(`/repos/${currentRepo}`)

    if (data.id) {

      const isExist = repos.find(repo => repo.id === data.id)

      if (!isExist) {
        setRepos(prev => [...prev, data])
        setCurrentRepo('')
      }
    }
  }

  const handleRemoveApp = (id) => {
    const temp = repos.filter(repo => repo.id !== id)

    setRepos(temp)
  }

  return (
    <Container >
      <img src={logo} width={110} height={70} />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => <ItemRepo handleRemoveApp={handleRemoveApp} repo={repo} />)}

    </Container>
  );
}

export default App;

