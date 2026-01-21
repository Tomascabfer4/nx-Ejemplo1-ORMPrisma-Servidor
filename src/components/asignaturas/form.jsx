import { insertarAsignatura } from "@/lib/actions"

export default function Form({ action, asignatura, disabled = false, textSubmit = "Enviar" }) {

    return (
        <form action={action} className="flex flex-col gap-2 border p-4 border-blue-400">
            <input type="hidden" name="id" value={asignatura?.id} />
            <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                defaultValue={asignatura?.nombre}
                disabled={disabled}
            />
            <input
                type="text"
                name="profesor"
                placeholder="Profesor"
                defaultValue={asignatura?.profesor}
                disabled={disabled}
            />
            <input
                type="text"
                name="horas_semana"
                placeholder="Horas semana"
                defaultValue={asignatura?.horas_semana}
                disabled={disabled}
            />
            <button type="submit">{textSubmit}</button>
        </form>
    )
}