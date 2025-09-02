// Definimos a "forma" dos dados que este componente espera receber.
// Isso é graças ao TypeScript e nos ajuda a evitar erros.
interface ProfileCardProps {
  imageUrl: string;
  name: string;
  title: string;
  github?: string; // <- nova prop opcional
}

// O componente é apenas uma função que recebe props e retorna JSX.
// Usamos a desestruturação ({ name, title, imageUrl }) para pegar as props diretamente.
function ProfileCard({ name, title, imageUrl, github }: ProfileCardProps) {
  return (
    <div className="card">
      <img src={imageUrl} alt={`Foto de ${name}`} className="card-img" />
      <h2>{name}</h2>
      <p>{title}</p>

      {/* Se tiver link do GitHub, exibe abaixo */}
      {github && (
        <p>
          <a href={github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </p>
      )}
    </div>
  );
}

export default ProfileCard;
