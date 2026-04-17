// Antes: import { Estudiante } from '../types/estudiante';
import type { Estudiante } from '../types/estudiante'; // 👈 Añadimos 'type' aquí también

interface Props {
  data: Estudiante;
}


export const UserCard = ({ data }: Props) => {
  return (
    <div style={{ border: '2px solid #646cff', padding: '15px', borderRadius: '10px', margin: '10px', backgroundColor: '#1a1a1a' }}>
      <h3 style={{ color: '#646cff' }}>{data.nombre}</h3>
      <p>ID: {data.id}</p>
      {data.becado && <span style={{ color: 'gold' }}>⭐ Élite</span>}
    </div>
  );
};
