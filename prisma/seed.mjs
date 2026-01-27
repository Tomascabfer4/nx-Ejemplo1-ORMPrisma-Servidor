import grupos from "./data/grupos.json" with { type: "json" };
import estudiantes from "./data/estudiantes.json" with { type: "json" };
import asignaturas from "./data/asignaturas.json" with { type: "json" };

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  try {
    console.log("Limpiando base de datos y reiniciando IDs...");

    // Limpiamos tablas y reiniciamos contadores
    await prisma.$executeRawUnsafe(
      `TRUNCATE TABLE "Asignatura", "Estudiante", "Grupo" RESTART IDENTITY CASCADE;`,
    );

    console.log("Añadiendo grupos...");
    await prisma.grupo.createMany({
      data: grupos,
      skipDuplicates: true,
    });

    console.log("Añadiendo estudiantes...");
    // --- AQUÍ ESTÁ EL ARREGLO ---
    // Convertimos el string de fecha a un objeto Date real
    const estudiantesData = estudiantes.map((e) => ({
      ...e,
      fecha_nacimiento: new Date(e.fecha_nacimiento),
    }));

    await prisma.estudiante.createMany({
      data: estudiantesData, // Usamos la variable transformada
      skipDuplicates: true,
    });
    // ----------------------------

    console.log("Añadiendo asignaturas...");
    await prisma.asignatura.createMany({
      data: asignaturas,
      skipDuplicates: true,
    });

    console.log("Listo!");
  } catch (error) {
    console.error("Error durante el seed:", error);
    process.exit(1);
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
