// src/components/Demos/PraxisHamburg/IndexHamburg.tsx

import HeaderHamburg from "@/components/Demos/PraxisHamburg/HeaderHamburg";

export default function IndexHamburg() {
  return (
    <>
      <HeaderHamburg />
      <main>
        <h1>IndexHamburg OK</h1>
        <p>
          Wenn du das siehst, ist die Route ok und der Crash kommt aus
          einer importierten Komponente.
        </p>
      </main>
    </>
  );
}