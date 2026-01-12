import { PrismaClient } from "@prisma/client";

async function PaginaGrupos() {
  const prisma = new PrismaClient();

  const grupos = await prisma.grupo.findMany();

  console.log(grupos);

  return (
    <div>
      <h1 className="text-4xl">Grupos</h1>

      {grupos.map((grupo) => (
        <Grupo grupo={grupo} key={grupo.id} />
      ))}
    </div>
  );
}

export default PaginaGrupos;

function Grupo(props) {
  return (
    <div>
      <p>Nombre de grupo: {props.grupo.nombre}</p>
      <p>Tutor del grupo: {props.grupo.tutor}</p>
      <p>Aula: {props.grupo.aula}</p>
    </div>
  );
}
