interface UserProps {
    nombre: string;
    rol: "Admin" | "Estudiante" | "Invitado"; // Unión discriminada básica
    puntos: number;
  }
  
  export const UserCard = ({ nombre, rol, puntos }: UserProps) => {
    return (
      <div style={{ border: '1px solid #646cff', padding: '1rem', borderRadius: '8px', marginTop: '1rem' }}>
        <h3>👤 {nombre}</h3>
        <p>Rango: <strong>{rol}</strong></p>
        <p>Puntos de Misión: {puntos}</p>
      </div>
    );
  };