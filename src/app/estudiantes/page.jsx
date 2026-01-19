import ListaEstudiantes from '@/components/estudiantes/lista'
import { obtenerEstudiantes } from '@/lib/data'
import { Suspense } from 'react'


function PaginaEstudiantes() {

    const promesaEstudiantes = obtenerEstudiantes()  // Promesa, no usamos AWAIT

    return (
        <div>
            <h1 className='text-4xl'>Estudiantes</h1>

            <Suspense fallback={<p className='text-2xl text-blue-400'>Cargando...</p>}>
                <ListaEstudiantes
                    promesaEstudiantes={promesaEstudiantes}
                />
            </Suspense>
        </div>
    )
}

export default PaginaEstudiantes


