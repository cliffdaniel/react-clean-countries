
# 🌎 React Clean Countries Explorer

Aplicación web que muestra un listado de países usando React 19, TailwindCSS 4 y GraphQL.  
Permite buscar, filtrar por continente y moneda, ver detalles de cada país, optimizada en accesibilidad y rendimiento.

---

## 🚀 Tecnologías usadas

- React 19
- Vite 5
- Tailwind CSS 4
- Apollo Client
- GraphQL API (https://countries.trevorblades.com/)
- Radix UI
- Lucide React Icons
- Vitest + Testing Library

---

## 📂 Estructura del proyecto

```
src/
├── application/use-cases/useCountries.ts
├── components/ui/
│   ├── button.tsx
│   ├── card.tsx
│   ├── input.tsx
│   ├── loader.tsx
│   ├── popover.tsx
│   └── select.tsx
├── domain/entities/Country.ts
├── graphql/queries/getCountries.ts
├── infrastructure/
│   ├── persistence/
│   └── services/
├── lib/
│   ├── apolloClient.ts
│   └── utils.ts
├── presentation/
│   ├── components/
│   │   ├── CountriesGrid.tsx
│   │   ├── CountryItem.tsx
│   │   ├── Filters.tsx
│   │   ├── SearchInput.tsx
│   │   ├── ui/
│   │   │   ├── CustomCombobox.tsx
│   │   │   ├── CustomSelect.tsx
│   │   └── __tests__/
│   │       ├── ContinentCombobox.test.tsx
│   │       ├── CountriesGrid.test.tsx
│   │       ├── CountryItem.test.tsx
│   │       ├── CurrencyCombobox.test.tsx
│   │       ├── Filters.test.tsx
│   │       └── SearchInput.test.tsx
│   ├── layouts/
│   │   ├── MainLayout.tsx
│   │   └── __tests__/MainLayout.test.tsx
│   ├── pages/
│   │   ├── ListPage.tsx
│   │   ├── CountryDetailPage.tsx
│   │   └── __tests__/CountryDetailPage.test.tsx
│   └── routes/AppRoutes.tsx
├── styles/animations.css
├── __mocks__/countries.ts
├── index.css
└── main.tsx
```

---

## 📄 Instalación y ejecución

```bash
# Clonar el repositorio
git clone https://github.com/tu_usuario/react-clean-countries.git

# Entrar al proyecto
cd react-clean-countries

# Instalar dependencias
npm install

# Ejecutar proyecto en desarrollo
npm run dev

# Ejecutar pruebas
npm run test
```

---

## 🧪 Testing

El proyecto tiene test unitarios para:

- MainLayout
- Filters
- SearchInput
- CustomCombobox
- CountryItem
- CountriesGrid
- CountryDetailPage

Frameworks usados:
- Vitest
- @testing-library/react
- @testing-library/jest-dom

Para correr los test:

```bash
npm run test
```

---

## ✨ Características principales

- 🔎 Búsqueda en tiempo real de países.
- 🌎 Filtrado dinámico por continente y moneda (con buscador integrado).
- 📄 Vista detallada de cada país (nombre, código, bandera, continente, capital, idiomas).
- ♿ Accesibilidad web completa (WAI-ARIA, roles correctos, navegación teclado).
- 📱 100% Responsivo en todos los dispositivos.
- 🚀 Uso de `useDeferredValue` y `useTransition` para mejorar la experiencia de usuario.
- 🎨 Fondo dinámico animado en toda la aplicación.

---

## 📜 Licencia

Este proyecto está bajo la licencia MIT.

---

## 💻 Autor

Hecho con ❤️ por **Daniel Arenas**.

---
