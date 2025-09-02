// 1. Importamos o CSS para estilização e nosso novo componente.
import './App.css'; // Supondo que os estilos do card estejam aqui.
import ProfileCard from './components/ProfileCard';

function App() {
  // 2. Nossos dados continuam sendo um simples array de objetos.
  const profilesData = [
    {   
        id: 1,
        imageUrl: 'https://github.com/nicollasszr.png',
        name: 'Nicollas Souza',
        title: 'Estudante de engenharia de software',
        Github: 'https://github.com/nicollasszr'
    },
    {
      id: 2, 
      imageUrl: 'https://github.com/marcustav.png', 
      name: 'Marcus', 
      title: 'Estudante de Engenharia de Software',
      Github: 'https://github.com/marcustav'
    },
    {
      id: 3, 
      imageUrl: 'https://github.com/Taylanne02.png', 
      name: 'Taylanne', 
      title: 'Estudante de ciência da computação',
      Github: 'https://github.com/Taylanne02'
    },
  ];

  // 3. A mágica do React: usamos .map() para transformar dados em componentes.
  return (
    <div className="App">
      <h1>Exemplo com React</h1>
      <div className="profiles-container">
        {profilesData.map(profile => (
          <ProfileCard
            key={profile.id} // Chave especial para o React otimizar a lista
            name={profile.name}
            title={profile.title}
            imageUrl={profile.imageUrl}
            github={profile.Github}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
