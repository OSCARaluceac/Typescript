interface ListaProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
  }
  
  export const ListaGenerica = <T,>({ items, renderItem }: ListaProps<T>) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {items.map((item, index) => (
          <div key={index}>
            {renderItem(item)}
          </div>
        ))}
      </div>
    );
  };