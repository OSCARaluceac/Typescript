// react-ts/src/hooks/useFetch.ts
import { useState, useEffect } from 'react';

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export const useFetch = <T,>(url: string) => {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    // Simulamos una llamada a la API del Gremio
    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1500)); // Latencia de red
        // En un entorno real, aquí usarías fetch(url)
        setState({ data: null, loading: false, error: "Conexión establecida, esperando datos..." });
      } catch (err) {
        setState({ data: null, loading: false, error: "Fallo en la sincronización" });
      }
    };

    fetchData();
  }, [url]);

  return state;
};