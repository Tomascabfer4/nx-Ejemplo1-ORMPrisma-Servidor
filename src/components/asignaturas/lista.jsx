'use client'
import { EditIcon, TrashIcon } from 'lucide-react'
import Link from 'next/link'
import { use, useState } from 'react'
import Modal from '@/components/modal'
import Form from '@/components/asignaturas/form'
import { eliminarAsignatura, modificarAsignatura } from '@/lib/actions'


export default function Lista({ promesaAsignaturas }) {

    const dataAsignaturas = use(promesaAsignaturas)
    const [propiedad, setPropiedad] = useState('nombre')
    const [orden, setOrden] = useState('')


    let asignaturas = dataAsignaturas
    if (orden === 'asc') asignaturas = dataAsignaturas.toSorted((a, b) => a[propiedad].localeCompare(b[propiedad]))
    if (orden === 'desc') asignaturas = dataAsignaturas.toSorted((a, b) => b[propiedad].localeCompare(a[propiedad]))

    return (
        <div className="p-4 flex flex-col gap-4">
            <fieldset className="flex flex-wrap gap-2 mb-2">
                <legend className='font-bold'>Ordenación</legend>
                <select
                    value={orden}
                    onChange={(e) => setOrden(e.target.value)}
                    className="p-2 border rounded-md w-fit"
                >
                    <option value="">Orden por defecto</option>
                    <option value="asc">Ascendente</option>
                    <option value="desc">Descendente</option>
                </select>
                <select
                    value={propiedad}
                    onChange={(e) => setPropiedad(e.target.value)}
                    className="p-2 border rounded-md w-fit"
                >
                    <option value="nombre">Nombre</option>
                    <option value="tutor">Tutor</option>
                    <option value="aula">Aula</option>
                </select>
            </fieldset>

            {/* <div className='flex flex-wrap gap-10'> */}
            <div className='grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-10'>
                {asignaturas.map((asignatura) => <Item asignatura={asignatura} key={asignatura.id} />)}
            </div>
        </div >
    )
}

function Item({ asignatura }) {

    return (
        <div className='p-4 rounded-lg bg-blue-200'>
            <Link href={`/asignaturas/${asignatura.id}`} >
                <p>Nombre de asignatura: {asignatura.nombre} </p>
                <p>Profesor de la asignatura: {asignatura.profesor}</p>
                <p>Horas semanales: {asignatura.horas_semana}</p>
            </Link>
            <Modal openElement={<EditIcon color='blue' size={32}
                className='border border-blue-500 rounded-full bg-blue-200 p-2 cursor-pointer hover:text-blue-500 hover:bg-blue-300'
            />}
            >   <h2>ACTUALIZAR ASIGNATURA</h2>
                <Form action={modificarAsignatura} asignatura={asignatura} textSubmit="Actualizar" />
            </Modal>

            <Modal openElement={<TrashIcon color='red' size={32}
                className='border border-red-500 rounded-full bg-red-200 p-2 cursor-pointer hover:text-red-500 hover:bg-red-300'
            />}
            >
                <h2>ELIMINAR ASIGNATURA</h2>
                <Form action={eliminarAsignatura} asignatura={asignatura} disabled={true} textSubmit="Eliminar" />
            </Modal>
        </div>
    )
}