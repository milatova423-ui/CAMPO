"""Definición de las estructuras (tablas/columnas). Para agregar un campo o una
tabla nueva basta con editar este archivo: formularios, listados, importación
y exportación a Excel se generan solos.
Tipos: text, textarea, number, date, select:OPCION1,OPCION2"""

CONTENEDORES = "select:BULK DRUM,BIG BAG,PALLET,BOLSA,CANASTILLA,CAJA DE MADERA,CILINDRO,OTRO"
FISICO = "select:SÓLIDO,LÍQUIDO,SEMISÓLIDO"

ENTIDADES = {
    "inventario": {
        "titulo": "Inventario de residuos",
        "campos": [
            ("ubicacion", "Ubicación de residuos", "text"),
            ("clasificacion", "Clasificación", "text"),
            ("generado_en", "Generado en", "text"),
            ("procedencia", "Procedencia", "text"),
            ("almacen", "Almacén", "text"),
            ("tipo_residuo", "Tipo de residuo", "text"),
            ("especificaciones", "Especificaciones del residuo", "text"),
            ("codigo", "Código", "text"),
            ("tipo_contenedor", "Tipo de contenedor", CONTENEDORES),
            ("estado", "Estado", FISICO),
            ("cantidad", "Cantidad", "number"),
            ("estado_contenedor", "Estado del contenedor", "select:ACEPTABLE,REACONDICIONAR,DAÑADO"),
            ("comentario", "Comentario", "textarea"),
        ],
    },
    "reporte": {
        "titulo": "Reporte diario de recolección",
        "campos": [
            ("fecha", "Fecha", "date"),
            ("empresa", "Empresa contratada para la disposición final", "text"),
            ("lugar", "Lugar", "text"),
            ("elaborado_por", "Elaborado por", "text"),
            ("generador", "Generador", "text"),
            ("actividad", "Actividad desarrollada", "textarea"),
            ("ubicacion", "Ubicación", "text"),
            ("procedencia", "Procedencia", "text"),
            ("tipo_residuo", "Tipo de residuo", "text"),
            ("u_m", "U/M", CONTENEDORES),
            ("cantidad", "Cantidad", "number"),
            ("lugar_acopio", "Lugar de acopio", "text"),
            ("contenido", "Contenido", "textarea"),
            ("personal", "Personal", "text"),
            ("cargo", "Cargo", "text"),
        ],
    },
    "traslado_interno": {
        "titulo": "Traslado interno terrestre",
        "campos": [
            ("sector", "Sector", "text"),
            ("ruta", "Ruta", "text"),
            ("generacion", "Generación", "text"),
            ("fecha_traslado", "Fecha de traslado", "date"),
            ("tipo_contenedor", "Tipo de contenedor", CONTENEDORES),
            ("cantidad", "Cantidad", "number"),
            ("descripcion_residuo", "Descripción de residuo", "text"),
            ("tipo_vehiculo", "Tipo de vehículo", "text"),
            ("placa", "Placa", "text"),
            ("volumen_inicial_m3", "Volumen inicial (m3)", "number"),
            ("volumen_total_m3", "Volumen total (m3)", "number"),
            ("situacion", "Situación", "select:ACOPIADO,EN TRÁNSITO,DISPOSICIÓN FINAL"),
            ("observaciones", "Observaciones", "textarea"),
            ("n_guia", "N° Guía", "text"),
        ],
    },
    "traslado_externo": {
        "titulo": "Traslado externo fluvial",
        "campos": [
            ("sector", "Sector", "text"),
            ("lugar_embarque", "Lugar de embarque", "text"),
            ("procedencia", "Procedencia", "text"),
            ("fecha_embarque", "Fecha embarque/zarpe", "date"),
            ("descripcion_residuo", "Descripción de residuo", "text"),
            ("estado", "Estado", FISICO),
            ("cant_contenedores", "Cant. contenedores", "number"),
            ("tipo_contenedor", "Tipo de contenedor", CONTENEDORES),
            ("embarque_fluvial", "Embarque fluvial (embarcación)", "text"),
            ("observaciones", "Observaciones", "textarea"),
            ("n_guia", "N° Guía", "text"),
        ],
    },
}

TIPOS_ARCHIVO = ["Foto", "Guía de remisión", "Manifiesto", "Certificado de disposición", "Reporte", "Otro"]
EXTENSIONES = {"jpg", "jpeg", "png", "gif", "webp", "pdf", "doc", "docx", "xls", "xlsx"}
