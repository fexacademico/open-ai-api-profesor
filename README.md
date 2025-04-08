# Generador de Mensajes con Inteligencia Artificial

Esta práctica tiene como objetivo enseñar a los estudiantes cómo consumir una API REST real (la API de OpenAI) utilizando **JavaScript puro**, junto con **HTML** y **CSS**, para construir una interfaz sencilla que genere respuestas de una IA.

---

## Objetivos de Aprendizaje

- Utilizar `fetch` para realizar peticiones `POST` a una API externa
- Entender el uso de encabezados (`headers`) y cuerpo (`body`) en solicitudes HTTP
- Interpretar y mostrar respuestas en formato JSON
- Aplicar buenas prácticas de manipulación del DOM
- Comprender el parámetro `temperature` en modelos de lenguaje

---

## ¿Qué hace esta aplicación?

- Permite al usuario ingresar un mensaje o pregunta
- Envía ese mensaje a la API de OpenAI (usando el modelo `gpt-3.5-turbo`)
- Muestra la respuesta generada por la IA en pantalla

---

## Requisitos

Para poder usar esta aplicación con la API de OpenAI, necesitas:

1. Una cuenta en [OpenAI](https://platform.openai.com/)
2. Una **clave de API personal** (puedes obtenerla desde tu panel de OpenAI)
3. Un entorno seguro (⚠️ **No se recomienda exponer claves de API directamente en el navegador en entornos de producción**)

---

## Estructura del Proyecto

