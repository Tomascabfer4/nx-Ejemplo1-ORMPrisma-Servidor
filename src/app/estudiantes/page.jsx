import Form from '@/components/estudiantes/form'
import ListaEstudiantes from '@/components/estudiantes/lista'
import Modal from '@/components/modal'
import { obtenerEstudiantes } from '@/lib/data'
import { insertarEstudiante } from '@/lib/actions'
import { Suspense } from 'react'
import { PlusIcon } from 'lucide-react'


function PaginaEstudiantes() {

    const promesaEstudiantes = obtenerEstudiantes()  // Promesa, no usamos AWAIT

    return (
        <div>
            <h1 className='text-4xl'>Estudiantes</h1>

            <Modal openElement={
                <PlusIcon color='green' size={32}
                    className='border border-green-500 rounded-full bg-green-200 p-2 cursor-pointer hover:text-green-500 hover:bg-green-300'
                />}>
                <Form action={insertarEstudiante} />
            </Modal>

            <Suspense fallback={<p className='text-2xl text-blue-400'>Cargando...</p>}>
                <ListaEstudiantes
                    promesaEstudiantes={promesaEstudiantes}
                />
            </Suspense>
        </div>
    )
}

export default PaginaEstudiantes