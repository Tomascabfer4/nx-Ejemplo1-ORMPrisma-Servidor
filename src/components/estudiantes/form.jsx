
import { insertarEstudiante } from "@/lib/actions"

export default function Form({ action, estudiante, disabled = false, textSubmit = "Enviar" }) {

    return (
        <form action={action} className="flex flex-col gap-2 border p-4 border-blue-400">
            <input type="hidden" name="id" value={estudiante?.id} />
            <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                defaultValue={estudiante?.nombre}
                disabled={disabled}
            />
            <input
                type="text"
                name="foto"
                placeholder="Foto"
                defaultValue={estudiante?.foto}
                disabled={disabled}
            />
            <input
                type="text"
                name="tutor_legal"
                placeholder="Tutor legal"
                defaultValue={estudiante?.tutor_legal}
                disabled={disabled}
            />
            <input
                type="date"
                name="fecha_nacimiento"
                placeholder="Fecha de nacimiento"
                defaultValue={estudiante?.fecha_nacimiento?.toISOString().split('T')[0]}
                disabled={disabled}
            />
            <button type="submit">{textSubmit}</button>
        </form>
    )
}