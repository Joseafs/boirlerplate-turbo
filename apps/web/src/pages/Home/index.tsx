import { useState } from "react";
import type { FC } from "react";

import { Button } from "@repo/ui/atoms/Button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@repo/ui-base/components/card";

import { ThemeToggle } from "~/ThemeToggle";

export const App: FC = () => {
  const [ready, setReady] = useState(false);

  return (
    <main className="mx-auto max-w-md p-6">
      <Card>
        <CardHeader>
          <CardTitle>
            <h1>Boilerplate Turbo</h1>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-start gap-4">
          <ThemeToggle />
          <Button onClick={() => setReady(true)}>Testar UI</Button>
          {ready && <p role="status">Tudo pronto!</p>}
        </CardContent>
      </Card>
    </main>
  );
};
