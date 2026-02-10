import styles from './Contacto.module.css';
import { useState } from 'react';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    servicio: '',
    asunto: '',
    mensaje: '',
    contactoPor: 'email'
  });

  const [enviado, setEnviado] = useState(false);

  const servicios = [
    'Selecciona un servicio',
    'Generador de Contenido IA',
    'Chatbot para Pymes',
    'Análisis de Datos IA',
    'Optimización de Procesos',
    'Marketing Automatizado',
    'Predicción de Ventas',
    'Deteción de Fraudes',
    'Segmentación de Clientes',
    'Otro'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validar campos requeridos
    if (!formData.nombre || !formData.email || !formData.telefono || !formData.servicio || formData.servicio === 'Selecciona un servicio' || !formData.mensaje) {
      alert('Por favor completa todos los campos requeridos');
      return;
    }

    // Aquí puedes agregar lógica para enviar el email
    console.log('Datos del formulario:', formData);
    
    // Simular envío exitoso
    setEnviado(true);
    setTimeout(() => {
      setEnviado(false);
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        empresa: '',
        servicio: '',
        asunto: '',
        mensaje: '',
        contactoPor: 'email'
      });
    }, 3000);
  };

  return (
    <section id="contacto" className={styles.contacto}>
      <div className={styles.contactoHeader}>
        <h1 className={styles.contactoTitle}>Contacto</h1>
        <p className={styles.contactoDescript}>¿Interesado en nuestros servicios? Contáctanos ahora mismo.</p>
      </div>

      <div className={styles.formularioContainer}>
        {enviado ? (
          <div className={styles.mensajeExito}>
            <h2>¡Gracias por tu mensaje!</h2>
            <p>Nos pondremos en contacto contigo pronto.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.formulario}>
            <div className={styles.filaFormulario}>
              <div className={styles.grupoFormulario}>
                <label htmlFor="nombre">Nombre *</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre completo"
                  required
                />
              </div>
              <div className={styles.grupoFormulario}>
                <label htmlFor="email">Correo Electrónico *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  required
                />
              </div>
            </div>

            <div className={styles.filaFormulario}>
              <div className={styles.grupoFormulario}>
                <label htmlFor="telefono">Teléfono *</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="+34 123 456 789"
                  required
                />
              </div>
              <div className={styles.grupoFormulario}>
                <label htmlFor="empresa">Empresa (Opcional)</label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  placeholder="Nombre de tu empresa"
                />
              </div>
            </div>

            <div className={styles.filaFormulario}>
              <div className={styles.grupoFormulario}>
                <label htmlFor="servicio">Tipo de Servicio *</label>
                <select
                  id="servicio"
                  name="servicio"
                  value={formData.servicio}
                  onChange={handleChange}
                  required
                >
                  {servicios.map((servicio, index) => (
                    <option key={index} value={servicio}>
                      {servicio}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.grupoFormulario}>
                <label htmlFor="contactoPor">Preferencia de Contacto</label>
                <select
                  id="contactoPor"
                  name="contactoPor"
                  value={formData.contactoPor}
                  onChange={handleChange}
                >
                  <option value="email">Por Correo Electrónico</option>
                  <option value="telefono">Por Teléfono</option>
                  <option value="ambos">Por Ambos</option>
                </select>
              </div>
            </div>

            <div className={styles.grupoFormulario}>
              <label htmlFor="asunto">Asunto (Opcional)</label>
              <input
                type="text"
                id="asunto"
                name="asunto"
                value={formData.asunto}
                onChange={handleChange}
                placeholder="Asunto de tu consulta"
              />
            </div>

            <div className={styles.grupoFormulario}>
              <label htmlFor="mensaje">Detalles y Comentarios *</label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="Cuéntanos en detalle qué necesitas..."
                rows="6"
                required
              />
            </div>

            <button type="submit" className={styles.botonEnviar}>
              Enviar Mensaje
            </button>
          </form>
        )}
      </div>
    </section>
  );
}