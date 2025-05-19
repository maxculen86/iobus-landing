# IOBus Landing Page

Landing page moderna y responsive para IOBus, una plataforma de gestión de transporte público.

## 🚀 Tecnologías

- [Remix](https://remix.run/) - Framework web full-stack
- [React](https://reactjs.org/) - Biblioteca UI
- [TypeScript](https://www.typescriptlang.org/) - Superset tipado de JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utility-first
- [Lucide Icons](https://lucide.dev/) - Iconos modernos
- [Formik](https://formik.org/) - Manejo de formularios
- [Yup](https://github.com/jquense/yup) - Validación de esquemas

## 📦 Características

- Diseño responsive y moderno
- Modo oscuro/claro
- Formulario de contacto con validación
- Integración con WhatsApp
- Animaciones y transiciones suaves
- Optimizado para SEO
- Accesibilidad (WCAG)

## 🛠️ Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/your-username/iobus-landing.git
cd iobus-landing
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno:
```bash
cp .env.example .env
```
Editar `.env` con tus configuraciones.

4. Iniciar el servidor de desarrollo:
```bash
npm run dev
```

## ⚙️ Configuración

### Variables de Entorno

Crear un archivo `.env` en la raíz del proyecto:

```env
# Configuración de correo
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASS=your-password

# Configuración de WhatsApp
WHATSAPP_NUMBER=5491122553041
WHATSAPP_DEFAULT_MESSAGE=Hola, me gustaría solicitar una demo de iobus
```

### Configuración de Contacto

Editar `app/config/contact.ts` para personalizar:
- Números de WhatsApp
- Mensajes por defecto
- Límites de solicitudes
- Dominios permitidos

## 📱 Responsive Design

La landing page está optimizada para:
- Móviles (< 640px)
- Tablets (640px - 1024px)
- Desktop (> 1024px)

## 🎨 Temas

- Modo claro/claro por defecto
- Modo oscuro con `dark:` classes de Tailwind
- Colores personalizables en `tailwind.config.js`

## 📄 Estructura del Proyecto

```
iobus-landing/
├── app/
│   ├── components/     # Componentes React
│   ├── config/        # Configuraciones
│   ├── hooks/         # Custom hooks
│   ├── routes/        # Rutas de Remix
│   ├── styles/        # Estilos globales
│   └── utils/         # Utilidades
├── public/            # Assets estáticos
└── ...
```

## 🚀 Despliegue

1. Construir para producción:
```bash
npm run build
```

2. Iniciar en producción:
```bash
npm start
```

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye para producción
- `npm start` - Inicia en producción
- `npm run lint` - Ejecuta el linter
- `npm run typecheck` - Verifica tipos TypeScript

## 🤝 Contribuir

1. Fork el proyecto
2. Crear una rama (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

## 📞 Contacto

- Email: contacto@aiobus.com
- WhatsApp: +54 9 11 2255-3041
