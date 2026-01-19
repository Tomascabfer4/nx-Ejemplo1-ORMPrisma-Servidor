'use client'
import { insertarGrupo } from '@/lib/actions'

export default function InsertarGrupo() {
    return (
        <form action={insertarGrupo} className="p-4 rounded-lg max-w-md my-4">
            <h2 className="text-xl font-bold mb-4">Nuevo Grupo</h2>
            <div className="flex flex-col gap-2">
                <input
                    name="nombre"
                    placeholder="Nombre del grupo"
                    className="p-2 rounded"
                    required
                />
                <input
                    name="tutor"
                    placeholder="Tutor"
                    className="p-2 rounded"
                    required
                />
                <input
                    name="aula"
                    placeholder="Aula"
                    className="p-2 rounded"
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 font-bold"
                >
                    Insertar Grupo
                </button>
            </div>
        </form>
    )
}
