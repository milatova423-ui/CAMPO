# Gestión de Residuos Peligrosos

Aplicación web (Flask + SQLite) para administrar **inventarios, reportes diarios, traslados** y sus **documentos y fotos** (guías, manifiestos, certificados).

## Módulos
- **Inventario de residuos**: ubicación, almacén, tipo, contenedor, estado, cantidad. Panel con tablas dinámicas.
- **Reporte diario de recolección**
- **Traslado interno terrestre** (vehículo, placa, volumen, guía)
- **Traslado externo fluvial** (embarque, embarcación, guía)
- Adjuntar **fotos y documentos** (jpg/png/pdf/doc/xls) a cualquier registro
- **Importar / exportar Excel** con las mismas columnas

## Uso
```bash
python -m venv .venv && source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -r requirements.txt
python app.py        # http://localhost:5000
```
Variable recomendada en producción: `SECRET_KEY`. Usar gunicorn/waitress y añadir autenticación antes de exponerlo a internet.

## Personalizar
Edita `config.py`: agrega columnas o tablas y todo (formularios, listados, Excel) se actualiza solo.
