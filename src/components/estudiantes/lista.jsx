// 'use client'
// import Link from 'next/link'
// import { use } from 'react'


// export default function Lista({ promesaEstudiantes }) {

//     const estudiantes = use(promesaEstudiantes)


//     return (
//         <div className='flex flex-wrap gap-10'>
//             {estudiantes.map((estudiante) => <Item estudiante={estudiante} key={estudiante.id} />)}
//             {/* <button onClick={() => alert('hola')}>Boton</button> */}
//         </div>
//     )
// }




// function Item({ estudiante }) {

//     return (
//         <Link href={`/estudiantes/${estudiante.id}`} >
//             <div className='p-4 rounded-lg bg-blue-200'>
//                 <p>Nombre de estudiante: {estudiante.nombre} </p>
//                 <p>Tutor legal: {estudiante.tutor_legal}</p>
//                 <p>Fecha de nacimiento: {estudiante.fecha_nacimiento.toLocaleDateString()}</p>
//             </div>
//         </Link>
//     )
// }


'use client'
import { EditIcon, TrashIcon } from 'lucide-react'
import Link from 'next/link'
import { use, useState } from 'react'
import Modal from '@/components/modal'
import Form from '@/components/estudiantes/form'
import { eliminarEstudiante, modificarEstudiante } from '@/lib/actions'


export default function Lista({ promesaEstudiantes }) {

    const dataEstudiantes = use(promesaEstudiantes)
    const [propiedad, setPropiedad] = useState('nombre')
    const [orden, setOrden] = useState('')


    let estudiantes = dataEstudiantes
    if (orden === 'asc') estudiantes = dataEstudiantes.toSorted((a, b) => a[propiedad].localeCompare(b[propiedad]))
    if (orden === 'desc') estudiantes = dataEstudiantes.toSorted((a, b) => b[propiedad].localeCompare(a[propiedad]))

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
                    <option value="tutor_legal">Tutor legal</option>
                    <option value="fecha_nacimiento">Fecha de nacimiento</option>
                </select>
            </fieldset>

            {/* <div className='flex flex-wrap gap-10'> */}
            <div className='grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-10'>
                {estudiantes.map((estudiante) => <Item estudiante={estudiante} key={estudiante.id} />)}
            </div>
        </div >
    )
}

function Item({ estudiante }) {

    return (
        <div className='p-4 rounded-lg bg-blue-200'>
            <Link href={`/estudiantes/${estudiante.id}`} >
                <p>Nombre de estudiante: {estudiante.nombre} </p>
                <p>Tutor legal: {estudiante.tutor_legal}</p>
                <p>Fecha de nacimiento: {estudiante.fecha_nacimiento.toLocaleDateString()}</p>
            </Link>
            <Modal openElement={<EditIcon color='blue' size={32}
                className='border border-blue-500 rounded-full bg-blue-200 p-2 cursor-pointer hover:text-blue-500 hover:bg-blue-300'
            />}
            >   <h2>ACTUALIZAR ESTUDIANTE</h2>
                <Form action={modificarEstudiante} estudiante={estudiante} textSubmit="Actualizar" />
            </Modal>

            <Modal openElement={<TrashIcon color='red' size={32}
                className='border border-red-500 rounded-full bg-red-200 p-2 cursor-pointer hover:text-red-500 hover:bg-red-300'
            />}
            >
                <h2>ELIMINAR ESTUDIANTE</h2>
                <Form action={eliminarEstudiante} estudiante={estudiante} disabled={true} textSubmit="Eliminar" />
            </Modal>
        </div>
    )
}