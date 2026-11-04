import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Button } from '@repo/ui/button';

const root = document.getElementById('root');

if (!root) throw new Error('Elemento #root não encontrado');

createRoot(root).render(
  <StrictMode>
    <main>
      <h1>Boilerplate Turbo</h1>
      <Button onClick={() => window.alert('Tudo pronto!')}>Testar UI</Button>
    </main>
  </StrictMode>,
);
