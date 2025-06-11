# ✅ PASO A PASO PARA HACER UN PULL REQUEST HACIA `develop`

## 👩‍💻 1. Estar en su propia rama

Verifica que estás en tu rama personal:

```
git branch
```

Si no estás en tu rama:

```
git checkout tu-rama
```

## 🔄 2. Asegúrate de tener tu rama actualizada

Primero, obtén los últimos cambios del repositorio:

```
git fetch origin
```

Luego, fusiona develop en tu rama para asegurarte de que trabajas sobre la última versión:

```
git merge origin/develop
```

✅ Si hay conflictos, Git los mostrará. Deberás resolverlos y luego hacer:

```
git add .
git commit -m "Resuelto conflicto con develop"
```

## 💾 3. Guarda tus cambios y súbelos a GitHub

Asegúrate de que tus cambios estén guardados y listos:

```
git status
```

Luego, súbelos a tu rama en GitHub:

```
git push origin tu-rama
```

## 🔁 4. Crea un Pull Request hacia develop

1. Ve a https://github.com/ZaidHernandezDev/PT-smart-hiring-platform
2. GitHub mostrará un botón para crear un Pull Request desde tu rama.
3. Asegúrate de seleccionar:
   - Base branch: develop
   - Compare branch: tu-rama
4. Agrega un título descriptivo y un mensaje claro (qué hiciste, qué archivos tocaste, si requiere revisión especial, etc.)
5. Da clic en "Create Pull Request"

## ✅ 5. Espera revisión y merge

Tú (o alguien con permisos) podrá:
- Revisar el código,
- Pedir cambios,
- O aceptar el PR y hacer merge a develop.
