Arquitectura del sistema — Educando tu cuerpo
1. Arquitectura general
La aplicación Educando tu cuerpo — Paulina Onocko se desarrollará como una aplicación web responsive, priorizando su utilización desde dispositivos móviles.

Se utilizará una arquitectura de aplicación web integrada, con frontend y backend desarrollados en un mismo proyecto mediante Next.js y TypeScript.

La aplicación contará con dos roles: PROFESORA y ALUMNO, cuyas funcionalidades y restricciones estarán definidas en docs/spec.md.
1.1. Frontend
El frontend se desarrollará utilizando:
- Next.js con React y TypeScript.
- Tailwind CSS para los estilos.
- Componentes reutilizables para formularios, navegación, tablas y pantallas de entrenamiento.
La interfaz seguirá un enfoque mobile-first y utilizará la identidad visual de Educando tu cuerpo.
1.2. Backend
El backend se implementará dentro del proyecto Next.js, utilizando Server Actions y Route Handlers según las necesidades de cada funcionalidad.

Será responsable de:
- Validar las operaciones.
- Verificar la autenticación y autorización.
- Administrar alumnos y ejercicios.
- Gestionar rutinas y sus estados.
- Registrar entrenamientos y pesos.
- Conservar los registros históricos.
- Registrar auditorías de correcciones.
- Validar y gestionar los enlaces de YouTube asociados a los ejercicios.
Las reglas de negocio deberán verificarse en el servidor, independientemente de las restricciones implementadas en la interfaz.
1.3. Base de datos
Se utilizará PostgreSQL mediante Supabase.

La base de datos almacenará la información estructurada del sistema, incluyendo usuarios, alumnos, ejercicios, rutinas, planificación semanal, entrenamientos, pesos registrados y auditorías.

Las relaciones y restricciones se definirán en el apartado de modelo de datos.
1.4. Autenticación y autorización
Se utilizará Supabase Auth.

La profesora creará las cuentas de los alumnos, quienes recibirán una invitación por correo electrónico para establecer su contraseña.

La aplicación controlará el acceso según los roles PROFESORA y ALUMNO.

Los permisos deberán validarse en el servidor y, cuando corresponda, mediante políticas de seguridad de la base de datos.
1.5. Enlaces a videos de YouTube
La aplicación permitirá asociar opcionalmente un enlace de YouTube a cada ejercicio de la biblioteca.

La profesora podrá agregar, reemplazar o quitar el enlace al crear o editar un ejercicio.

Cuando un alumno consulte un ejercicio que tenga un video asociado, podrá seleccionar la opción «Ver video» para abrir directamente el video correspondiente en YouTube, preferentemente en una nueva pestaña del navegador.

Los videos estarán alojados en YouTube. La aplicación almacenará únicamente su URL y no permitirá subir, convertir, procesar ni almacenar archivos de video.

Se admitirán videos públicos o no listados. Los videos no listados podrán ser vistos por cualquier persona que tenga el enlace, incluso fuera de la aplicación.

La validación de los enlaces, los permisos de acceso y las demás condiciones técnicas se detallan en la sección 4.
1.6. Despliegue
La aplicación se desplegará en Vercel, utilizando un plan compatible con su uso comercial.

Durante el MVP se utilizará una dirección web bajo el dominio vercel.app, sin contratar un dominio personalizado.

El código fuente se administrará mediante Git y GitHub.
1.7. Organización general
El frontend y el backend compartirán un único repositorio.

El proyecto mantendrá separadas las responsabilidades de interfaz, lógica de negocio, validación, acceso a datos y servicios externos.

La estructura de carpetas y las convenciones de desarrollo se definirán antes de comenzar la implementación.
2. Modelo de datos
La aplicación utilizará una base de datos relacional PostgreSQL administrada mediante Supabase.

El acceso a los datos se implementará utilizando el cliente oficial de Supabase para JavaScript y TypeScript, sin incorporar Prisma ORM.

El diseño de la base de datos deberá respetar las reglas de negocio definidas en docs/spec.md, especialmente la conservación histórica, los permisos por usuario y las restricciones de las rutinas activas y programadas.
2.1. Organización de entidades
El modelo de datos se organizará en cuatro grupos principales:

Usuarios y perfiles
- profiles: información del perfil, rol y estado de cada usuario.
- auth.users: cuentas de autenticación administradas por Supabase Auth.
Biblioteca de ejercicios
- exercises: ejercicios registrados por la profesora, con nombre, descripción, estado y un enlace opcional de YouTube para consultar el video explicativo.
Planificación de rutinas
- routines: rutinas asignadas a los alumnos, fecha de inicio, semanas de planificación, estímulos requeridos por semana, umbral de aviso y estado.
- routine_weeks: semanas de planificación que componen cada rutina, sin equivalencia obligatoria con semanas calendario.
- routine_days: días de entrenamiento correspondientes a cada semana.
- routine_blocks: bloques que organizan los ejercicios dentro de un día.
- routine_exercises: ejercicios incluidos en cada bloque y su orden.
- routine_sets: series planificadas, repeticiones y pesos recomendados.
Entrenamientos e historial
- workout_sessions: sesiones de entrenamiento iniciadas o finalizadas.
- workout_blocks: bloques que organizan los ejercicios dentro de una sesión y conservan su orden original.
- workout_exercises: copia de los ejercicios y su planificación al iniciar una sesión.
- workout_sets: copia de las series planificadas y registro de los pesos realmente utilizados.
- weight_corrections: auditoría de correcciones de pesos realizadas por la profesora.
2.2. Relaciones principales
- Un usuario de Supabase Auth tendrá un perfil asociado.
- Un alumno podrá tener múltiples rutinas a lo largo del tiempo.
- Cada rutina pertenecerá a un único alumno.
- Cada rutina contendrá entre una y seis semanas de planificación.
- Cada semana requerirá entre uno y siete estímulos, equivalentes a sesiones FINALIZADAS; podrán repetirse plantillas de días en fechas distintas.
- Cada semana tendrá los días de entrenamiento definidos para la rutina.
- Cada día contendrá bloques ordenados.
- Cada bloque contendrá ejercicios ordenados.
- Cada ejercicio planificado tendrá sus series, repeticiones y pesos recomendados.
- Un ejercicio de la biblioteca podrá reutilizarse en múltiples rutinas.
- Una rutina podrá tener múltiples sesiones de entrenamiento.
- Cada sesión conservará una copia de la planificación utilizada al iniciarse.
- Cada serie de una sesión podrá almacenar un peso real o un valor no informado.
- Una serie podrá tener múltiples registros de corrección histórica.
2.3. Conservación de información histórica
Al iniciar un entrenamiento, el sistema generará una representación independiente de la planificación correspondiente.

Esta representación incluirá los ejercicios, bloques, orden, series, repeticiones y pesos recomendados necesarios para conservar el contexto de la sesión.

Las modificaciones posteriores de rutinas o ejercicios no alterarán esta representación.

Los entrenamientos finalizados permanecerán disponibles en el historial aunque la rutina original haya finalizado o haya sido reemplazada.

Las correcciones de pesos realizadas por la profesora se registrarán mediante auditoría, conservando el valor anterior, el nuevo valor, la fecha y el usuario responsable.
2.4. Integridad y restricciones
La base de datos y el backend deberán garantizar:
- Un máximo de una rutina ACTIVA por alumno.
- Un máximo de una rutina PROGRAMADA por alumno.
- Múltiples rutinas BORRADOR por alumno.
- Entre una y seis semanas de planificación y entre uno y siete estímulos requeridos por semana.
- Cantidad de plantillas de días de entrenamiento entre uno y siete, coincidente con los estímulos requeridos por semana.
- Pesos numéricos no negativos, permitiendo valores no informados.
- Correos electrónicos únicos entre cuentas.
- Nombres de ejercicios únicos sin distinguir mayúsculas y minúsculas.
- Conservación de relaciones históricas ante desactivaciones.
- Operaciones transaccionales para publicación, reemplazo y activación de rutinas.
- Como máximo una sesión iniciada por alumno y fecha calendario de Argentina.
- Cada sesión FINALIZADA contabilizada como un único estímulo, sin duplicaciones por reintentos.
- Avance de semana y transición entre rutinas en la misma transacción de finalización cuando corresponda.
- Operaciones transaccionales para correcciones de pesos y sus auditorías.
Las restricciones críticas deberán implementarse también a nivel de PostgreSQL cuando corresponda.
2.5. Acceso y seguridad
Las operaciones de base de datos utilizarán el cliente oficial de Supabase.

Se aplicarán políticas Row Level Security (RLS) para proteger la información de cada alumno.

La profesora tendrá acceso administrativo según su rol.

Las operaciones que requieran permisos elevados se ejecutarán exclusivamente en el servidor, con validaciones explícitas de autorización.

No se expondrán credenciales administrativas en el navegador.
2.6. Migraciones y tipos
Los cambios estructurales de la base de datos se administrarán mediante migraciones SQL versionadas en el repositorio.

Se utilizarán los mecanismos de Supabase para generar tipos TypeScript a partir del esquema de PostgreSQL.

El esquema definitivo, sus columnas, claves foráneas, índices y políticas RLS se documentarán antes de implementar las migraciones.
2.7. Estructura de tablas y relaciones
El modelo de datos utilizará identificadores UUID y claves foráneas para representar las relaciones entre las entidades.

Usuarios y biblioteca
- profiles: id, first_name, last_name, role, is_active, created_at, updated_at.
- exercises: id, name, description, youtube_url, is_active, created_at, updated_at.
Enlaces de YouTube de los ejercicios

El campo youtube_url será opcional y permitirá almacenar la URL de un video explicativo alojado en YouTube.

La profesora podrá agregar, reemplazar o quitar este enlace al crear o editar un ejercicio.

El sistema deberá validar que la URL corresponda a un enlace admitido de YouTube antes de almacenarla.

Se admitirán videos públicos o no listados. Los videos privados no garantizarán el acceso habitual de los alumnos mediante un enlace.

La aplicación almacenará únicamente la URL del video. No descargará, procesará ni almacenará archivos de video.

El acceso al enlace desde la aplicación respetará los permisos definidos para consultar los ejercicios. Esto no impedirá que una persona con el enlace pueda acceder directamente al video en YouTube.

Planificación
- routines: id, student_id, start_date, duration_weeks, days_per_week, notice_threshold_stimuli, status, created_at, updated_at. duration_weeks representa semanas de planificación; days_per_week representa tanto las plantillas disponibles como los estímulos requeridos por semana. notice_threshold_stimuli tiene valor predeterminado 3, con validación según el total de estímulos de la rutina.
- routine_weeks: id, routine_id, week_number.
- routine_days: id, week_id, day_number.
- routine_blocks: id, day_id, position.
- routine_exercises: id, block_id, exercise_id, position.
- routine_sets: id, routine_exercise_id, set_number, repetitions, recommended_weight.
Cada semana tendrá sus propios días, bloques, ejercicios y series.

Al copiar una semana, el sistema generará registros independientes para la semana de destino. Los cambios posteriores sobre una semana no modificarán las demás.

Entrenamientos e historial
- workout_sessions: id, student_id, routine_id, routine_day_id, status, started_at, started_local_date, started_by, finished_at, finished_by. started_local_date representa la fecha de inicio en America/Argentina/Buenos_Aires y permite garantizar un único inicio diario por alumno. La sesión queda asociada a la semana de planificación de routine_day_id.
- workout_blocks: id, session_id, position.
- workout_exercises: id, workout_block_id, exercise_id, exercise_name, description, position.
- workout_sets: id, workout_exercise_id, set_number, planned_repetitions, recommended_weight, actual_weight, version.
- weight_corrections: id, workout_set_id, old_weight, new_weight, corrected_by, corrected_at.
Al iniciar una sesión, el sistema copiará de manera transaccional la estructura de bloques, ejercicios y series correspondiente al día seleccionado.

Cada bloque del entrenamiento tendrá sus propios ejercicios ordenados, y cada ejercicio conservará sus series planificadas.

La planificación copiada será independiente de la rutina original y no se modificará cuando la profesora edite posteriormente la rutina o la biblioteca de ejercicios.

Los pesos reales podrán quedar sin informar y se almacenarán como NULL.

Las correcciones sobre entrenamientos finalizados generarán registros de auditoría.

Registro de responsables del entrenamiento

El campo student_id identificará al alumno al que pertenece el entrenamiento.

El campo started_by identificará al usuario autenticado que inició la sesión.

El campo finished_by identificará al usuario autenticado que finalizó la sesión.

Cuando el alumno inicie o finalice su propio entrenamiento, se registrará su identificador de usuario.

Cuando la profesora realice una operación permitida en nombre del alumno, se registrará el identificador de la profesora como responsable de esa operación, conservando al alumno como propietario del entrenamiento.

Los campos started_by y finished_by deberán referenciar usuarios existentes y ser asignados por el servidor a partir de la identidad autenticada, sin aceptar identificadores arbitrarios enviados por el cliente.

started_by será obligatorio al crear una sesión. finished_by permanecerá en NULL mientras la sesión esté EN_CURSO y se completará al finalizarla.
2.8. Restricciones de integridad
La base de datos deberá implementar claves primarias, claves foráneas, restricciones CHECK e índices únicos según corresponda.

Se garantizará:
- Una rutina ACTIVA como máximo por alumno.
- Una rutina PROGRAMADA como máximo por alumno.
- Numeración única de semanas dentro de cada rutina.
- Numeración única de días dentro de cada semana.
- Numeración válida de series.
- Valores de peso no negativos.
- Nombres de ejercicios únicos sin distinguir mayúsculas y minúsculas.
- Conservación de datos históricos ante modificaciones y desactivaciones.
- Un único inicio de entrenamiento por alumno y fecha local argentina, mediante índice único o mecanismo equivalente.
- Una sesión FINALIZADA cuenta una sola vez como estímulo, incluso ante solicitudes repetidas.
La publicación, activación y sustitución de rutinas se implementarán mediante operaciones transaccionales. El inicio diario de sesiones y su finalización deberán protegerse frente a concurrencia y reintentos.

La modificación de pesos históricos y el registro de su auditoría también deberán ejecutarse de forma transaccional.
2.9. Decisiones de modelado
- Se utilizará Supabase directamente, sin Prisma.
- Las semanas tendrán planificaciones independientes.
- La copia de semanas duplicará la planificación de la semana de origen.
- Los entrenamientos conservarán una representación histórica de su planificación al iniciarse.
- Las fechas de inicio y los límites de día se interpretarán en America/Argentina/Buenos_Aires; el progreso de semanas y la finalización de rutinas se calcularán por estímulos, no por calendario.
- La estructura se administrará mediante migraciones SQL versionadas.
3. Autenticación, autorización y seguridad de acceso
La aplicación utilizará Supabase Auth para gestionar la identidad y las sesiones de los usuarios.

La autorización se implementará mediante validaciones en el backend de Next.js y políticas Row Level Security (RLS) en PostgreSQL.
3.1. Roles del sistema
Existirán dos roles:
- PROFESORA: acceso administrativo a las funcionalidades de gestión de alumnos, ejercicios, rutinas y entrenamientos.
- ALUMNO: acceso limitado a su propia información, rutinas y entrenamientos.
El rol se almacenará en profiles y no podrá ser modificado directamente por los alumnos.
3.2. Creación de cuentas
No existirá un formulario público de registro.

La cuenta inicial de la profesora se creará mediante un procedimiento administrativo seguro.

La profesora creará las cuentas de los alumnos ingresando nombre, apellido y correo electrónico.

El backend utilizará las funciones administrativas de Supabase Auth para generar la invitación correspondiente.

El alumno recibirá un enlace por correo electrónico para establecer su contraseña y acceder a la aplicación.

Las invitaciones deberán tener una validez limitada y no podrán reutilizarse después de completar el proceso.

La creación de alumnos deberá coordinar la cuenta de Supabase Auth y su registro correspondiente en profiles.

El backend deberá:
1. Verificar que el usuario autenticado tenga el rol PROFESORA.
2. Validar los datos del alumno.
3. Crear la cuenta mediante las funciones administrativas de Supabase Auth.
4. Crear el perfil asociado utilizando el identificador generado por Supabase Auth.
5. Confirmar la operación como exitosa únicamente cuando ambos registros existan correctamente.
Si la creación del perfil falla después de crear la cuenta de autenticación, el backend deberá ejecutar una acción de compensación para eliminar la cuenta recién creada, siempre que sea seguro hacerlo.

Si la compensación también falla, el sistema deberá registrar el error para permitir su resolución administrativa, sin informar falsamente que el alumno fue creado correctamente.

Estas operaciones deberán realizarse exclusivamente desde el servidor, sin exponer credenciales administrativas al navegador.
3.3. Inicio y cierre de sesión
Los usuarios iniciarán sesión mediante correo electrónico y contraseña.

Las sesiones se gestionarán utilizando los mecanismos oficiales de Supabase Auth para Next.js.

La aplicación permitirá cerrar sesión y recuperar la contraseña mediante correo electrónico.

Las rutas protegidas verificarán la identidad del usuario.
3.4. Autorización
Todas las operaciones protegidas deberán comprobar el rol y los permisos del usuario.

La profesora podrá administrar los alumnos, ejercicios, rutinas y entrenamientos conforme a docs/spec.md.

Los alumnos solo podrán consultar y modificar los datos que les correspondan, respetando las restricciones de los entrenamientos en curso y finalizados.

No se confiará en identificadores de alumno enviados desde el navegador sin comprobar su autorización.

Las verificaciones de permisos se realizarán en el servidor, independientemente de la visibilidad de botones o pantallas.
3.5. Row Level Security
Las tablas que contengan información protegida tendrán RLS habilitado.

Las políticas deberán garantizar que:
- Cada alumno pueda consultar únicamente sus datos autorizados.
- Cada alumno pueda registrar y actualizar únicamente sus entrenamientos permitidos.
- Los alumnos no puedan modificar planificaciones, ejercicios de la biblioteca ni auditorías.
- La profesora pueda realizar las operaciones administrativas permitidas.
- Los usuarios desactivados no puedan continuar accediendo a funcionalidades protegidas.
Las operaciones complejas que requieran permisos especiales se implementarán mediante funciones o servicios de backend con autorización explícita.
3.6. Operaciones administrativas
La creación de usuarios, modificación administrativa de correos, desactivación de cuentas y demás operaciones privilegiadas se realizarán exclusivamente desde el servidor.

Las credenciales administrativas de Supabase nunca se enviarán al navegador.

Las operaciones privilegiadas deberán verificar la identidad y el rol de quien las solicita.
3.7. Acceso a los enlaces de YouTube
Los videos explicativos de los ejercicios estarán alojados en YouTube y se accederá a ellos mediante enlaces asociados a los ejercicios de la biblioteca.

La aplicación verificará la autenticación y los permisos del usuario antes de permitirle consultar los ejercicios y sus enlaces de video.

Solo la profesora podrá agregar, reemplazar o quitar los enlaces de YouTube.

Los alumnos podrán consultar los enlaces de los ejercicios a los que tengan acceso según las reglas de autorización del sistema.

Al seleccionar «Ver video», el enlace abrirá directamente el video correspondiente en YouTube, preferentemente en una nueva pestaña del navegador.

Los videos podrán ser públicos o no listados. Los videos no listados no proporcionan privacidad estricta: cualquier persona que tenga el enlace podrá acceder al video directamente desde YouTube, incluso sin iniciar sesión en la aplicación.

La aplicación no podrá impedir que un enlace compartido sea utilizado fuera del sistema ni controlar los permisos de reproducción establecidos por YouTube.

No se utilizará Supabase Storage para almacenar ni proteger archivos de video.
3.8. Validaciones y errores
Los datos recibidos se validarán mediante Zod y las restricciones correspondientes de PostgreSQL.

Los errores de autorización no deberán revelar información privada.

Las operaciones sensibles deberán registrar errores técnicos sin exponer contraseñas, tokens ni credenciales.
3.9. Seguridad de sesiones y usuarios desactivados
La sesión de un usuario deberá comprobarse en las operaciones protegidas.

Cuando la profesora desactive un alumno, este perderá acceso a las funcionalidades protegidas, incluso si su sesión anterior todavía no ha expirado.

La reactivación permitirá recuperar el acceso sin eliminar las rutinas ni el historial.

Las políticas de acceso deberán contemplar el estado is_active del perfil.
3.10. Recuperación de contraseñas
Los alumnos podrán recuperar su contraseña mediante un enlace enviado a su correo electrónico.

El proceso podrá iniciarse de dos maneras:
- Desde la pantalla de inicio de sesión, mediante la opción «Olvidé mi contraseña».
- Desde la ficha del alumno, mediante una acción disponible exclusivamente para la profesora.
En ambos casos, el alumno recibirá un enlace temporal para establecer una nueva contraseña.

La profesora no podrá consultar, recuperar ni establecer directamente las contraseñas de los alumnos.

El backend deberá comprobar que la profesora tiene autorización antes de iniciar una recuperación desde la ficha de un alumno.

La aplicación no mostrará información que permita descubrir si un correo electrónico pertenece a una cuenta registrada cuando la recuperación se solicite desde la pantalla pública.

El envío de correos deberá respetar los límites y la configuración del proveedor de autenticación.
4. Gestión y reproducción de videos de YouTube
Los videos explicativos de los ejercicios estarán alojados en YouTube.

La profesora incorporará los videos mediante enlaces asociados a los ejercicios de la biblioteca.

La aplicación no permitirá subir archivos de video ni almacenará videos en su propia infraestructura.
4.1. Proveedor de videos
Se utilizará YouTube como proveedor de alojamiento y reproducción de videos.

La profesora podrá utilizar videos públicos o no listados.

Para asociar un video a un ejercicio:
1. La profesora obtendrá el enlace del video en YouTube.
2. Ingresará el enlace al crear o editar el ejercicio.
3. El sistema validará el enlace.
4. La URL se almacenará en el campo youtube_url de la tabla exercises.
5. El alumno podrá acceder al video desde el ejercicio correspondiente, según sus permisos.
Los videos serán opcionales y cada ejercicio podrá tener como máximo un enlace de YouTube asociado.
4.2. Validación y seguridad
Solo la profesora podrá agregar, reemplazar o quitar enlaces de YouTube.

El backend deberá validar que las URLs correspondan a formatos y dominios admitidos de YouTube.

No se aceptarán URLs arbitrarias ni se utilizará directamente contenido no validado para construir elementos de reproducción.

Los alumnos podrán consultar los enlaces únicamente cuando tengan autorización para acceder a los ejercicios correspondientes.

Los videos no listados de YouTube no proporcionan privacidad estricta. Cualquier persona que tenga el enlace podrá acceder al video directamente desde YouTube.

La aplicación no podrá revocar el acceso a un video una vez que su enlace haya sido compartido fuera del sistema.
4.3. Reproducción y experiencia de usuario
Los alumnos podrán acceder a los videos explicativos desde los ejercicios incluidos en sus rutinas.

La interfaz deberá ofrecer un enlace para abrir el video en YouTube.

Para el MVP se abrirá el enlace directamente en YouTube; no se implementará un reproductor integrado en la aplicación.

La funcionalidad deberá ser compatible con navegadores modernos de Android, iPhone y computadoras.

Si un video deja de estar disponible, es eliminado o cambia su configuración de privacidad, la aplicación deberá informar el problema de manera comprensible cuando pueda detectarlo.

La disponibilidad y reproducción de los videos dependerán de YouTube.
4.4. Almacenamiento y costos
La aplicación almacenará únicamente la URL de YouTube asociada a cada ejercicio.

No se utilizará Supabase Storage para almacenar videos.

No se implementarán funcionalidades de carga, conversión, compresión ni procesamiento de archivos de video.

El MVP deberá diseñarse sin contratar servicios externos pagos.

No se habilitarán automáticamente planes pagos ni funcionalidades que generen cargos.

Se deberán respetar las condiciones de uso y las restricciones aplicables de los servicios utilizados.
5. Estructura de carpetas y organización del código
5.1. Criterio general de organización
El proyecto utilizará una estructura modular por funcionalidades, basada en Next.js App Router y TypeScript.

El frontend y el backend compartirán un único repositorio.

Se mantendrá una separación clara entre:
- Rutas y pantallas de la aplicación.
- Componentes visuales.
- Lógica de negocio.
- Validaciones.
- Acceso a datos.
- Integraciones externas.
- Tipos y utilidades compartidas.
La organización deberá facilitar el desarrollo incremental, el mantenimiento y las pruebas.

No será obligatorio crear todas las carpetas desde el inicio. Cada módulo se incorporará cuando se implemente su funcionalidad.
5.2. Organización de rutas
Las rutas se definirán dentro de src/app/, utilizando Next.js App Router.

Se establecerán tres grupos principales:

Autenticación
- /login
- /invitacion
- /recuperar-contrasena
Panel de la profesora
- /profesora
- /profesora/alumnos
- /profesora/rutinas
- /profesora/ejercicios
Panel del alumno
- /alumno
- /alumno/mi-rutina
- /alumno/historial
- /alumno/perfil
Podrán incorporarse rutas adicionales para consultar, crear o editar recursos específicos.

Las rutas de profesora y alumno tendrán layouts diferenciados para adaptar la navegación y la presentación de las funcionalidades.

El sistema dirigirá a cada usuario al panel correspondiente después de iniciar sesión.

La separación de rutas no sustituirá los controles de autorización. Todas las operaciones protegidas deberán verificar los permisos en el servidor y, cuando corresponda, mediante políticas RLS de PostgreSQL.
5.3. Organización por funcionalidades
La carpeta src/features/ contendrá los módulos principales del sistema.

Se definirán inicialmente los siguientes módulos:
- auth: autenticación, invitaciones, recuperación de contraseñas y gestión de sesiones.
- students: registro, consulta, edición, desactivación y reactivación de alumnos.
- exercises: biblioteca de ejercicios, búsqueda, edición y asociación de videos.
- routines: creación, planificación semanal, publicación, programación, reemplazo y finalización de rutinas.
- workouts: inicio, guardado, reanudación y finalización de entrenamientos, registro de pesos y correcciones autorizadas.
- history: consulta del historial de rutinas, entrenamientos y evolución de pesos.
Cada módulo será responsable de las reglas y operaciones correspondientes a su funcionalidad.

Cuando resulte necesario, un módulo podrá organizarse internamente mediante carpetas como:
- components/: componentes específicos de la funcionalidad.
- actions/: Server Actions para operaciones del servidor.
- services/: lógica de negocio y coordinación de operaciones.
- schemas/: esquemas de validación mediante Zod.
- data/: consultas y operaciones de acceso a datos.
- types/: tipos específicos del módulo.
Estas carpetas internas se crearán únicamente cuando sean necesarias, evitando estructuras vacías o complejidad innecesaria.
5.4. Componentes compartidos
La carpeta src/components/ contendrá componentes reutilizables entre diferentes funcionalidades.

Se utilizarán principalmente:
- ui/: botones, campos de formulario, modales, tablas, tarjetas y otros componentes visuales generales.
- layout/: elementos compartidos de navegación y distribución de pantallas.
Los componentes específicos de una funcionalidad deberán permanecer dentro de su módulo correspondiente.

Se evitará duplicar componentes cuando puedan reutilizarse sin introducir dependencias innecesarias.
5.5. Servicios y utilidades compartidas
La carpeta src/lib/ contendrá herramientas y servicios técnicos compartidos.

Incluirá:
- Configuración de clientes Supabase para navegador y servidor.
- Utilidades comunes.
- Funciones técnicas reutilizables que no pertenezcan a una funcionalidad específica.
La lógica de negocio de alumnos, ejercicios, rutinas y entrenamientos no deberá concentrarse en lib/, sino permanecer dentro de sus respectivos módulos.

Las credenciales administrativas y las operaciones privilegiadas se utilizarán exclusivamente desde el servidor.
5.6. Tipos TypeScript
La carpeta src/types/ contendrá tipos compartidos entre diferentes módulos.

Los tipos específicos de una funcionalidad podrán definirse dentro de su propio módulo.

Los tipos correspondientes al esquema PostgreSQL se generarán mediante las herramientas oficiales de Supabase.

Se evitará duplicar manualmente las definiciones de tablas cuando puedan obtenerse de los tipos generados.
5.7. Base de datos y migraciones
La carpeta supabase/migrations/ contendrá las migraciones SQL versionadas.

Las migraciones definirán progresivamente:
- Tablas y relaciones.
- Restricciones de integridad.
- Índices.
- Políticas Row Level Security.
- Funciones y operaciones transaccionales necesarias.
Los cambios estructurales de la base de datos deberán realizarse mediante migraciones reproducibles.
5.8. Integración de enlaces de YouTube
La gestión de los enlaces de YouTube pertenecerá al módulo exercises, ubicado en src/features/exercises/.

Este módulo será responsable de:
- Validar las URLs de YouTube ingresadas por la profesora.
- Asociar un enlace opcional a cada ejercicio.
- Permitir que la profesora agregue, reemplace o quite el enlace.
- Proporcionar el enlace a los alumnos autorizados para consultar el ejercicio.
Las URLs se almacenarán en el campo youtube_url de la tabla exercises.

La interfaz mostrará la opción «Ver video» únicamente cuando el ejercicio tenga un enlace asociado.

Al seleccionar esta opción, se abrirá el video correspondiente directamente en YouTube, preferentemente en una nueva pestaña del navegador.

No se implementarán servicios de carga, conversión, procesamiento ni almacenamiento de archivos de video.

La integración deberá respetar las reglas de autorización y validación establecidas en las secciones 3.7 y 4.
5.9. Separación de responsabilidades
Se aplicarán las siguientes reglas:
- Las páginas de Next.js se encargarán de organizar la presentación y la navegación.
- Los componentes de interfaz no deberán implementar directamente operaciones administrativas privilegiadas.
- Las Server Actions y Route Handlers actuarán como puntos de entrada a operaciones del servidor.
- Las validaciones de datos se realizarán mediante Zod y las restricciones correspondientes de PostgreSQL.
- Las reglas de negocio se implementarán en los módulos funcionales.
- El acceso a la base de datos se organizará de forma que no se dupliquen consultas y operaciones innecesariamente.
- Las operaciones sensibles deberán verificar la autenticación y autorización.
- Las restricciones críticas deberán protegerse también a nivel de base de datos cuando corresponda.
Las operaciones que requieran atomicidad, como reemplazar rutinas o corregir pesos con auditoría, deberán ejecutarse mediante mecanismos transaccionales adecuados.
5.10. Desarrollo incremental
La implementación se realizará por etapas.

Cada etapa deberá tener un alcance delimitado y podrá incorporarse al repositorio mediante commits independientes.

No será necesario implementar todos los módulos simultáneamente.

Antes de modificar código existente, se deberá revisar su responsabilidad y las dependencias involucradas.

Se evitarán cambios ajenos a la funcionalidad que se esté desarrollando, salvo que sean necesarios para mantener la consistencia del sistema.

La estructura definida servirá como referencia para organizar las tareas de implementación y los futuros prompts destinados a Codex.
6. Lógica de negocio y operaciones críticas
6.1. Organización de la lógica de negocio
Las reglas de negocio se implementarán principalmente en los módulos funcionales ubicados dentro de src/features/.

Las Server Actions y los Route Handlers de Next.js actuarán como puntos de entrada a las operaciones del servidor.

Las operaciones seguirán, cuando corresponda, este flujo:
1. Verificar la identidad del usuario.
2. Comprobar su rol y permisos.
3. Validar los datos recibidos mediante Zod.
4. Ejecutar las reglas de negocio correspondientes.
5. Realizar las operaciones de base de datos.
6. Devolver un resultado que permita informar correctamente el estado de la operación.
Las restricciones críticas también deberán protegerse mediante PostgreSQL, utilizando restricciones, políticas RLS y funciones transaccionales cuando corresponda.

No se confiará exclusivamente en las validaciones de la interfaz.
6.2. Operaciones transaccionales
Las operaciones que necesiten modificar varios registros de manera coordinada deberán ejecutarse de forma transaccional.

Se utilizarán funciones de PostgreSQL, accesibles mediante Supabase RPC cuando corresponda.

Una transacción deberá garantizar que todos los cambios relacionados se completen correctamente o que ninguno se aplique si ocurre un error.

Se utilizarán mecanismos de control de concurrencia y restricciones de base de datos para evitar inconsistencias ante solicitudes simultáneas.

Las funciones que ejecuten operaciones privilegiadas deberán comprobar la autorización correspondiente y no deberán permitir que un alumno eluda las restricciones de acceso.
6.3. Publicación de rutinas
La publicación de una rutina deberá verificar:
- Que el usuario sea la profesora.
- Que el alumno destinatario exista.
- Que la rutina cumpla las validaciones necesarias para publicarse.
- Que contenga entre 1 y 6 semanas de planificación.
- Que tenga entre 1 y 7 plantillas de días y el mismo número de estímulos requeridos por semana.
- Que el umbral de aviso de estímulos restantes sea válido.
- Que la planificación de las semanas, días, bloques, ejercicios y series sea válida.
- Que se respeten las restricciones de rutinas activas y programadas.
Según la situación del alumno, una rutina publicada podrá quedar ACTIVA o PROGRAMADA.

Las rutinas BORRADOR podrán conservar información incompleta, pero no podrán utilizarse para iniciar entrenamientos.

La publicación deberá ejecutarse mediante una operación transaccional que evite estados parciales.

Restricciones para modificar la estructura de una rutina

Las operaciones que modifiquen la duración de una rutina o su cantidad de días de entrenamiento por semana deberán verificar que no exista ninguna sesión registrada en workout_sessions asociada a esa rutina.

Si existe al menos una sesión, independientemente de que se encuentre EN_CURSO o FINALIZADO, el backend deberá rechazar esas modificaciones.

La verificación y la actualización deberán ejecutarse con mecanismos de control de concurrencia adecuados para impedir que una modificación estructural coincida con el inicio de un entrenamiento.

Las modificaciones permitidas sobre bloques, ejercicios, series, repeticiones y pesos recomendados afectarán únicamente la planificación de la rutina y los entrenamientos que se inicien posteriormente.

Los snapshots de entrenamientos existentes permanecerán sin modificaciones.
6.4. Avance por estímulos y activación automática de rutinas
La rutina se organiza en semanas de planificación, no en períodos obligatorios de siete días. Cada semana requiere tantos estímulos como días de entrenamiento configurados (entre 1 y 7). Un estímulo equivale a una sesión que pasa de EN_CURSO a FINALIZADO.

El alumno podrá elegir cualquier plantilla de día de su semana actual y repetir una plantilla en fechas distintas. Cada sesión finalizada contará como un estímulo, independientemente de la plantilla elegida. Una sesión EN_CURSO no contará hasta su finalización.

Cálculo de progreso
- Los estímulos completados de una semana se obtendrán contando sus sesiones FINALIZADAS válidas; no se incrementará un contador independiente sin protección transaccional.
- La semana actual será la primera semana de planificación que todavía no haya completado sus estímulos requeridos.
- Al finalizar el último estímulo de una semana se habilitará la siguiente semana de planificación.
- Al finalizar el último estímulo de la última semana, la rutina pasará a FINALIZADA.
- Si existe una rutina PROGRAMADA como continuación, se activará en la misma operación transaccional. Si no existe, el alumno quedará sin rutina ACTIVA.
- Las rutinas reemplazadas anticipadamente podrán finalizar sin completar todos sus estímulos, conservando su historial.
Primera rutina y fecha de inicio

La primera rutina de un alumno podrá publicarse ACTIVA si su fecha de inicio es hoy, o PROGRAMADA si su fecha de inicio es futura. Una rutina inicial PROGRAMADA se activará al llegar su fecha de inicio, mediante sincronización bajo demanda en el servidor. La fecha de inicio no determina el fin de la rutina.

La rutina PROGRAMADA como continuación de una ACTIVA no tendrá una fecha de activación calculada por duración: se activará cuando finalice la rutina anterior por estímulos. El campo start_date se establecerá al activarse, de manera consistente con la zona horaria argentina.

Concurrencia y consistencia

La finalización de sesión, el avance de semana, el cambio de estado de rutina y la activación de la siguiente rutina deberán coordinarse en una transacción PostgreSQL, evitando dobles conteos y dos rutinas ACTIVA simultáneas. Una solicitud repetida de finalización no volverá a sumar estímulos.

No se requerirá una tarea programada para avanzar semanas ni finalizar rutinas por el paso del tiempo. Solo la activación de la primera rutina futura necesitará sincronización por fecha.

Las marcas de inicio y fin de sesiones se almacenarán como TIMESTAMPTZ. La fecha local de inicio de sesión se determinará en America/Argentina/Buenos_Aires y se conservará para aplicar el límite diario.
6.5. Reemplazo de rutinas activas
La profesora podrá reemplazar inmediatamente la rutina ACTIVA de un alumno, según docs/spec.md.

Antes de confirmar se informará que la rutina anterior pasará a FINALIZADA, si existen sesiones EN_CURSO asociadas a ella y que cualquier rutina PROGRAMADA ya existente conservará su planificación y estado.

La operación transaccional finalizará la rutina anterior y activará la nueva, respetando el máximo de una ACTIVA y una PROGRAMADA por alumno. La rutina previamente PROGRAMADA no tendrá su fecha recalculada: su activación seguirá condicionada a la finalización por estímulos de la nueva ACTIVA.

Las sesiones ya iniciadas conservarán su asociación, planificación y posibilidad de reanudación conforme a las reglas del MVP. Los registros históricos no se eliminarán ni sobrescribirán.
6.6. Inicio de entrenamientos
Cuando un alumno o la profesora inicie un entrenamiento, el backend deberá comprobar:
- Que el usuario tenga autorización.
- Que la rutina corresponda al alumno.
- Que la rutina esté ACTIVA y, si es la primera rutina, haya alcanzado su fecha de inicio.
- Que el día seleccionado pertenezca a la semana de planificación actual.
- Que el alumno no tenga otra sesión iniciada en la misma fecha local argentina, aunque esa sesión ya esté FINALIZADA.
- Que no exista una sesión EN_CURSO anterior que deba reanudarse antes de iniciar otra.
Al iniciar la sesión se creará un registro persistente con estado EN_CURSO.

En ese momento se generará una copia independiente de la planificación correspondiente, incluyendo:
- Ejercicios.
- Descripciones necesarias para conservar el contexto histórico.
- Organización y orden de bloques y ejercicios.
- Series.
- Repeticiones previstas.
- Pesos recomendados.
La creación de la sesión y de su planificación deberá realizarse de manera transaccional.

Las modificaciones posteriores de la rutina o de la biblioteca de ejercicios no alterarán la planificación de los entrenamientos ya iniciados.

Una misma plantilla de día podrá repetirse en fechas locales distintas, generando sesiones independientes. No se permitirá iniciar más de una sesión por alumno en una misma fecha de America/Argentina/Buenos_Aires. Esta restricción se garantizará también en PostgreSQL y bajo concurrencia.
6.7. Guardado automático de pesos
Los entrenamientos EN_CURSO permitirán registrar y modificar los pesos reales de cada serie.

Se utilizará el siguiente comportamiento:
1. El alumno ingresa o modifica el peso de una serie.
2. Cuando termina de editar el campo y sale de él, o confirma mediante el teclado, la aplicación envía el cambio al servidor.
3. El backend verifica la autorización, el estado de la sesión y la validez del peso.
4. El valor se guarda en PostgreSQL.
5. La interfaz informa que el cambio fue guardado únicamente después de recibir una confirmación correcta del servidor.
Los pesos deberán ser valores numéricos no negativos, expresados en kilogramos.

Los campos podrán quedar vacíos y se almacenarán como NULL, sin interpretarse como 0 kg.

Si ocurre un error de conexión o guardado:
- La aplicación informará que el cambio no pudo guardarse.
- No mostrará el cambio como confirmado.
- Permitirá volver a intentar la operación.
- Conservará en la interfaz el valor pendiente mientras la pantalla permanezca abierta.
Al volver a ingresar a la aplicación, el usuario podrá recuperar el último progreso confirmado correctamente en el servidor.

El guardado automático no finalizará el entrenamiento.

La implementación deberá evitar que respuestas tardías de operaciones de guardado sobrescriban valores más recientes.
6.8. Reanudación de entrenamientos
Los entrenamientos EN_CURSO permanecerán almacenados hasta su finalización.

El alumno podrá reanudar sesiones iniciadas anteriormente, incluso cuando:
- La sesión haya quedado asociada a una semana de planificación anterior por un reemplazo excepcional.
- La rutina haya finalizado por reemplazo o por otra transición permitida.
- La profesora haya reemplazado la rutina activa.
La sesión conservará su planificación original y permitirá continuar registrando los pesos.

No se permitirá iniciar nuevas sesiones sobre semanas anteriores ni sobre rutinas finalizadas.

La interfaz deberá permitir identificar y recuperar entrenamientos pendientes de finalizar.
6.9. Finalización de entrenamientos
La finalización de un entrenamiento será una operación independiente del guardado automático de pesos.

El alumno o la profesora deberán confirmar expresamente la acción de finalizar.

Verificación de guardados pendientes

Antes de permitir la finalización, la interfaz deberá comprobar el estado de los campos de peso del entrenamiento.
- Si todos los cambios están confirmados por el servidor, se podrá continuar con la finalización.
- Si existen guardados en curso, la aplicación deberá esperar su resultado.
- Si existen cambios editados pero todavía no enviados, deberá intentar guardarlos.
- Si algún guardado falla o existe un conflicto de versiones sin resolver, se impedirá la finalización hasta que el usuario resuelva la situación.
La aplicación no deberá mostrar el entrenamiento como finalizado mientras existan cambios pendientes de confirmación.

Finalización en el servidor

Una vez confirmada la acción, el backend deberá comprobar:
1. Que el usuario tenga autorización para finalizar la sesión.
2. Que la sesión exista y pertenezca al alumno correspondiente.
3. Que se encuentre en estado EN_CURSO.
4. Que se respeten las reglas de integridad y concurrencia de la operación.
La finalización deberá ejecutarse de forma atómica, registrando:
- Estado FINALIZADO.
- Fecha y hora de finalización.
- Usuario responsable de la finalización.
Se permitirá finalizar entrenamientos con pesos sin informar, almacenados como NULL.

La operación deberá ser segura ante solicitudes repetidas y no deberá permitir modificaciones posteriores de pesos por parte del alumno.

Las operaciones de guardado de pesos y finalización de entrenamientos deberán coordinarse mediante mecanismos transaccionales y de control de concurrencia en PostgreSQL.

Antes de actualizar un peso, el servidor deberá comprobar que la sesión correspondiente continúe en estado EN_CURSO.

Esta comprobación y la actualización deberán ejecutarse de forma coordinada con la operación de finalización, utilizando bloqueos transaccionales u otro mecanismo equivalente que impida condiciones de carrera.

Si una sesión ya fue finalizada, cualquier solicitud posterior de guardado de pesos deberá rechazarse, incluso si fue enviada antes de que el usuario confirmara la finalización.

La finalización no deberá confirmarse mientras existan operaciones de guardado que puedan modificar válidamente la sesión sin haber sido resueltas.

Una vez finalizado el entrenamiento, los pesos solo podrán modificarse mediante el procedimiento de corrección con auditoría autorizado para la profesora.

Una vez finalizada la sesión, la profesora podrá corregir los pesos mediante el procedimiento de auditoría definido en la sección 6.10.

La transición de EN_CURSO a FINALIZADO contabilizará exactamente un estímulo en la semana de planificación de la sesión. Cuando complete los estímulos requeridos, el servidor avanzará la semana o finalizará la rutina y activará su sucesora PROGRAMADA, todo dentro de una operación atómica. Una sesión de una rutina reemplazada y ya FINALIZADA podrá completarse para su historial, pero no modificará el progreso de la rutina ACTIVA actual.
6.10. Corrección de pesos históricos
La profesora podrá corregir pesos de entrenamientos FINALIZADOS.

Cada corrección deberá realizarse mediante una operación transaccional que:
1. Verifique la identidad y autorización de la profesora.
2. Compruebe que el entrenamiento esté FINALIZADO.
3. Obtenga el peso actual y la versión del registro de workout_sets.
4. Verifique que la versión recibida coincida con la versión almacenada.
5. Actualice el peso e incremente la versión de manera atómica.
6. Genere un registro en weight_corrections con el valor anterior, el nuevo valor, la fecha y la profesora responsable.
La actualización del peso, el incremento de la versión y la creación del registro de auditoría deberán completarse dentro de una misma transacción.

Si la versión recibida no coincide con la almacenada, el servidor deberá rechazar la corrección por conflicto e informar que el peso fue modificado desde la última consulta.

Si cualquiera de las operaciones falla, no deberá aplicarse parcialmente la corrección.

Los registros de auditoría deberán conservarse y no podrán ser modificados ni eliminados por los alumnos.

Las correcciones realizadas por la profesora no modificarán la planificación original del entrenamiento ni los pesos recomendados.
6.11. Manejo de concurrencia y consistencia
Las operaciones críticas deberán contemplar solicitudes simultáneas y reintentos.

En particular, se deberá evitar:
- La existencia de dos rutinas activas para un mismo alumno.
- La existencia de dos rutinas programadas para un mismo alumno.
- La publicación parcial de una rutina.
- El reemplazo incompleto de una rutina activa.
- La creación incompleta de una sesión de entrenamiento.
- La pérdida de actualizaciones recientes de pesos.
- Las correcciones históricas sin registro de auditoría.
- La finalización inconsistente de una misma sesión.
- Dos inicios de entrenamiento del mismo alumno en una fecha argentina.
- El doble conteo de estímulos y la doble activación de rutinas ante reintentos.
- La pérdida o duplicación de avisos de finalización.
Se utilizarán restricciones de PostgreSQL, transacciones y mecanismos de control de concurrencia adecuados para cada operación.

Control de concurrencia en el guardado de pesos

Cada registro de workout_sets tendrá un campo version, inicialmente igual a 0.

Cuando el alumno modifique un peso, la solicitud incluirá el nuevo valor y la versión del registro que está editando.

El servidor realizará una actualización condicional, comprobando que la versión recibida coincida con la versión almacenada.

Si coincide, actualizará el peso e incrementará la versión en una misma operación atómica.

Si no coincide, rechazará la actualización por conflicto y devolverá el valor y la versión actuales del servidor.

La interfaz conservará el valor que el alumno intentó guardar y le permitirá decidir si desea aplicar nuevamente su cambio sobre la versión actual.

Las correcciones de pesos realizadas por la profesora también deberán incrementar la versión del registro.

No se permitirá sobrescribir silenciosamente un valor más reciente mediante solicitudes antiguas o repetidas.
6.12. Avisos anticipados de finalización
La profesora podrá configurar por rutina el umbral de aviso en estímulos restantes, con valor predeterminado de 3 y validación para rutinas de pocos estímulos. El total de estímulos será duration_weeks × days_per_week.

Al completar una sesión, el backend calculará los estímulos restantes de la rutina ACTIVA. Cuando sean menores o iguales al umbral configurado, se mostrará un aviso en el panel de la profesora, sin enviar correos ni mensajes externos. El aviso no deberá duplicarse en cada consulta o reintento y permanecerá hasta que sea gestionado o exista una rutina PROGRAMADA como continuación, según docs/spec.md.

El cálculo y la consulta de avisos deberán basarse en el progreso persistido y considerar los cambios de estado de las rutinas.
6.13. Criterios generales de implementación
Las operaciones deberán mantener una separación clara entre interfaz, validación, lógica de negocio y persistencia.

Se priorizarán soluciones sencillas y mantenibles que respeten las reglas de docs/spec.md.

No se incorporarán servicios externos adicionales cuando las funcionalidades puedan resolverse de forma confiable mediante Next.js, Supabase y PostgreSQL.

La implementación deberá permitir realizar pruebas de las operaciones críticas y sus casos de error.

Las decisiones de esta sección deberán respetarse durante el desarrollo incremental con Codex.
7. Validaciones y manejo de errores
7.1. Principios generales
La aplicación deberá validar los datos recibidos y manejar los errores de forma consistente.

Las validaciones de la interfaz servirán para mejorar la experiencia del usuario, pero no reemplazarán las verificaciones del servidor ni las restricciones de PostgreSQL.

Se utilizarán:
- Zod para validar datos de entrada y estructuras de información.
- Reglas de negocio implementadas en los módulos funcionales.
- Restricciones y transacciones de PostgreSQL para garantizar la integridad de los datos.
- Políticas RLS y verificaciones del servidor para controlar el acceso.
Los mensajes mostrados a los usuarios deberán ser claros, breves y comprensibles.

No se mostrarán detalles internos de la base de datos, credenciales ni información técnica sensible.
7.2. Validación de formularios
Los formularios deberán validar los campos obligatorios, formatos y límites definidos en docs/spec.md.

Cuando exista un error de validación:
1. La operación no deberá ejecutarse.
2. Se informará qué dato necesita corrección.
3. Se conservarán los valores ingresados siempre que sea posible.
4. El usuario podrá corregir el error y volver a intentar.
Las validaciones del servidor serán obligatorias incluso cuando la interfaz ya haya validado los campos.
7.3. Validación de ejercicios
La creación y edición de ejercicios deberá respetar las reglas de docs/spec.md.

En particular:
- El nombre será obligatorio.
- No podrán existir ejercicios con nombres duplicados, ignorando diferencias entre mayúsculas y minúsculas.
- La descripción y el video serán opcionales.
- La desactivación de ejercicios no deberá eliminar información histórica.
La unicidad del nombre deberá protegerse también mediante una restricción o índice adecuado en PostgreSQL.

Cuando un ejercicio tenga un enlace de video asociado, el backend deberá validar que la URL corresponda a un formato y dominio admitido de YouTube.

El enlace será opcional. Si se proporciona una URL inválida, la operación deberá rechazarse con un mensaje de error comprensible.

Solo la profesora podrá agregar, modificar o quitar enlaces de YouTube.

La validación deberá impedir que se almacenen URLs arbitrarias o potencialmente inseguras.
7.4. Validación de rutinas
Las rutinas BORRADOR podrán conservar información incompleta, según las reglas de la especificación.

Antes de publicar una rutina se verificará que:
- El alumno destinatario sea válido.
- Existan entre 1 y 6 semanas de planificación y entre 1 y 7 estímulos por semana.
- El umbral de aviso sea válido.
- La planificación cumpla las reglas de días, bloques, ejercicios y series.
- Los datos obligatorios estén completos.
- Se respeten las restricciones de rutinas activas y programadas.
Cuando la publicación no sea válida, se informarán los errores y la rutina conservará su estado anterior.

Las operaciones de publicación, programación y reemplazo deberán respetar las transacciones definidas en la sección 6.
7.5. Validación de entrenamientos y pesos
Los pesos reales deberán registrarse en kilogramos.

Se aceptarán valores numéricos no negativos y campos vacíos.

Un campo vacío se interpretará como un valor no registrado y se almacenará como NULL.

El valor 0 se considerará un peso registrado, diferente de NULL.

No se aceptarán valores negativos ni entradas que no puedan interpretarse correctamente como números.

La aplicación deberá interpretar de forma consistente el separador decimal utilizado en los campos de peso.

Antes de guardar, el backend comprobará que el usuario tenga autorización para modificar la sesión y que su estado permita realizar cambios.
7.6. Errores de conexión y guardado automático
El guardado automático de pesos se realizará al finalizar la edición de cada campo, según lo definido en la sección 6.

La interfaz distinguirá entre:
- Valor editado y pendiente de guardar.
- Operación de guardado en curso.
- Valor confirmado por el servidor.
- Error de guardado.
Un valor solo se considerará guardado cuando el servidor confirme correctamente la operación.

Si el guardado falla:
1. Se informará el error.
2. El valor ingresado permanecerá visible mientras la pantalla continúe abierta.
3. Se permitirá reintentar el guardado.
4. No se informará falsamente que el cambio fue almacenado.
Si el usuario abandona o recarga la página antes de confirmar el guardado, no se garantizará la recuperación de cambios pendientes.

Al regresar, se recuperarán los últimos datos confirmados por el servidor.

El MVP no incluirá almacenamiento local persistente para trabajar sin conexión.
7.7. Errores de autenticación y autorización
Cuando una sesión de autenticación haya expirado o no sea válida, la aplicación deberá solicitar una nueva autenticación.

Las operaciones protegidas deberán comprobar el usuario autenticado y sus permisos.

Cuando un usuario no tenga autorización:
- La operación será rechazada.
- No se modificarán datos.
- Se mostrará un mensaje apropiado, sin revelar información sensible.
Las políticas RLS deberán impedir que un alumno acceda o modifique datos de otros alumnos.
7.8. Conflictos y solicitudes simultáneas
El sistema deberá manejar conflictos producidos por solicitudes simultáneas o repetidas.

Las restricciones de PostgreSQL y las operaciones transaccionales deberán impedir inconsistencias.

Cuando una operación no pueda completarse debido a un conflicto, la aplicación deberá informar el resultado y permitir actualizar la información o volver a intentar cuando corresponda.

No se deberá repetir automáticamente una operación que pueda crear registros duplicados sin contar con un mecanismo que garantice su ejecución segura.
7.9. Manejo de errores inesperados
Los errores inesperados deberán registrarse del lado del servidor con información técnica suficiente para facilitar su diagnóstico.

No deberán exponerse al usuario mensajes internos de PostgreSQL, trazas de ejecución, tokens ni credenciales.

La interfaz mostrará un mensaje general y ofrecerá la posibilidad de volver a intentar cuando sea seguro hacerlo.

Los registros técnicos deberán evitar almacenar contraseñas, tokens y otros datos sensibles.
7.10. Respuestas consistentes del servidor
Las Server Actions y los Route Handlers deberán utilizar convenciones consistentes para comunicar:
- Resultado exitoso.
- Errores de validación.
- Falta de autenticación.
- Falta de permisos.
- Conflictos de negocio.
- Errores inesperados.
Los errores esperados, como un campo inválido o un conflicto de publicación, deberán tratarse como resultados controlados.

Los errores inesperados deberán gestionarse mediante los mecanismos de manejo de errores de Next.js.

Se evitará duplicar criterios de validación y manejo de errores entre módulos.
7.11. Experiencia de usuario
Los mensajes de error deberán estar redactados en español y ser comprensibles para la profesora y los alumnos.

Cuando corresponda, los errores de formularios se mostrarán cerca del campo afectado.

Las acciones que puedan producir consecuencias importantes, como reemplazar una rutina activa, deberán solicitar confirmación previa.

La aplicación deberá proporcionar información visual sobre operaciones en curso, resultados exitosos y errores.

Se evitará mostrar una operación como completada antes de recibir la confirmación correspondiente.
7.12. Criterios de prueba
Durante la implementación se deberán comprobar, como mínimo:
- Rechazo de datos inválidos.
- Conservación de los valores de formularios cuando exista un error.
- Prevención de ejercicios duplicados.
- Rechazo de publicación de rutinas incompletas.
- Protección de las restricciones de rutinas activas y programadas.
- Guardado correcto de pesos vacíos, cero y valores decimales.
- Comportamiento ante errores de conexión.
- Protección frente a accesos no autorizados.
- Manejo de solicitudes simultáneas.
- Ausencia de modificaciones parciales en operaciones transaccionales.
Estas comprobaciones deberán incorporarse progresivamente durante el desarrollo del MVP.
8. Pruebas y estrategia de calidad
8.1. Objetivo
El proyecto incorporará pruebas automatizadas y verificaciones técnicas para comprobar que las funcionalidades respeten las reglas definidas en docs/spec.md y las decisiones de docs/architecture.md.

Las pruebas se incorporarán progresivamente durante el desarrollo del MVP.

Se priorizarán las reglas de negocio, las operaciones críticas, la seguridad y los flujos principales de la aplicación.

No será obligatorio alcanzar un porcentaje específico de cobertura de código durante el MVP.
8.2. Herramientas
Se utilizarán las siguientes herramientas:
- Vitest: pruebas unitarias y pruebas de integración que puedan ejecutarse en el entorno de JavaScript y TypeScript.
- Playwright: pruebas de extremo a extremo de los flujos principales de la aplicación.
- PostgreSQL y herramientas de Supabase: pruebas de restricciones, transacciones, funciones SQL y políticas RLS.
- TypeScript: comprobación estática de tipos.
- ESLint: análisis de código y detección de problemas de calidad.
Las herramientas se instalarán y configurarán cuando se incorporen las primeras pruebas correspondientes.

Se priorizará una configuración sencilla y mantenible.
8.3. Pruebas unitarias
Las pruebas unitarias comprobarán funciones y reglas de negocio de forma aislada.

Se priorizarán:
- Cálculo de estímulos completados y restantes por semana y rutina.
- Determinación de la semana de planificación actual según sesiones FINALIZADAS.
- Validación de semanas, días y umbral configurable de aviso.
- Determinación de fecha local argentina para el límite de un inicio diario.
- Validación de pesos en kilogramos.
- Interpretación de campos vacíos como NULL.
- Validación de datos necesarios para publicar rutinas.
- Transformaciones de datos que deban conservar el orden de bloques, ejercicios y series.
Las pruebas deberán contemplar casos válidos, inválidos y situaciones límite.
8.4. Pruebas de integración
Las pruebas de integración comprobarán la interacción entre la lógica del sistema y sus dependencias.

Se priorizarán:
- Creación de alumnos y asociación con sus perfiles.
- Publicación de rutinas.
- Activación inicial de rutinas por fecha y finalización por estímulos.
- Avance de semanas por sesiones FINALIZADAS, incluso repitiendo una plantilla en fechas distintas.
- Activación transaccional de la rutina PROGRAMADA al completar el último estímulo.
- Un único inicio de sesión por alumno y fecha local argentina, incluso con solicitudes concurrentes.
- Idempotencia de la finalización y del conteo de estímulos.
- Avisos por umbral de estímulos restantes y ausencia de duplicados.
- Reemplazo de rutinas activas.
- Creación transaccional de sesiones de entrenamiento y sus registros asociados.
- Guardado y recuperación de pesos.
- Finalización de entrenamientos.
- Corrección de pesos con auditoría.
- Restricciones de unicidad y consistencia.
- Políticas RLS para los roles PROFESORA y ALUMNO.
- Verificar que el sistema permita modificar la duración y la cantidad de días de una rutina cuando todavía no existen entrenamientos iniciados asociados a ella.
- Verificar que el sistema rechace esas modificaciones cuando exista al menos un entrenamiento EN_CURSO.
- Verificar que el sistema rechace esas modificaciones cuando exista al menos un entrenamiento FINALIZADO.
- Verificar que una modificación estructural y el inicio simultáneo de un entrenamiento no puedan producir un estado inconsistente.
Las pruebas que necesiten una base de datos real deberán ejecutarse en un entorno de prueba aislado.

No deberán utilizarse datos reales de alumnos para las pruebas automatizadas.
8.5. Pruebas de extremo a extremo
Se utilizará Playwright para verificar los flujos principales desde la perspectiva del usuario.

Se priorizarán los siguientes escenarios:

Flujo de la profesora
1. Iniciar sesión.
2. Crear un alumno.
3. Crear un ejercicio.
4. Crear una rutina en BORRADOR.
5. Completar y publicar la rutina.
6. Consultar el estado de la rutina.
7. Revisar el historial de entrenamientos del alumno.
8. Corregir un peso finalizado y comprobar el registro de auditoría.
Flujo del alumno
1. Iniciar sesión.
2. Consultar su rutina vigente.
3. Seleccionar un día disponible de la semana actual.
4. Iniciar un entrenamiento.
5. Registrar pesos.
6. Confirmar que los cambios fueron guardados.
7. Salir y recuperar el entrenamiento EN_CURSO.
8. Finalizar el entrenamiento.
9. Consultarlo desde el historial.
También se comprobarán escenarios de error y acceso no autorizado.

Las pruebas deberán ejecutarse, cuando corresponda, en tamaños de pantalla representativos de dispositivos móviles.
8.6. Pruebas de seguridad
Se comprobará que:
- Un alumno no pueda consultar datos privados de otro alumno.
- Un alumno no pueda crear, publicar o modificar rutinas.
- Un alumno no pueda corregir entrenamientos FINALIZADOS.
- Solo la profesora pueda administrar alumnos y ejercicios.
- Las operaciones privilegiadas verifiquen la autorización en el servidor.
- Las políticas RLS impidan accesos no autorizados.
- No se expongan credenciales administrativas en el navegador.
Las pruebas de permisos deberán incluir intentos de acceso directo a operaciones del servidor, sin depender de que la interfaz oculte los controles.
8.7. Pruebas de concurrencia y transacciones
Se deberán probar situaciones en las que existan solicitudes simultáneas o repetidas.

En particular:
- Intentos simultáneos de publicar rutinas incompatibles.
- Reemplazos concurrentes de una rutina activa.
- Solicitudes repetidas de inicio de entrenamiento.
- Solicitudes repetidas de finalización y transición automática de rutina.
- Intentos de iniciar dos sesiones en el mismo día local.
- Actualizaciones concurrentes de un mismo peso.
- Correcciones históricas simultáneas.
Las pruebas deberán verificar que no existan modificaciones parciales ni violaciones de las restricciones de integridad.
8.8. Pruebas de errores de conexión
Se deberán comprobar los siguientes escenarios:
- Fallo de conexión al guardar un peso.
- Respuesta tardía del servidor.
- Reintento de un guardado fallido.
- Recarga de la página con cambios pendientes.
- Recuperación del último valor confirmado.
- Pérdida de autenticación durante una operación.
La aplicación no deberá informar que un cambio fue guardado cuando no exista confirmación del servidor.
8.9. Pruebas de compatibilidad y accesibilidad
La interfaz se diseñará y comprobará prioritariamente para dispositivos móviles.

Se realizarán verificaciones en navegadores modernos compatibles con Android, iOS y computadoras.

Se prestará atención a:
- Navegación mediante pantallas táctiles.
- Legibilidad de textos y formularios.
- Tamaño adecuado de controles interactivos.
- Mensajes de validación comprensibles.
- Navegación mediante teclado cuando corresponda.
- Etiquetas accesibles en los campos.
- Contraste visual suficiente.
- Estados de carga y error perceptibles.
8.10. Datos y entornos de prueba
Las pruebas automatizadas utilizarán datos ficticios.

Las pruebas que modifiquen la base de datos deberán ejecutarse en un entorno aislado de producción.

Las credenciales utilizadas para las pruebas se administrarán mediante variables de entorno y no se incorporarán al repositorio.

Las pruebas deberán poder repetirse sin depender de datos creados manualmente con anterioridad.

Cuando sea necesario, se utilizarán datos iniciales de prueba reproducibles.
8.11. Verificaciones antes de finalizar una tarea
Antes de considerar terminada una tarea de implementación, se deberá:
1. Comprobar que el código compile y pase las verificaciones de TypeScript.
2. Ejecutar ESLint sobre el código correspondiente.
3. Ejecutar las pruebas automatizadas relacionadas con la funcionalidad.
4. Verificar que se respeten los permisos y las reglas de negocio aplicables.
5. Revisar que no se hayan incorporado credenciales o datos sensibles.
6. Confirmar que los cambios estén limitados al alcance solicitado.
Si alguna verificación no puede ejecutarse, deberá informarse expresamente.

No se deberá afirmar que una prueba pasó si no fue ejecutada.
8.12. Reglas para el trabajo con Codex
Las tareas destinadas a Codex deberán tener un alcance concreto y verificable.

Cuando corresponda, cada tarea deberá incluir:
- Funcionalidad que se implementará.
- Archivos o módulos involucrados.
- Reglas de negocio aplicables.
- Restricciones de seguridad.
- Criterios de aceptación.
- Pruebas que deben ejecutarse.
Codex deberá respetar los documentos de especificación y arquitectura.

No deberá modificar funcionalidades ajenas a la tarea sin una justificación técnica.

No deberá eliminar ni alterar pruebas únicamente para ocultar un comportamiento incorrecto.

Al finalizar, deberá informar los cambios realizados, las verificaciones ejecutadas y cualquier limitación pendiente.
8.13. Criterio de finalización de una funcionalidad
Una funcionalidad podrá considerarse terminada cuando:
- Cumpla los criterios de aceptación definidos para la tarea.
- Respete las reglas de negocio correspondientes.
- Incluya las validaciones y controles de acceso necesarios.
- No presente errores conocidos que impidan su uso principal.
- Haya superado las verificaciones aplicables.
- Se hayan documentado las limitaciones o pruebas pendientes.
La estrategia de pruebas podrá ampliarse a medida que el proyecto incorpore nuevas funcionalidades.