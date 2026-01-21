# 🏥 Sistema Centralizado de Aptos Médicos para Deportistas

## 📌 Descripción

Sistema web desarrollado en **Django** para la gestión integral y digitalización del proceso de emisión de certificados de aptitud física para deportistas.
El proyecto fue implementado como solución tecnológica para la **Clínica Municipal para el Deportista de Concordia**, reemplazando un sistema manual, fragmentado y propenso a errores.

La plataforma centraliza la información médica, optimiza los flujos internos y garantiza la **seguridad, trazabilidad y validez profesional** de los certificados emitidos.

---

## 🎯 Objetivo del Proyecto

* Digitalizar y centralizar el proceso de emisión de aptos físicos
* Reducir errores administrativos y duplicación de datos
* Garantizar la intervención de un profesional médico matriculado
* Facilitar al deportista el acceso a su certificado mediante **QR**
* Incorporar **tecnologías innovadoras** en el ámbito de la salud deportiva

---

## 🛠️ Tecnologías Utilizadas

* **Backend:** Python · Django 4.x
* **Base de datos:** SQLite / PostgreSQL (según entorno)
* **Autenticación:** Custom User Model (médicos y administrativos)
* **Reconocimiento facial:** face-recognition · dlib · OpenCV
* **Generación de QR:** qrcode
* **Procesamiento de imágenes:** Pillow
* **Frontend:** Django Templates
* **Seguridad:** Control de accesos y roles

---

## ⚙️ Funcionalidades Principales

* ✔️ Gestión de usuarios médicos y administrativos
* ✔️ Registro de deportistas, deportes e instituciones
* ✔️ Carga completa de evaluaciones médicas
* ✔️ Emisión de certificados de aptitud física
* ✔️ Generación y lectura de **códigos QR**
* ✔️ **Reconocimiento facial** para validación de identidad
* ✔️ Historial médico centralizado
* ✔️ Almacenamiento de certificados digitales

---

## 🧠 Aspectos Técnicos Destacados

* Implementación de **modelo de usuario personalizado** (AbstractBaseUser)
* Separación clara de entidades: Usuario, Deportista, Evaluación, Institución
* Integridad referencial mediante ForeignKey y PROTECT
* Manejo de archivos multimedia (imágenes y certificados)
* Validación de identidad mediante biometría facial
* Enfoque en **seguridad, trazabilidad y fiabilidad de datos médicos**

---

## 🔐 Seguridad y Ética

* Acceso restringido según rol (médico / administrativo)
* Intervención obligatoria de un profesional matriculado
* Protección de datos sensibles
* El sistema evita la autoemisión de certificados sin control médico

---

## 📂 Estado del Código

✅ **Repositorio público con código completo**

Este repositorio contiene el **código completo y funcional** del sistema, desarrollado como solución real para la digitalización del proceso de emisión de aptos físicos en el ámbito de la salud deportiva.

Si bien el sistema fue diseñado, implementado y probado para su uso institucional, **su puesta en producción no se concretó debido a cuestiones administrativas y burocráticas ajenas al desarrollo técnico**.

El proyecto se mantiene como referencia técnica de una solución integral, lista para ser desplegada o adaptada a otros contextos similares.

---

## 🎥 Video demostrativo
👉 [Ver demo y explicación técnica](https://youtu.be/XXXXXXXX](https://youtu.be/jQxAEkLzGu0)

---

## 👤 Autor

**Luis Alegre**
Licenciado en Informática
Backend / Fullstack Developer

📍 Proyecto desarrollado entre abril y junio de 2024

---

## 🚀 Contexto de Aplicación

Este proyecto representa un caso real de aplicación de tecnología en el ámbito de la **salud pública y deportiva**, orientado a la modernización de procesos críticos mediante software seguro, confiable y escalable.

> 💡 Este sistema puede ser reutilizado o adaptado para clínicas, federaciones deportivas, municipios u organizaciones que requieran la emisión segura de certificados médicos digitales.


   

   



