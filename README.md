# 🛍️ PoshitoStore - E-commerce React Application

Una aplicación de comercio electrónico moderna construida con React, TypeScript y Tailwind CSS que consume la API de FakeStore para mostrar productos y gestionar un carrito de compras.

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación y Uso](#-instalación-y-uso)
- [Funcionalidades](#-funcionalidades)
- [Componentes](#-componentes)
- [Hooks Personalizados](#-hooks-personalizados)
- [Servicios API](#-servicios-api)
- [Rutas](#-rutas)
- [Temas y Estilos](#-temas-y-estilos)

## ✨ Características

- 🎨 **Diseño Responsivo**: Interfaz adaptativa para dispositivos móviles y desktop
- 🌙 **Modo Oscuro/Claro**: Toggle entre temas con persistencia en localStorage
- 🛒 **Carrito de Compras**: Gestión completa con localStorage
- 📱 **Navegación SPA**: Enrutamiento con Wouter
- 🎯 **Filtrado por Categorías**: Exploración de productos por categorías
- 💰 **Cálculo de Costos**: Subtotal, impuestos y envío automático
- ⚡ **Rendimiento Optimizado**: React Compiler y Vite para desarrollo rápido

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 19 (Experimental) con TypeScript
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 4.1.10
- **Routing**: Wouter 3.7.1
- **Icons**: React Icons 5.5.0
- **API**: FakeStore API
- **Package Manager**: Bun
- **Linting**: ESLint 9.25.0

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Button.tsx      # Botón personalizable
│   ├── CardCategory.tsx # Tarjeta de categoría
│   ├── ChangeModeButton.tsx # Botón de cambio de tema
│   ├── IconAI.tsx      # Icono SVG animado
│   ├── Inputs.tsx      # Componente de entrada
│   ├── ProductCard.tsx # Tarjeta de producto
│   └── RatingStars.tsx # Sistema de calificación
├── hooks/              # Hooks personalizados
│   ├── useChangeMode.ts # Gestión de tema
│   ├── useCost.ts      # Cálculo de costos
│   └── useGetProducts.ts # Obtención de productos
├── layout/             # Componentes de layout
│   ├── Footer.tsx      # Pie de página
│   ├── Header.tsx      # Encabezado con navegación
│   └── Layout.tsx      # Layout principal
├── pages/              # Páginas de la aplicación
│   ├── Carts.tsx       # Página del carrito
│   ├── Collections.tsx # Página de colecciones
│   ├── Explore.tsx     # Página de exploración
│   ├── Home.tsx        # Página principal
│   ├── NoFound.tsx     # Página 404
│   └── ProductDetails.tsx # Detalles del producto
├── services/           # Servicios de API
│   └── api.ts          # Funciones de API
├── types/              # Definiciones de tipos
│   └── index.ts        # Interfaces TypeScript
├── index.css           # Estilos globales
├── main.tsx           # Punto de entrada
└── Router.tsx         # Configuración de rutas
```

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js 18+ o Bun
- Navegador moderno

### Instalación

1. **Clonar el repositorio**

   ```bash
   git clone <repository-url>
   cd storeAPI
   ```

2. **Instalar dependencias**

   ```bash
   bun install
   # o
   npm install
   ```

3. **Ejecutar en desarrollo**

   ```bash
   bun dev
   # o
   npm run dev
   ```

4. **Construir para producción**
   ```bash
   bun run build
   # o
   npm run build
   ```

## 🎯 Funcionalidades

### 🏠 Página Principal (Home)

- Muestra todos los productos disponibles
- Filtrado por categorías mediante parámetros de URL
- Diseño responsive con grid adaptativo
- Loading states y manejo de errores

### 🛍️ Detalles del Producto

- Vista detallada con imagen, título, descripción y precio
- Botones para añadir al carrito y comprar
- Diseño responsive con layout flexible

### 🛒 Carrito de Compras

- Gestión completa del carrito con localStorage
- Cálculo automático de subtotal, impuestos y envío
- Eliminación de productos
- Layout de dos columnas (productos + resumen)

### 📚 Colecciones

- Categorías predefinidas con imágenes
- Navegación a productos filtrados por categoría
- Grid responsive adaptativo

### 🌙 Sistema de Temas

- Toggle entre modo claro y oscuro
- Persistencia en localStorage
- Transiciones suaves
- Aplicación global con CSS classes

## 🧩 Componentes

### Button

Componente de botón reutilizable con múltiples variantes:

- **Variantes**: `primary`, `secondary`, `disabled`
- **Tamaños**: `sm`, `base`, `xl`
- **Props**: `label`, `onClick`, `className`

### ProductCard

Tarjeta de producto con funcionalidades de carrito:

- **Funcionalidades**: Añadir/eliminar del carrito
- **Props**: `id`, `img`, `title`, `price`
- **Estados**: Diferentes comportamientos según la ruta

### CardCategory

Tarjeta para mostrar categorías de productos:

- **Efectos**: Hover con escala y sombra
- **Props**: `img`, `title`
- **Animaciones**: Transiciones CSS

### ChangeModeButton

Botón para cambiar entre temas:

- **Iconos**: Sol y luna según el estado
- **Props**: `onClick`, `isDarkMode`

### IconAI

Componente SVG animado para la página Explore:

- **Animaciones**: Rotación en diferentes velocidades
- **Gradientes**: Múltiples colores con efectos de brillo
- **Responsive**: Adaptable a diferentes tamaños

## 🎣 Hooks Personalizados

### useGetProducts

Hook para obtener y filtrar productos:

```typescript
const { productFiltered, loading, error } = useGetProducts(category);
```

- **Funcionalidades**: Fetch de API, filtrado por categoría
- **Estados**: Loading, error, productos filtrados

### useCost

Hook para calcular costos del carrito:

```typescript
const { subTotal, envio, impuesto, total } = useCost(carrito);
```

- **Cálculos**: Subtotal, impuestos (10%), envío ($1.5 por producto)
- **Retorno**: Valores formateados como strings

### useChangeMode

Hook para gestión de tema:

```typescript
const { theme, toggleTheme } = useChangeMode();
```

- **Funcionalidades**: Toggle de tema, persistencia en localStorage
- **Estados**: `light` o `dark`

## 🌐 Servicios API

### api.ts

Funciones para consumir FakeStore API:

- `getAllProduct()`: Obtiene todos los productos
- `getProductById(id)`: Obtiene producto específico por ID

## 🛣️ Rutas

| Ruta           | Componente     | Descripción                              |
| -------------- | -------------- | ---------------------------------------- |
| `/`            | Home           | Página principal con todos los productos |
| `/product/:id` | ProductDetails | Detalles de un producto específico       |
| `/collections` | Collections    | Categorías de productos                  |
| `/cart`        | Carts          | Carrito de compras                       |
| `/explore`     | Explore        | Página futura con IA                     |
| `/:category`   | Home           | Productos filtrados por categoría        |
| `*`            | NoFound        | Página 404                               |

## 🎨 Temas y Estilos

### Tailwind CSS

- **Configuración**: Tailwind CSS 4.1.10 con modo oscuro
- **Responsive**: Breakpoints personalizados
- **Animaciones**: CSS custom properties y keyframes

### Modo Oscuro

- **Implementación**: CSS classes con JavaScript
- **Persistencia**: localStorage
- **Transiciones**: Suaves entre temas

### Animaciones Personalizadas

- **Gradient Pan**: Animación de gradiente en el header
- **Spin Animations**: Rotaciones para el icono AI
- **Hover Effects**: Escalas y transiciones en componentes

## 📱 Responsive Design

La aplicación está completamente optimizada para:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Breakpoints Utilizados

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## 🔧 Scripts Disponibles

```json
{
  "dev": "vite", // Desarrollo local
  "build": "tsc -b && vite build", // Construcción para producción
  "lint": "eslint .", // Linting del código
  "preview": "vite preview" // Vista previa de producción
}
```

## 🚀 Características Avanzadas

- **React Compiler**: Optimización automática de rendimiento
- **TypeScript**: Tipado estático completo
- **ESLint**: Linting y formateo de código
- **Vite**: Build tool ultra rápido
- **Wouter**: Router ligero y eficiente

## 📄 Licencia

Este proyecto es de uso personal y educativo.

---

**Desarrollado por David Hernandez** © 2024
