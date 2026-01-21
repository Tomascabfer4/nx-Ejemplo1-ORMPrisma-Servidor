import Form from '@/components/asignaturas/form'
import ListaAsignaturas from '@/components/asignaturas/lista'
import { obtenerAsignaturas } from '@/lib/data'
import { Suspense } from 'react'
import { PlusIcon } from 'lucide-react'
import Modal from '@/components/modal'
import { insertarAsignatura } from '@/lib/actions'

function PaginaAsignaturas() {

    const promesaAsignaturas = obtenerAsignaturas()  // Promesa, no usamos AWAIT

    return (
        <div>
            <h1 className='text-4xl'>Asignaturas</h1>

            <Modal openElement={
                <PlusIcon color='green' size={32}
                    className='border border-green-500 rounded-full bg-green-200 p-2 cursor-pointer hover:text-green-500 hover:bg-green-300'
                />}>
                <Form action={insertarAsignatura} />
            </Modal>

            <Suspense fallback={<p className='text-2xl text-blue-400'>Cargando...</p>}>
                <ListaAsignaturas
                    promesaAsignaturas={promesaAsignaturas}
                />
            </Suspense>
        </div>
    )
}

export default PaginaAsignaturas