// Ubicación: react-ts/src/App.tsx
import { useState } from 'react';
import type { Estudiante } from './types/estudiante';
import { UserCard } from './components/UserCard';
import { ListaGenerica } from './components/ListaGenerica';
import { useFetch } from './hooks/useFetch';

function App() {
  // 1. Cargamos el estado con los residentes de Hinamizawa
  const [estudiantes] = useState<Estudiante[]>([
    { 
      id: 'RE-01', 
      nombre: 'Rena Ryuugu', 
      edad: 15, 
      email: 'rena.r@hinamizawa.jp', 
      becado: true 
    },
    { 
      id: 'RI-02', 
      nombre: 'Rika Furude', 
      edad: 10, 
      email: 'rika.f@shrine.jp', 
      becado: true 
    },
    { 
      id: 'KE-03', 
      nombre: 'Keiichi Maebara', 
      edad: 16, 
      email: 'k.maebara@hinamizawa.jp', 
      becado: false 
    },
    { 
      id: 'SA-04', 
      nombre: 'Satoko Houjou', 
      edad: 11, 
      email: 'satoko.h@trapmaster.jp', 
      becado: false 
    }
  ]);

  // 2. Misiones del ciclo de junio de 1983
  const misionesHinamizawa = [
    "Festival del Watanagashi: Seguridad del Santuario",
    "Investigación en la Clínica Irie",
    "Sobrevivir al ciclo de junio de 1983",
    "Duelo de juegos de mesa en el club"
  ];

  // Simulamos la carga asíncrona de la Práctica 4
  const { loading } = useFetch<Estudiante[]>('/api/hinamizawa/v1');

  if (loading) {
    return (
      <div style={{ 
        backgroundColor: '#0f0f0f', 
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        color: '#646cff'
      }}>
        <h2>Sincronizando fragmentos de tiempo...</h2>
      </div>
    );
  }

  return (
    <div style={{ 
      backgroundColor: '#0f0f0f', 
      minHeight: '100vh', 
      color: '#ffffff',
      fontFamily: 'system-ui, sans-serif',
      padding: '40px 20px'
    }}>
      <header style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ 
          color: '#e11d48', // Un rojo intenso para la temática de Higurashi
          fontSize: '2.5rem', 
          margin: '0',
          textShadow: '0 0 15px rgba(225, 29, 72, 0.4)'
        }}>
          HINAMIZAWA: ARCHIVOS DEL GREMIO
        </h1>
        <p style={{ color: '#888' }}>Operativo: Key | Estado: Sincronizado</p>
        <div style={{ 
          height: '2px', 
          background: 'linear-gradient(90deg, transparent, #e11d48, transparent)', 
          width: '60%', 
          margin: '20px auto' 
        }} />
      </header>

      <main style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Renderizado de Personajes */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ borderLeft: '4px solid #e11d48', paddingLeft: '15px', marginBottom: '30px' }}>
            Residentes Detectados
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', flexWrap: 'wrap' }}>
            {estudiantes.map((personaje) => (
              <UserCard key={personaje.id} data={personaje} />
            ))}
          </div>
        </section>

        {/* Renderizado con Lista Genérica */}
        <section style={{ 
          backgroundColor: '#161616', 
          padding: '30px', 
          borderRadius: '15px',
          border: '1px solid #222' 
        }}>
          <h2 style={{ color: '#646cff', marginBottom: '20px' }}>📜 Registro de Eventos</h2>
          <ListaGenerica 
            items={misionesHinamizawa}
            renderItem={(mision) => (
              <div style={{ 
                padding: '12px', 
                borderBottom: '1px solid #222',
                color: '#bbb',
                display: 'flex',
                alignItems: 'center'
              }}>
                <span style={{ color: '#e11d48', marginRight: '10px' }}>◆</span> {mision}
              </div>
            )}
          />
        </section>
      </main>

      <footer style={{ marginTop: '60px', textAlign: 'center', color: '#333', fontSize: '0.8rem' }}>
        "Nipah~".
      </footer>
    </div>
  );
}

export default App;