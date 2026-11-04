import { useState } from "react";
import type { FC } from "react";

import { Button } from "@repo/ui/atoms/Button";

export const App: FC = () => {
  const [ready, setReady] = useState(false);

  return (
    <main>
      <h1>Boilerplate Turbo</h1>
      <Button onClick={() => setReady(true)}>Testar UI</Button>
      {ready && <p role="status">Tudo pronto!</p>}
    </main>
  );
};
