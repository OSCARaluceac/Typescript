// Ubicación: react-ts/src/App.tsx
import type { Estudiante } from './types/estudiante'; // 👈 Fíjate en el 'type'
import { useState } from 'react';
import { UserCard } from './components/UserCard';

function App() {
  // Definimos el estado con el contrato Estudiante[] para asegurar la integridad
  const [estudiantes] = useState<Estudiante[]>([
    { 
      id: 'N-01', 
      nombre: 'Niko', 
      edad: 20, 
      email: 'niko@gremio.ts', 
      becado: true 
    },
    { 
      id: 'O-02', 
      nombre: 'Origami Tobiichi', 
      edad: 16, 
      email: 'origami.t@ast.jp', 
      becado: false 
    }
  ]);

  return (
    <div style={{ 
      backgroundColor: '#0f0f0f', 
      minHeight: '100vh', 
      color: '#ffffff',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '40px 20px'
    }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ 
          color: '#646cff', 
          fontSize: '2.5rem',
          margin: '0' 
        }}>
          SISTEMA DE GESTIÓN TÁCTICA
        </h1>
        <div style={{ 
          height: '2px', 
          background: 'linear-gradient(90deg, transparent, #646cff, transparent)', 
          width: '50%', 
          margin: '15px auto' 
        }} />
      </header>

      <main style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '25px', 
        flexWrap: 'wrap' 
      }}>
        {/* Mapeo seguro de la lista de estudiantes */}
        {estudiantes.map((estudiante) => (
          <UserCard key={estudiante.id} data={estudiante} />
        ))}
      </main>

      <footer style={{ 
        marginTop: '50px', 
        color: '#444', 
        fontSize: '0.8rem' 
      }}>
        Protocolo de sincronización activo. Terminal de Niko detectada.
      </footer>s
    </div>
  );
}

export default App;