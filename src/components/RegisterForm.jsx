import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import utnLogo from '../assets/utn.png'

const RegisterForm = ({ userType }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    password: '',
    ...(userType === 'empresa' ? { razonSocial: '', cuit: '' } : { legajo: '' })
  })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Aquí implementarías la lógica de registro
    try {
      // Enviar datos al backend
      navigate(`/${userType}/login`)
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <div className="flex justify-center mb-6">
          <img src={utnLogo} alt="UTN Logo" className="h-20" />
        </div>

        <h1 className="text-2xl font-bold text-center mb-6">Registro de {userType === 'empresa' ? 'Empresa' : 'Estudiante'}</h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {userType === 'empresa' ? (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Razón Social</label>
                <input
                  type="text"
                  name="razonSocial"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">CUIT</label>
                <input
                  type="number"
                  name="cuit"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </>
          ) : (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Legajo</label>
              <input
                type="number"
                name="legajo"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
            <input
              type="password"
              name="password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow"
          >
            Registrarse
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          ¿Ya tienes cuenta?{' '}
          <a 
            href={`/${userType}/login`} 
            className="text-blue-600 hover:text-blue-800"
          >
            Iniciar Sesión
          </a>
        </p>
      </div>
    </div>
  )
}

export default RegisterForm