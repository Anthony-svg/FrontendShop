# FrontendShop (Angular + Bun) 🛍️

Este repositorio contiene la interfaz de usuario (Frontend) para el proyecto **Shop**, desarrollada con **Angular** y gestionada de manera ultra rápida utilizando **Bun** como motor de ejecución y gestor de paquetes.

---

## 🛠️ Requisitos Previos

Antes de comenzar, asegúrate de tener instalado en tu sistema:

*   [Bun](https://bun.sh) (Versión 1.0 o superior)
*   [Angular CLI](https://angular.dev) (Opcional, instalado globalmente vía Bun)

---

## 🚀 Instalación y Configuración

Sigue estos pasos para levantar el entorno de desarrollo localmente:

### 1. Clonar el repositorio
```bash
git clone https://github.com/Anthony-svg/FrontendShop.git
cd TU_REPOSITORIO_FRONTEND
```

### 2. Instalar dependencias
Usa Bun para descargar de forma rápida todos los paquetes necesarios del `package.json`:
```bash
bun install
```

### 3. Configurar variables de entorno
Crea un archivo de configuración para apuntar a la dirección de tu API en .NET (por defecto corre en el puerto 5000 o 5001):
* Modifica los archivos correspondientes dentro de `src/environments/` o tu archivo `.env` según la configuración de tu proyecto.

---

## 💻 Comandos de Desarrollo

| Acción | Comando | Descripción |
| :--- | :--- | :--- |
| **Iniciar Servidor** | `bun run start` | Arranca la app en `http://localhost:4200` |
| **Compilar (Build)** | `bun run build` | Genera los archivos de producción en `/dist` |
| **Pruebas (Tests)** | `bun run test` | Ejecuta las pruebas unitarias del proyecto |

---

## 📂 Estructura Principal del Proyecto

```text
├── src/
│   ├── app/              # Componentes, servicios, módulos y lógica
│   ├── assets/           # Imágenes, fuentes y archivos estáticos
│   ├── environments/     # Configuración de URLs de desarrollo/producción
│   └── index.html        # Archivo HTML principal
├── angular.json          # Configuración global del CLI de Angular
├── bun.lockb             # Archivo de bloqueo de versiones de Bun (SÍ SE SUBE)
├── package.json          # Listado de dependencias del proyecto
└── tsconfig.json         # Configuración del compilador TypeScript
```

---
