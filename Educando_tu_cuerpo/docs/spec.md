# Especificación del proyecto — Educando tu cuerpo

## 1. Descripción del proyecto

**Nombre:** Educando tu cuerpo — Paulina Onocko.

**Objetivo:** Desarrollar una aplicación web que permita a una profesora de educación física crear, asignar y administrar rutinas de entrenamiento personalizadas para los alumnos de su gimnasio.

El sistema tendrá dos tipos de usuarios:

- **Profesora (administradora):** podrá gestionar alumnos, crear y modificar rutinas personalizadas, administrar una biblioteca de ejercicios, configurar series y repeticiones por semana, asignar pesos y consultar el progreso de sus alumnos.
- **Alumno:** podrá acceder únicamente a sus propias rutinas, consultar ejercicios y videos explicativos, registrar los pesos utilizados, finalizar entrenamientos y revisar su historial.

### 1.1. Funcionamiento general

1. La profesora registra un alumno en el sistema.
2. Crea una rutina personalizada, definiendo su fecha de inicio, duración en semanas y cantidad de días de entrenamiento por semana.
3. Selecciona ejercicios de la biblioteca o crea nuevos ejercicios cuando sea necesario.
4. Organiza los ejercicios en días de entrenamiento y bloques, configurando sus series y repeticiones.
5. Puede modificar la planificación de cada semana sin tener que volver a cargar todos los ejercicios.
6. Publica la rutina para que el alumno pueda consultarla.
7. El alumno accede a la semana correspondiente y visualiza el próximo entrenamiento sugerido.
8. Realiza sus entrenamientos y registra los pesos utilizados en cada serie, sin modificar la planificación.
9. Finaliza cada entrenamiento mediante el botón **"Finalizar entrenamiento"**.
10. El sistema guarda los datos del entrenamiento y permite consultar su historial.
11. La profesora puede asignar pesos sugeridos, registrar o corregir pesos y supervisar el progreso del alumno.
12. Al finalizar el período de una rutina, esta se conserva en el historial del alumno.

### 1.2. Características principales

- Cada alumno podrá tener como máximo una rutina ACTIVA y una rutina PROGRAMADA al mismo tiempo.
- También podrá tener múltiples rutinas en estado BORRADOR.
- Un alumno podrá permanecer temporalmente sin ninguna rutina ACTIVA, por ejemplo, cuando todavía no tenga una rutina asignada o cuando su última rutina haya finalizado y no exista otra vigente.
- Las rutinas serán creadas individualmente por la profesora. No existirán rutinas completas precargadas.
- La duración de cada rutina será configurable entre 1 y 6 semanas.
- La cantidad de días de entrenamiento por semana será configurable entre 1 y 7.
- Las rutinas estarán organizadas por semanas, días de entrenamiento, bloques y ejercicios.
- Las series y repeticiones podrán variar entre semanas sin necesidad de volver a cargar los ejercicios.
- La profesora podrá modificar rutinas publicadas sin alterar el historial de entrenamientos finalizados.
- La profesora podrá asignar pesos sugeridos y el alumno registrar los pesos realmente utilizados.
- Los alumnos no podrán modificar ejercicios, series ni repeticiones.
- Cada ejercicio podrá incluir un video explicativo.
- Los alumnos podrán repetir entrenamientos, incluso durante una misma fecha.
- Las semanas avanzarán automáticamente por calendario.
- Se conservará el historial de rutinas, entrenamientos realizados y pesos registrados.
- La aplicación tendrá una interfaz sencilla, minimalista y adaptable a celulares.
- Se utilizará el color bordó del logo de Paulina como identidad visual principal.

### 1.3. Gestión de ejercicios

El sistema contará con una **biblioteca de ejercicios dinámica**, administrada por la profesora.

Al crear una rutina, la profesora podrá:

- Seleccionar ejercicios previamente registrados mediante una lista desplegable con buscador.
- Crear nuevos ejercicios cuando no se encuentren en la biblioteca.
- Agregar opcionalmente un video explicativo y una descripción o indicaciones.
- Reutilizar ejercicios en distintas rutinas sin tener que cargarlos nuevamente.

Los ejercicios creados se incorporarán automáticamente a la biblioteca para utilizarlos en futuras rutinas.

Cada ejercicio tendrá los siguientes datos:

- **Nombre:** obligatorio.
- **Video explicativo:** opcional.
- **Descripción o indicaciones:** opcional.

Las series, repeticiones y pesos no formarán parte de la definición del ejercicio, ya que se configurarán individualmente en cada rutina.

La profesora podrá editar los datos de los ejercicios y desactivar aquellos que ya no utilice, conservando la información de las rutinas históricas.

La biblioteca podrá comenzar vacía y crecerá progresivamente a medida que la profesora agregue ejercicios.

### 1.4. Organización de las rutinas

Las rutinas se organizarán por semanas y días de entrenamiento.

Cada rutina tendrá:

- Un alumno asignado.
- Una fecha de inicio.
- Una duración configurable por la profesora, con un mínimo de 1 y un máximo de 6 semanas.
- Una cantidad de días de entrenamiento por semana configurable por la profesora, con un mínimo de 1 y un máximo de 7 días.
- Bloques y ejercicios dentro de cada día.
- Series y repeticiones configurables por semana.

La duración y la cantidad de días de entrenamiento se establecerán individualmente para cada rutina.

Por ejemplo, un alumno podrá tener una rutina de 4 semanas y 2 días por semana, mientras que otro tendrá una de 6 semanas y 4 días por semana.

Los días se identificarán como Día 1, Día 2, Día 3, etc., según la cantidad configurada.

Estos días representarán entrenamientos diferentes y no estarán necesariamente asociados a días específicos del calendario.

La profesora podrá copiar la planificación entre semanas y modificar ejercicios, series y repeticiones sin volver a cargar toda la rutina.

Las rutinas no tendrán nombres personalizados. Se identificarán mediante el alumno, su período y la semana correspondiente.

#### 1.4.1. Avance automático de semanas

Las semanas de una rutina avanzarán automáticamente según la fecha de inicio establecida por la profesora.

Cada semana tendrá una duración de siete días consecutivos.

- La semana 1 comenzará en la fecha de inicio de la rutina.
- La semana 2 comenzará siete días después.
- Las siguientes semanas avanzarán sucesivamente cada siete días.
- El avance semanal no dependerá de la cantidad de entrenamientos completados.
- Los entrenamientos no realizados no impedirán el avance a la siguiente semana.
- Repetir un entrenamiento no modificará el avance semanal.

La aplicación mostrará automáticamente la semana correspondiente según la fecha actual y la fecha de inicio de la rutina.

#### 1.4.2. Modificación de rutinas publicadas

La profesora podrá editar una rutina incluso cuando ya esté publicada y siendo utilizada por un alumno.

Podrá modificar ejercicios, series, repeticiones y pesos sugeridos.

Los cambios se aplicarán a la planificación pendiente o futura, sin modificar los datos históricos de entrenamientos ya finalizados.

### 1.5. Realización de entrenamientos y registro de pesos

La aplicación mostrará al alumno el próximo entrenamiento sugerido de su rutina activa.

El alumno podrá seleccionar cualquiera de los días de entrenamiento disponibles en la semana correspondiente.

Un mismo día de entrenamiento podrá realizarse más de una vez, incluso durante una misma fecha.

Cada realización se registrará de forma independiente, conservando los datos correspondientes.

#### 1.5.1. Registro de pesos

Los alumnos podrán registrar los pesos realmente utilizados en cada serie de los ejercicios.

La profesora podrá asignar pesos sugeridos y registrar o corregir los pesos utilizados.

Los pesos sugeridos por la profesora y los pesos realmente utilizados se almacenarán de manera independiente.

El alumno no podrá modificar los ejercicios, las series ni las repeticiones establecidas por la profesora.

#### 1.5.2. Finalización de entrenamientos

El alumno finalizará cada entrenamiento mediante el botón **"Finalizar entrenamiento"**.

Al finalizar, el sistema:

- Guardará la fecha de realización.
- Guardará los ejercicios y los pesos registrados.
- Marcará esa realización como completada.
- Conservará la información para el historial y el seguimiento del progreso.
- Mostrará el próximo entrenamiento sugerido, según la planificación y los entrenamientos completados.

Finalizar un entrenamiento no modificará la semana actual ni impedirá repetir ese mismo día de entrenamiento.

#### 1.5.3. Historial y seguimiento

El sistema conservará el historial de entrenamientos realizados, incluyendo las repeticiones de un mismo día de entrenamiento.

La profesora podrá consultar el progreso de cada alumno a partir de los pesos registrados a lo largo de las semanas.

El alumno podrá consultar sus propios entrenamientos y rutinas anteriores.

Los registros históricos no se sobrescribirán cuando se repita un entrenamiento o se modifique una rutina publicada.

### 1.6. Interfaz de usuario

La aplicación tendrá dos interfaces diferenciadas:

- **Panel de la profesora:** gestión de alumnos, biblioteca de ejercicios, creación y edición de rutinas, asignación de pesos y seguimiento del progreso.
- **Panel del alumno:** consulta de la rutina activa, visualización de ejercicios y videos, registro de pesos, finalización de entrenamientos e historial.

El diseño será minimalista, con pocas opciones por pantalla, navegación sencilla y prioridad de uso desde dispositivos móviles.

Se utilizarán el color bordó de la identidad visual de Paulina, fondos claros y componentes simples.


## 2. Objetivos y alcance del MVP

### 2.1. Objetivo general

Desarrollar una primera versión funcional de la aplicación web Educando tu cuerpo, que permita a la profesora administrar alumnos y rutinas de entrenamiento personalizadas, mientras que cada alumno pueda consultar su planificación, registrar los pesos utilizados y visualizar su progreso.

El MVP deberá permitir completar el proceso principal del sistema: desde el registro de un alumno y la creación de su rutina hasta la realización de entrenamientos y la consulta del historial.

### 2.2. Objetivos específicos

- Permitir el acceso seguro al sistema mediante usuarios con roles diferenciados.
- Facilitar a la profesora la gestión de sus alumnos.
- Permitir crear, editar y reutilizar ejercicios mediante una biblioteca dinámica.
- Permitir crear y modificar rutinas personalizadas para cada alumno.
- Configurar individualmente la duración de cada rutina, entre 1 y 6 semanas, y la cantidad de días de entrenamiento por semana, entre 1 y 7.
- Organizar las rutinas por semanas, días, bloques y ejercicios.
- Facilitar la planificación semanal mediante la copia de ejercicios y la modificación de series y repeticiones.
- Permitir asignar pesos sugeridos y registrar los pesos realmente utilizados.
- Permitir que los alumnos finalicen y repitan entrenamientos.
- Conservar el historial de entrenamientos y rutinas.
- Ofrecer una interfaz sencilla y adaptable a dispositivos móviles.

### 2.3. Funcionalidades incluidas en el MVP

#### 2.3.1. Autenticación y usuarios

- Inicio y cierre de sesión.
- Dos roles: profesora (administradora) y alumno.
- Acceso a interfaces diferentes según el rol.
- Protección de la información para que cada alumno acceda únicamente a sus propios datos.

#### 2.3.2. Gestión de alumnos

- Registrar nuevos alumnos.
- Consultar el listado de alumnos.
- Visualizar la información individual de cada alumno.
- Editar sus datos.
- Consultar su rutina activa y su historial.
- Desactivar y reactivar alumnos sin eliminar sus datos históricos. Los alumnos desactivados no podrán acceder al sistema hasta que la profesora los reactive.

#### 2.3.3. Biblioteca de ejercicios

- Crear ejercicios con nombre y, opcionalmente, descripción y video explicativo.
- Buscar y seleccionar ejercicios existentes.
- Editar los datos de un ejercicio.
- Desactivar ejercicios sin perder la información histórica.
- Reutilizar ejercicios en diferentes rutinas.

#### 2.3.4. Gestión de rutinas

- Crear rutinas personalizadas para cada alumno.
- Definir fecha de inicio, duración en semanas y cantidad de días por semana.
- Organizar entrenamientos mediante bloques y ejercicios.
- Configurar series y repeticiones.
- Copiar la planificación de una semana a otra.
- Modificar ejercicios, series y repeticiones de semanas específicas.
- Guardar rutinas en estado borrador antes de publicarlas.
- Publicar rutinas para que los alumnos puedan acceder a ellas.
- Editar rutinas publicadas, conservando los registros históricos.
- Mantener una única rutina activa por alumno.

#### 2.3.5. Consulta y realización de entrenamientos

- Mostrar al alumno la semana correspondiente según la fecha de inicio de su rutina.
- Mostrar el próximo entrenamiento sugerido.
- Consultar los días de entrenamiento disponibles.
- Visualizar los ejercicios, series, repeticiones y videos explicativos.
- Registrar los pesos utilizados en cada serie.
- Finalizar una realización mediante el botón "Finalizar entrenamiento".
- Permitir repetir un entrenamiento, incluso durante una misma fecha.
- Guardar cada realización como un registro independiente.
- Avanzar automáticamente las semanas según el calendario.

#### 2.3.6. Registro de pesos y seguimiento

- Permitir que la profesora asigne pesos sugeridos.
- Permitir que el alumno registre los pesos realmente utilizados.
- Permitir que la profesora registre o corrija pesos.
- Conservar los registros de pesos de cada entrenamiento.
- Consultar la evolución de los pesos utilizados en diferentes semanas.

El progreso se visualizará mediante listas o tablas simples que permitan consultar los pesos utilizados por ejercicio, fecha y entrenamiento. Los gráficos de evolución quedarán fuera del MVP.

#### 2.3.7. Historial

- Consultar entrenamientos finalizados.
- Consultar rutinas anteriores.
- Conservar los datos históricos aunque una rutina sea modificada posteriormente.
- Permitir que la profesora consulte el historial de sus alumnos.
- Permitir que cada alumno consulte únicamente su propio historial.

### 2.4. Funcionalidades fuera del alcance del MVP

Las siguientes funcionalidades no se incluirán en la primera versión:

- Pagos de cuotas y facturación.
- Reserva de turnos o clases.
- Control de asistencia al gimnasio.
- Planes de alimentación y seguimiento nutricional.
- Mensajería interna entre profesora y alumnos.
- Notificaciones automáticas por correo electrónico o WhatsApp.
- Generación automática de rutinas mediante inteligencia artificial.
- Rutinas completas precargadas.
- Integraciones con relojes inteligentes o dispositivos de actividad física.
- Aplicación móvil nativa para Android o iOS.
- Gráficos estadísticos de evolución y paneles de análisis avanzado del rendimiento.

Estas funcionalidades podrán evaluarse para futuras versiones según las necesidades del gimnasio.

### 2.5. Alcance técnico del MVP

La primera versión se desarrollará como una aplicación web adaptable a computadoras, tablets y teléfonos celulares.

Contará con:

- Un frontend para las interfaces de la profesora y los alumnos.
- Un backend para gestionar las reglas de negocio y el acceso a los datos.
- Una base de datos relacional para almacenar usuarios, alumnos, ejercicios, rutinas y entrenamientos.
- Un sistema de autenticación y autorización.
- Persistencia del historial de entrenamientos y pesos.
- Despliegue en un servicio de hosting web.
- Posibilidad de utilizar un dominio propio.

La arquitectura y las tecnologías concretas se documentarán en `docs/architecture.md`.

### 2.6. Criterios de éxito del MVP

El MVP se considerará funcional cuando sea posible completar correctamente el siguiente flujo:

1. La profesora inicia sesión.
2. Registra un alumno.
3. Crea ejercicios nuevos o selecciona ejercicios existentes.
4. Crea una rutina personalizada con semanas, días, bloques, ejercicios, series y repeticiones.
5. Publica la rutina.
6. El alumno inicia sesión y visualiza únicamente su rutina.
7. El alumno registra los pesos utilizados y finaliza un entrenamiento.
8. El sistema guarda los datos y permite repetir el entrenamiento sin sobrescribir registros anteriores.
9. La profesora consulta los entrenamientos realizados y los pesos registrados.
10. El alumno y la profesora pueden consultar el historial correspondiente.

Además, deberán verificarse las restricciones de acceso, el avance semanal por calendario y la conservación de los registros históricos al editar una rutina publicada.


## 3. Roles y permisos

El sistema contará con dos roles: **Profesora (administradora)** y **Alumno**.

Cada usuario deberá iniciar sesión para acceder a las funcionalidades correspondientes a su rol.

El sistema verificará los permisos tanto en la interfaz como en el backend, evitando que un usuario acceda o modifique información para la que no está autorizado.

### 3.1. Profesora (administradora)

La profesora tendrá acceso a las funcionalidades de administración y gestión del gimnasio.

**Gestión de alumnos**

- Registrar nuevos alumnos.
- Consultar el listado de alumnos.
- Visualizar y editar sus datos.
- Desactivar y reactivar alumnos.
- Consultar la rutina activa y el historial de cada alumno.
- Crear las cuentas de acceso de los alumnos.
- Gestionar la activación y desactivación de sus cuentas.

**Gestión de ejercicios**

- Crear ejercicios y agregarlos a la biblioteca.
- Consultar y buscar ejercicios existentes.
- Editar nombres, descripciones y videos explicativos.
- Desactivar ejercicios que ya no utilice.
- Reutilizar ejercicios en diferentes rutinas.

**Gestión de rutinas**

- Crear rutinas personalizadas para cada alumno.
- Configurar su fecha de inicio, duración en semanas y cantidad de días de entrenamiento.
- Organizar semanas, días, bloques y ejercicios.
- Definir y modificar series y repeticiones.
- Copiar la planificación de una semana a otra.
- Guardar rutinas en estado borrador.
- Publicar rutinas para los alumnos.
- Editar rutinas publicadas, conservando los registros históricos.
- Consultar las rutinas anteriores de cada alumno.

**Registro de pesos y seguimiento**

- Asignar y modificar pesos sugeridos.
- Registrar y corregir los pesos utilizados por los alumnos.
- Consultar entrenamientos finalizados.
- Consultar el historial de pesos por ejercicio, fecha y entrenamiento.
- Supervisar el progreso mediante listas o tablas simples.
- Finalizar entrenamientos en nombre de un alumno, conservando el registro correspondiente.

### 3.2. Alumno

El alumno tendrá acceso únicamente a su información personal de entrenamiento.

**Consulta de rutinas**

- Visualizar su rutina activa.
- Consultar la semana correspondiente según el calendario.
- Visualizar los días de entrenamiento disponibles.
- Consultar ejercicios, bloques, series y repeticiones.
- Acceder a los videos explicativos.
- Consultar los pesos sugeridos por la profesora.

**Realización de entrenamientos**

- Seleccionar un día de entrenamiento disponible de la semana actual.
- Registrar los pesos realmente utilizados en cada serie.
- Finalizar un entrenamiento mediante el botón "Finalizar entrenamiento".
- Repetir un entrenamiento, incluso durante la misma fecha.
- Consultar los entrenamientos que haya realizado.
- Una vez finalizado un entrenamiento, no podrá modificar los pesos registrados. Cualquier corrección deberá realizarla la profesora.

**Historial y seguimiento**

- Consultar sus rutinas anteriores.
- Consultar su historial de entrenamientos.
- Visualizar los pesos registrados por ejercicio y fecha.

**Restricciones**

El alumno no podrá:

- Acceder a los datos de otros alumnos.
- Crear, editar o eliminar rutinas.
- Modificar ejercicios, bloques, series o repeticiones.
- Modificar los pesos sugeridos por la profesora.
- Crear o editar ejercicios de la biblioteca.
- Modificar su rol o sus permisos.
- Acceder al panel de administración.

**Gestión de cuenta**

- Iniciar y cerrar sesión.
- Cambiar su contraseña.
- Recuperar el acceso a su cuenta mediante un procedimiento seguro.
- No podrá crear cuentas de otros alumnos ni modificar su propio rol.

### 3.3. Reglas generales de acceso

- Cada usuario tendrá una cuenta individual.
- El acceso a las funcionalidades dependerá del rol asignado.
- La profesora tendrá permisos de administración sobre los alumnos y sus rutinas.
- Cada alumno solamente podrá consultar y registrar información relacionada con sus propias rutinas y entrenamientos.
- Las rutinas en estado borrador no serán visibles para los alumnos.
- Los alumnos desactivados no podrán iniciar sesión ni utilizar las funcionalidades protegidas.
- Las restricciones de acceso se verificarán en el servidor y en la base de datos, no solamente mediante la interfaz.
- Los registros históricos deberán conservarse cuando se modifique una rutina, se desactive un alumno o se desactive un ejercicio.
- Las cuentas de los alumnos serán creadas exclusivamente por la profesora.
- Los alumnos no podrán registrarse por cuenta propia.
- La recuperación y el cambio de contraseña se realizarán mediante mecanismos seguros de autenticación.
- La profesora podrá finalizar entrenamientos en nombre de un alumno.
- Los pesos de entrenamientos finalizados solo podrán ser corregidos por la profesora.

### 3.4. Matriz de permisos

| Funcionalidad | Profesora | Alumno |
|---            |---        |---     |
| Gestionar alumnos | Sí | No |
| Crear y editar ejercicios | Sí | No |
| Crear y editar rutinas | Sí | No |
| Publicar rutinas | Sí | No |
| Consultar rutina activa | Todas | Solo propia |
| Consultar videos | Sí | Sí |
| Modificar series y repeticiones | Sí | No |
| Asignar pesos sugeridos | Sí | No |
| Registrar pesos utilizados | Sí | Solo propios |
| Corregir pesos registrados | Sí | No |
| Consultar historial | Todos los alumnos | Solo propio |
| Desactivar alumnos | Sí | No |
| Crear cuentas de alumnos |	Sí |	No |
| Cambiar contraseña propia |	Sí |	Sí |
| Recuperar contraseña propia |	Sí |	Sí |
| Finalizar entrenamientos | 	Sí, de cualquier alumno |	Sí, solo propios |
| Corregir pesos de entrenamientos finalizados |	Sí |	No |


## 4. Gestión de alumnos

El sistema permitirá a la profesora registrar, consultar, modificar, desactivar y reactivar alumnos.

Cada alumno tendrá una cuenta individual para acceder a sus rutinas, entrenamientos e historial.

La gestión de alumnos será exclusiva de la profesora.

### 4.1. Registro de alumnos

La profesora podrá registrar nuevos alumnos desde su panel de administración.

Cada alumno tendrá los siguientes datos:

- **Nombre:** obligatorio.
- **Apellido:** obligatorio.
- **Correo electrónico:** obligatorio y único por cuenta.
- **Contraseña:** gestionada mediante el sistema de autenticación.
- **Estado:** activo o inactivo.

El sistema asignará automáticamente el rol Alumno a cada cuenta creada por la profesora.

No existirá un formulario público de registro de alumnos.

### 4.2. Creación y acceso a cuentas

La profesora será la única persona autorizada para crear cuentas de alumnos.

Al registrar un alumno, el sistema creará su cuenta y enviará una invitación al correo electrónico registrado.

El alumno utilizará el enlace de invitación para establecer su contraseña inicial y acceder a la aplicación.

Las invitaciones deberán tener un período de validez limitado y no podrán reutilizarse una vez completadas.

El alumno podrá:

- Iniciar y cerrar sesión.
- Establecer su contraseña mediante la invitación inicial.
- Cambiar su contraseña.
- Recuperar el acceso a su cuenta mediante un procedimiento seguro.

Las contraseñas serán gestionadas por el servicio de autenticación y no serán visibles para la profesora.

No existirá un formulario público de registro de alumnos.

### 4.3. Listado y búsqueda de alumnos

La profesora podrá consultar un listado de los alumnos registrados.

El listado permitirá:

- Visualizar nombre y apellido.
- Identificar si el alumno está activo o inactivo.
- Buscar alumnos por nombre o apellido.
- Acceder a la ficha individual de cada alumno.

### 4.4. Ficha individual del alumno

Cada alumno tendrá una ficha desde la cual la profesora podrá:

- Consultar sus datos personales registrados.
- Modificar nombre, apellido y correo electrónico.
- Consultar su estado.
- Consultar su rutina activa, si tiene una asignada.
- Crear una nueva rutina.
- Consultar sus rutinas anteriores.
- Consultar los entrenamientos realizados.
- Revisar los pesos registrados.

Cada alumno podrá tener como máximo una rutina activa.

Los alumnos que todavía no tengan una rutina publicada podrán existir en el sistema sin una rutina activa.

### 4.5. Modificación de datos

Únicamente la profesora podrá modificar los datos personales de un alumno.

Los datos editables serán:

- Nombre.
- Apellido.
- Correo electrónico.

El alumno podrá consultar sus datos personales, pero no modificarlos desde su cuenta.

El correo electrónico deberá ser único entre las cuentas registradas.

La modificación de datos personales no afectará las rutinas ni los entrenamientos históricos del alumno.

El cambio de contraseña será una funcionalidad independiente de la edición de datos personales.

### 4.6. Desactivación y reactivación

La profesora podrá desactivar alumnos que dejen de asistir al gimnasio.

La desactivación será lógica, es decir, no eliminará físicamente sus datos de la base de datos.

Al desactivar un alumno:

- Su cuenta quedará marcada como inactiva.
- No podrá acceder a las funcionalidades protegidas de la aplicación.
- Sus rutinas y entrenamientos permanecerán almacenados.
- Su historial seguirá disponible para la profesora.
- La profesora podrá reactivarlo posteriormente.

Al reactivar un alumno, recuperará el acceso a su cuenta y a la información que corresponda según el estado de sus rutinas.

### 4.7. Reglas de negocio

- Solo la profesora podrá registrar, modificar, desactivar y reactivar alumnos.
- Cada alumno tendrá una cuenta individual.
- No podrán existir dos cuentas con el mismo correo electrónico.
- Los alumnos no podrán registrarse por cuenta propia.
- Cada alumno podrá tener como máximo una rutina activa.
- Un alumno podrá estar registrado sin tener una rutina activa.
- Desactivar un alumno no eliminará sus rutinas ni sus entrenamientos.
- La profesora podrá consultar la información histórica de alumnos inactivos.
- Los alumnos solo podrán acceder a sus propios datos de entrenamiento.
- Los alumnos recibirán una invitación por correo electrónico para establecer su contraseña inicial.
- Los alumnos no podrán modificar sus datos personales, pero sí podrán cambiar o recuperar su contraseña.


## 5. Gestión de ejercicios

El sistema contará con una biblioteca dinámica de ejercicios, administrada exclusivamente por la profesora.

La biblioteca permitirá crear, consultar, buscar, editar, desactivar y reutilizar ejercicios en diferentes rutinas.

Inicialmente, la biblioteca podrá estar vacía y se completará progresivamente a medida que la profesora incorpore ejercicios.

### 5.1. Creación de ejercicios

La profesora podrá registrar nuevos ejercicios desde la sección de biblioteca o directamente durante la creación de una rutina.

Cada ejercicio tendrá los siguientes datos:

- **Nombre:** obligatorio.
- **Descripción o indicaciones:** opcional.
- **Video explicativo:** opcional. La profesora podrá asociar un enlace de YouTube al ejercicio. El sistema almacenará la URL del video, sin descargarlo ni guardar archivos de video en la aplicación.
- **Estado:** activo o inactivo, administrado por el sistema.

Al guardar un ejercicio, este se incorporará automáticamente a la biblioteca y quedará disponible para utilizarlo en futuras rutinas.

Si la profesora crea un ejercicio mientras está armando una rutina, el sistema permitirá seleccionarlo inmediatamente después de guardarlo, sin perder el trabajo realizado.

### 5.2. Biblioteca y búsqueda de ejercicios

La profesora podrá consultar todos los ejercicios registrados.

La biblioteca permitirá:

- Visualizar los nombres de los ejercicios.
- Buscar ejercicios por nombre.
- Seleccionar ejercicios mediante una lista desplegable con buscador.
- Consultar sus descripciones y videos explicativos.
- Identificar ejercicios activos e inactivos.
- Acceder a las opciones de edición y desactivación.

Los ejercicios inactivos no aparecerán entre las opciones habituales al crear nuevas rutinas.

### 5.3. Reutilización de ejercicios

Los ejercicios registrados podrán utilizarse en diferentes rutinas y para distintos alumnos.

Al seleccionar un ejercicio existente, la profesora no tendrá que volver a ingresar su nombre, descripción o video.

Las series, repeticiones y pesos se configurarán dentro de cada rutina, de manera independiente.

Por ejemplo, el ejercicio "Sentadilla" podrá utilizarse en la rutina de un alumno con 4 series de 8 repeticiones y en la de otro con 3 series de 12 repeticiones.

La modificación de las series y repeticiones de una rutina no afectará a las demás.

### 5.4. Edición de ejercicios

La profesora podrá modificar:

- Nombre.
- Descripción o indicaciones.
- Enlace de YouTube asociado al ejercicio, que podrá agregarse, reemplazarse o quitarse.

Los cambios realizados en la biblioteca se reflejarán en las consultas futuras del ejercicio.

Las modificaciones de un ejercicio no alterarán la planificación histórica almacenada en los entrenamientos ya iniciados, tanto EN_CURSO como FINALIZADOS.

Los entrenamientos iniciados conservarán la información necesaria para representar la planificación con la que fueron creados, aunque posteriormente se modifique el ejercicio de la biblioteca.

### 5.5. Desactivación y reactivación

La profesora podrá desactivar ejercicios que ya no utilice.

La desactivación será lógica, sin eliminar físicamente el ejercicio de la base de datos.

Al desactivar un ejercicio:

- Dejará de aparecer entre las opciones habituales para agregar a nuevas rutinas.
- Permanecerá registrado en la biblioteca.
- Se conservará su relación con las rutinas existentes.
- No se eliminará de los entrenamientos históricos.

La profesora podrá reactivar un ejercicio para volver a utilizarlo en nuevas rutinas.

### 5.6. Videos explicativos

Los ejercicios podrán incluir opcionalmente un video explicativo alojado en YouTube para que los alumnos consulten cómo realizar el movimiento.

La profesora podrá agregar, reemplazar o quitar el enlace de YouTube asociado a cada ejercicio.

Los alumnos podrán acceder al video desde la aplicación, siempre que tengan autorización para consultar el ejercicio correspondiente.

Los videos no se cargarán ni almacenarán en los servidores de la aplicación. El sistema guardará únicamente la URL del video de YouTube.

Se podrán utilizar videos públicos o no listados de YouTube. Los videos privados no serán compatibles con el acceso habitual mediante enlaces, salvo que YouTube autorice expresamente al usuario.

Los enlaces deberán validarse antes de guardarse para comprobar que correspondan a URLs admitidas de YouTube.

La aplicación no requerirá conversión, procesamiento ni almacenamiento de archivos de video.

El uso de YouTube no garantizará privacidad estricta: cualquier persona que tenga acceso al enlace de un video no listado podrá visualizarlo.

### 5.7. Reglas de negocio

- Solo la profesora podrá crear, editar, desactivar y reactivar ejercicios.
- Los alumnos podrán consultar únicamente los ejercicios incluidos en sus propias rutinas.
- El nombre del ejercicio será obligatorio.
- La descripción y el video serán opcionales.
- Los ejercicios se almacenarán en una biblioteca común para la profesora.
- Un ejercicio podrá utilizarse en múltiples rutinas.
- Las series, repeticiones y pesos pertenecerán a la planificación de cada rutina, no a la definición del ejercicio.
- Los ejercicios desactivados no podrán agregarse normalmente a nuevas rutinas.
- La desactivación o edición de un ejercicio no deberá eliminar ni alterar la planificación histórica de los entrenamientos ya iniciados, independientemente de que se encuentren EN_CURSO o FINALIZADOS.
- La biblioteca no tendrá ejercicios precargados obligatorios.


## 6. Creación y gestión de rutinas

El sistema permitirá a la profesora crear, configurar, publicar, modificar y consultar rutinas de entrenamiento personalizadas para cada alumno.

Cada rutina estará asociada a un único alumno y contará con una planificación organizada por semanas, días de entrenamiento, bloques y ejercicios.

La creación y administración de rutinas será exclusiva de la profesora.

### 6.1. Creación de rutinas

La profesora podrá crear una nueva rutina desde la ficha individual de un alumno.

Para crearla, deberá configurar:

- **Alumno:** destinatario de la rutina.
- **Fecha de inicio:** día a partir del cual comenzará la planificación.
- **Duración:** cantidad de semanas, configurable entre 1 y 6.
- **Días de entrenamiento:** cantidad de días distintos, configurable entre 1 y 7.

Cada rutina se identificará mediante el alumno al que pertenece y su período de entrenamiento.

No será obligatorio asignar un nombre personalizado a la rutina.

La rutina podrá guardarse como borrador antes de ser publicada.

### 6.2. Organización por semanas

Cada rutina tendrá entre 1 y 6 semanas de planificación.

Las semanas estarán numeradas consecutivamente:

- Semana 1.
- Semana 2.
- Semana 3.
- Y así sucesivamente, hasta la duración configurada.

La semana 1 comenzará en la fecha de inicio establecida.

Cada semana posterior comenzará siete días después del inicio de la semana anterior.

El avance de semanas será automático y dependerá del calendario, independientemente de la cantidad de entrenamientos realizados por el alumno.

### 6.3. Organización por días de entrenamiento

La profesora podrá definir entre 1 y 7 días distintos de entrenamiento.

Los días se identificarán como:

- Día 1.
- Día 2.
- Día 3.
- Y así sucesivamente.

Estos días representarán sesiones de entrenamiento, no días fijos del calendario.

Por ejemplo, una rutina de tres días podrá tener Día 1, Día 2 y Día 3, sin obligar al alumno a entrenar lunes, miércoles y viernes.

El alumno podrá seleccionar cualquiera de los días de entrenamiento correspondientes a su semana actual.

### 6.4. Organización por bloques

Cada día de entrenamiento estará organizado en bloques.

Los bloques permitirán agrupar ejercicios y definir su orden de realización.

La profesora podrá:

- Crear bloques dentro de un día.
- Agregar ejercicios a cada bloque.
- Modificar el orden de los bloques.
- Modificar el orden de los ejercicios dentro de cada bloque.
- Quitar ejercicios de un bloque.

La estructura de bloques permitirá representar diferentes formas de organización del entrenamiento.

### 6.5. Incorporación de ejercicios

La profesora podrá agregar ejercicios desde la biblioteca definida en la sección 5.

Para seleccionar un ejercicio, dispondrá de una lista desplegable con buscador.

Si el ejercicio no existe, podrá crearlo desde la misma pantalla sin perder la configuración de la rutina.

Cada ejercicio agregado a una rutina tendrá una configuración independiente.

La utilización de un mismo ejercicio en diferentes rutinas no implicará compartir sus series, repeticiones o pesos.

### 6.6. Configuración de series, repeticiones y pesos

Para cada ejercicio incluido en una rutina, la profesora podrá configurar:

- Cantidad de series.
- Repeticiones previstas.
- Peso recomendado, cuando corresponda.

Estos valores pertenecerán a la planificación del ejercicio dentro de la rutina.

El peso recomendado será independiente del peso real registrado posteriormente por el alumno.

La profesora podrá modificar la planificación entre las distintas semanas.

### 6.7. Planificación y progresión semanal

La profesora podrá definir una planificación diferente para cada semana de una rutina.

El sistema permitirá copiar la configuración de una semana a otra para facilitar la creación de progresiones.

Después de copiar una semana, la profesora podrá modificar:

- Ejercicios.
- Cantidad de series.
- Repeticiones.
- Pesos recomendados.
- Organización de los bloques.

Los cambios realizados en una semana no modificarán automáticamente las demás.

### 6.8. Guardado como borrador

La profesora podrá guardar una rutina en estado BORRADOR.

Las rutinas en borrador:

- Podrán tener información incompleta.
- Serán visibles únicamente para la profesora.
- Podrán editarse y completarse posteriormente.
- No estarán disponibles para el alumno.
- No permitirán registrar entrenamientos.

La publicación requerirá que la rutina cumpla las validaciones correspondientes.

### 6.9. Publicación de rutinas

Una vez completada la planificación, la profesora podrá publicar la rutina.

La publicación permitirá que el alumno consulte sus días, bloques, ejercicios y planificación semanal.

Cada alumno podrá tener como máximo una rutina activa.

Las rutinas anteriores se conservarán para consulta histórica.

### 6.10. Modificación de rutinas publicadas

La profesora podrá modificar rutinas publicadas, incluyendo:

- Ejercicios.
- Bloques y orden de ejercicios.
- Series y repeticiones.
- Pesos recomendados.

Las modificaciones afectarán la planificación disponible para los entrenamientos posteriores.

Los entrenamientos ya iniciados, tanto EN_CURSO como FINALIZADOS, conservarán una representación histórica de la planificación con la que fueron iniciados.

La edición de una rutina no deberá alterar los pesos reales ni los resultados registrados en entrenamientos iniciados o finalizados.

**Modificación de la duración y cantidad de días**

La profesora podrá modificar la duración total o la cantidad de días de entrenamiento por semana de una rutina publicada únicamente cuando todavía no exista ningún entrenamiento iniciado asociado a ella.

Se considerará entrenamiento iniciado cualquier sesión registrada, independientemente de que su estado sea EN_CURSO o FINALIZADO.

Una vez iniciado el primer entrenamiento, no se permitirá modificar:

- La duración total de la rutina, expresada en semanas.
- La cantidad de días de entrenamiento por semana.

Esta restricción se aplicará incluso cuando todos los entrenamientos existentes permanezcan EN_CURSO y ninguno haya sido finalizado.

Las modificaciones permitidas sobre ejercicios, bloques, series, repeticiones y pesos recomendados se aplicarán únicamente a los entrenamientos que se inicien posteriormente, conservando la planificación de las sesiones ya iniciadas o finalizadas.

La restricción sobre la duración y la cantidad de días deberá verificarse en el servidor y no depender únicamente de los controles de la interfaz.

### 6.11. Consulta de rutinas

La profesora podrá consultar las rutinas asociadas a cada alumno, incluyendo sus borradores, rutina activa y rutinas anteriores.

El alumno podrá consultar su rutina publicada y su planificación correspondiente.

La visualización permitirá identificar:

- Semana de entrenamiento.
- Días disponibles.
- Bloques.
- Ejercicios.
- Series y repeticiones.
- Pesos recomendados.
- Videos explicativos disponibles.

### 6.12. Reglas de negocio

- Solo la profesora podrá crear, modificar y publicar rutinas.
- Cada rutina pertenecerá a un único alumno.
- Cada alumno podrá tener como máximo una rutina activa.
- La duración será configurable entre 1 y 6 semanas.
- La cantidad de días de entrenamiento será configurable entre 1 y 7.
- Los días de entrenamiento no estarán vinculados a días fijos de la semana.
- Las semanas avanzarán automáticamente cada siete días.
- La profesora podrá copiar la planificación entre semanas.
- Las rutinas podrán guardarse como borradores.
- Los alumnos no podrán modificar la planificación de sus rutinas.
- Los entrenamientos finalizados conservarán sus datos históricos aunque posteriormente se modifique la rutina.

### 6.13. Preparación anticipada de rutinas

La profesora podrá crear una nueva rutina para un alumno mientras este todavía tenga otra rutina activa.

La nueva rutina podrá guardarse como BORRADOR o publicarse con estado PROGRAMADA.

Una rutina programada estará preparada para activarse automáticamente cuando finalice la rutina activa del alumno.

Las rutinas programadas serán visibles únicamente para la profesora hasta su activación.

Cada alumno podrá tener como máximo:

- Una rutina ACTIVA.
- Una rutina PROGRAMADA como próxima rutina.
- Borradores de rutinas en preparación.

### 6.14. Activación automática de rutinas programadas

Cuando finalice el período de una rutina activa, el sistema deberá:

1. Cambiar su estado a FINALIZADA.
2. Conservarla en el historial del alumno.
3. Verificar si existe una rutina PROGRAMADA.
4. Si existe, activarla automáticamente.
5. Si no existe, dejar al alumno sin rutina activa hasta que la profesora publique una nueva.

La nueva rutina comenzará inmediatamente después del período de la anterior, respetando el avance semanal basado en el calendario.

La activación automática no dependerá de que el alumno haya completado todos sus entrenamientos.

El sistema deberá garantizar que nunca existan dos rutinas activas simultáneamente para un mismo alumno.

### 6.15. Avisos de finalización de rutinas

El sistema mostrará avisos dentro del panel de la profesora cuando una rutina activa esté próxima a finalizar.

Los avisos comenzarán cuando falten dos semanas para la finalización de la rutina.

Para rutinas de menor duración, el aviso se adaptará automáticamente:

- **Rutinas de 1 semana:** el aviso estará disponible desde el inicio de la rutina.
- **Rutinas de 2 semanas:** el aviso estará disponible desde el inicio de la rutina.
- **Rutinas de 3 a 6 semanas:** el aviso aparecerá cuando resten dos semanas completas para finalizar.

Los avisos permitirán consultar:

- Nombre del alumno.
- Semana actual y duración total de la rutina.
- Tiempo restante para su finalización.
- Estado de preparación de la siguiente rutina.

Los avisos permanecerán visibles mientras la rutina esté próxima a finalizar y no exista una próxima rutina programada.

Si ya existe una rutina programada, el sistema mostrará que el siguiente período de entrenamiento está preparado.

En el MVP, los avisos se mostrarán dentro de la aplicación, sin correos electrónicos ni notificaciones push.

### 6.16. Estados de las rutinas

Las rutinas podrán encontrarse en los siguientes estados:

- BORRADOR: en preparación y no publicada.
- PROGRAMADA: publicada, pendiente de activación.
- ACTIVA: disponible para el alumno.
- FINALIZADA: período concluido o rutina reemplazada.

Los cambios de estado deberán respetar las reglas de acceso, publicación y conservación del historial.


## 7. Realización de entrenamientos y registro de pesos

El sistema permitirá a los alumnos consultar sus rutinas activas, seleccionar un día de entrenamiento, registrar los pesos utilizados y finalizar cada sesión.

Cada entrenamiento realizado se almacenará de forma independiente, permitiendo conservar un historial de las sesiones completadas.

La profesora también podrá registrar y finalizar entrenamientos en nombre de sus alumnos.

### 7.1. Acceso a los entrenamientos

Al ingresar a la aplicación, el alumno podrá consultar su rutina activa.

El sistema mostrará:

- Semana actual de entrenamiento.
- Días de entrenamiento disponibles.
- Día sugerido para continuar.
- Ejercicios correspondientes a cada día.
- Series y repeticiones planificadas.
- Pesos recomendados, cuando existan.
- Videos explicativos disponibles.

El alumno solo podrá acceder a la planificación correspondiente a su rutina.

### 7.2. Selección del día de entrenamiento

El alumno podrá seleccionar cualquiera de los días de entrenamiento correspondientes a su semana actual.

Los días se identificarán como Día 1, Día 2, Día 3, etc.

El sistema podrá sugerir el siguiente día de entrenamiento según la planificación y los entrenamientos realizados anteriormente.

Esta sugerencia no será obligatoria.

El alumno podrá realizar los días en un orden diferente al sugerido.

### 7.3. Inicio de un entrenamiento

Al seleccionar un día, el sistema mostrará los bloques y ejercicios que componen la sesión.

Para cada ejercicio se visualizarán:

- Nombre del ejercicio.
- Descripción, cuando exista.
- Video explicativo, cuando exista.
- Cantidad de series.
- Repeticiones previstas.
- Peso recomendado, cuando corresponda.
- Campos para registrar los pesos realmente utilizados.

El alumno no podrá modificar los ejercicios, la cantidad de series ni las repeticiones planificadas.

### 7.4. Registro de pesos

El alumno podrá registrar el peso utilizado en cada serie de un ejercicio.

Los pesos se expresarán en kilogramos (kg).

Cada serie tendrá un campo independiente.

Por ejemplo, un ejercicio de tres series podrá registrar:

- Serie 1: 20 kg.
- Serie 2: 22,5 kg.
- Serie 3: 25 kg.

El peso real registrado será independiente del peso recomendado por la profesora.

Los pesos deberán ser valores numéricos válidos y no podrán ser negativos.

El registro de pesos permitirá consultar posteriormente los valores utilizados en entrenamientos anteriores.

### 7.5. Finalización de entrenamientos

Al terminar una sesión, el alumno deberá presionar el botón "Finalizar entrenamiento".

Esta acción registrará el entrenamiento como completado.

El sistema almacenará:

- Alumno que realizó el entrenamiento.
- Rutina y semana correspondientes.
- Día de entrenamiento seleccionado.
- Fecha y hora de finalización.
- Ejercicios y planificación de la sesión.
- Pesos registrados para cada serie.
- Usuario que realizó la acción de finalización.

Una vez finalizado, el entrenamiento quedará incorporado al historial del alumno.

### 7.6. Repetición de entrenamientos

El alumno podrá realizar un mismo día de entrenamiento más de una vez durante la semana correspondiente.

También podrá repetirlo varias veces en una misma fecha.

Cada realización se registrará como un entrenamiento independiente.

Los nuevos registros no reemplazarán ni modificarán entrenamientos anteriores.

### 7.7. Entrenamientos finalizados por la profesora

La profesora podrá registrar y finalizar un entrenamiento en nombre de un alumno.

Para ello, accederá a la ficha del alumno y seleccionará el día de entrenamiento correspondiente.

Podrá ingresar los pesos utilizados y finalizar la sesión.

El sistema identificará que el entrenamiento fue registrado o finalizado por la profesora.

### 7.8. Modificación de entrenamientos finalizados

Una vez finalizado un entrenamiento, el alumno no podrá modificar los pesos registrados.

La profesora podrá corregir los pesos de un entrenamiento finalizado cuando sea necesario.

Estas correcciones no modificarán la planificación original de la rutina ni otros entrenamientos del alumno.

### 7.9. Conservación del historial

Cada entrenamiento finalizado conservará la información necesaria para representar cómo fue realizado.

Esto incluye la planificación de ejercicios, series, repeticiones y pesos recomendados correspondientes al momento del entrenamiento.

Las modificaciones posteriores de la rutina o de los ejercicios de la biblioteca no alterarán los registros históricos ya finalizados.

### 7.10. Reglas de negocio

- Solo los alumnos y la profesora podrán registrar entrenamientos.
- Los alumnos únicamente podrán iniciar nuevos entrenamientos correspondientes a la semana actual de su rutina activa. Podrán continuar y finalizar entrenamientos iniciados anteriormente, aunque la semana o la rutina haya terminado, según las reglas de la sección 11
- La profesora podrá registrar entrenamientos en nombre de cualquier alumno bajo su administración.
- Los entrenamientos corresponderán a la semana actual de la rutina.
- El alumno podrá elegir libremente cualquiera de los días de esa semana.
- Un mismo día podrá realizarse múltiples veces.
- Cada realización tendrá un registro independiente.
- Los pesos se registrarán por serie y en kilogramos.
- Los alumnos no podrán modificar la planificación establecida por la profesora.
- Los entrenamientos se considerarán completados únicamente después de la acción de finalización.
- Los alumnos no podrán editar entrenamientos finalizados.
- La profesora podrá corregir pesos de entrenamientos finalizados.
- Los entrenamientos históricos no se alterarán por modificaciones posteriores de las rutinas.

### 7.11. Finalización con pesos incompletos

El sistema permitirá finalizar un entrenamiento aunque existan series sin un peso registrado.

Los campos de peso serán opcionales.

Cuando una serie no tenga un peso registrado, el sistema conservará ese valor como dato no informado, sin interpretarlo automáticamente como 0 kg.

El entrenamiento podrá finalizarse siempre que cumpla las demás condiciones de validación.

Una vez finalizado, el alumno no podrá modificar los pesos registrados.

La profesora podrá realizar correcciones posteriores.

### 7.12. Guardado y recuperación de entrenamientos en curso

El sistema permitirá conservar el progreso de un entrenamiento que todavía no haya sido finalizado.

Los pesos ingresados se guardarán de forma persistente para que el alumno pueda continuar su entrenamiento posteriormente.

Si el alumno cierra la aplicación, cambia de pantalla o pierde temporalmente la conexión, podrá recuperar el último progreso guardado correctamente.

El sistema diferenciará entre entrenamientos EN CURSO y FINALIZADOS.

Un entrenamiento EN CURSO no se considerará completado ni aparecerá como una sesión finalizada en el historial.

El alumno podrá reanudar su entrenamiento y continuar registrando pesos hasta presionar "Finalizar entrenamiento".

El guardado deberá realizarse sin requerir que el alumno finalice la sesión.

### 7.13. Consulta de semanas anteriores

El alumno podrá consultar la planificación de las semanas anteriores de su rutina.

La consulta permitirá visualizar:

- Días de entrenamiento.
- Bloques y ejercicios.
- Series y repeticiones planificadas.
- Pesos recomendados.
- Videos explicativos disponibles.

Las semanas anteriores estarán disponibles únicamente en modo lectura.

El alumno no podrá iniciar nuevos entrenamientos correspondientes a semanas que ya hayan finalizado.

Los entrenamientos efectivamente realizados durante esas semanas podrán consultarse desde el historial.


## 8. Historial y seguimiento de entrenamientos

El sistema permitirá consultar el historial de entrenamientos finalizados y los pesos registrados por los alumnos.

El historial tendrá como objetivo facilitar el seguimiento de la actividad realizada y la evolución de los pesos utilizados en cada ejercicio.

La información se presentará mediante listas y tablas sencillas, adaptadas a dispositivos móviles.

### 8.1. Historial del alumno

Cada alumno podrá consultar únicamente su propio historial de entrenamientos.

El historial incluirá los entrenamientos finalizados de su rutina actual y de sus rutinas anteriores.

Para cada entrenamiento se mostrará:

- Fecha de realización.
- Rutina a la que pertenece.
- Semana correspondiente.
- Día de entrenamiento realizado.
- Ejercicios incluidos.
- Series y repeticiones planificadas.
- Pesos utilizados en cada serie.

Los entrenamientos se mostrarán ordenados desde el más reciente hasta el más antiguo.

### 8.2. Historial desde el panel de la profesora

La profesora podrá consultar el historial de cualquier alumno registrado.

Desde la ficha individual de un alumno podrá acceder a sus entrenamientos finalizados y revisar los pesos utilizados.

La profesora podrá consultar el historial de alumnos activos e inactivos.

### 8.3. Detalle de un entrenamiento

Al seleccionar un entrenamiento del historial, el sistema mostrará su información completa.

El detalle incluirá:

- Fecha y hora de finalización.
- Semana y día correspondientes.
- Ejercicios realizados.
- Series y repeticiones planificadas.
- Pesos recomendados, cuando existan.
- Pesos reales registrados.
- Identificación de quién finalizó el entrenamiento.

Los pesos que no hayan sido informados aparecerán como "Sin registrar".

No se interpretarán como 0 kg.

### 8.4. Historial de pesos por ejercicio

El sistema permitirá consultar el historial de pesos registrados para un ejercicio específico.

El alumno podrá seleccionar un ejercicio incluido en sus entrenamientos y visualizar los registros históricos correspondientes.

La información incluirá:

Fecha de cada entrenamiento.

Rutina y semana correspondientes.

Cantidad de series y repeticiones planificadas.

Peso registrado en cada serie.

Los registros se mostrarán cronológicamente para facilitar la comparación de los pesos utilizados.

El historial permitirá filtrar los registros por rutina y por ejercicio.

Los alumnos únicamente podrán consultar sus propios registros.

La profesora podrá consultar los registros de cualquiera de sus alumnos.

En el MVP, la información se presentará mediante listas y tablas, sin gráficos estadísticos.

### 8.5. Conservación de información histórica

Los entrenamientos finalizados conservarán una representación de la planificación utilizada en el momento de su realización.

La modificación posterior de una rutina o de un ejercicio de la biblioteca no deberá alterar la información histórica del entrenamiento.

La finalización o sustitución de una rutina tampoco eliminará sus entrenamientos.

Los registros permanecerán asociados al alumno correspondiente.

### 8.6. Corrección de pesos históricos

La profesora podrá corregir los pesos registrados en entrenamientos finalizados.

Los alumnos no podrán modificar estos registros.

Cada corrección deberá generar un registro de auditoría que incluya:

Entrenamiento y serie modificados.

Valor anterior.

Valor nuevo.

Fecha y hora de la modificación.

Identificación de la profesora responsable.

La auditoría deberá conservarse aunque posteriormente se realicen nuevas correcciones sobre el mismo registro.

Las correcciones afectarán únicamente al peso seleccionado y no modificarán otros entrenamientos ni la planificación original de la rutina.

El sistema deberá permitir consultar el historial de correcciones desde el panel de administración.

### 8.7. Consulta de rutinas anteriores

El alumno y la profesora podrán consultar las rutinas finalizadas.

Las rutinas anteriores estarán disponibles en modo lectura.

La consulta permitirá visualizar la planificación correspondiente y acceder a los entrenamientos que se realizaron durante su período.

No podrán iniciarse nuevos entrenamientos sobre rutinas finalizadas.

### 8.8. Reglas de negocio

- Cada alumno podrá consultar únicamente su propio historial.
- La profesora podrá consultar el historial de todos sus alumnos.
- Los entrenamientos finalizados se conservarán aunque la rutina deje de estar activa.
- Los entrenamientos repetidos aparecerán como registros independientes.
- Los pesos no informados se mostrarán como "Sin registrar".
- Los alumnos no podrán modificar entrenamientos finalizados.
- La profesora podrá corregir los pesos históricos.
- Las modificaciones posteriores de rutinas y ejercicios no alterarán los datos históricos.
- En el MVP, el seguimiento se realizará mediante listas y tablas, sin gráficos estadísticos.


## 9. Paneles e interfaz de usuario

La aplicación contará con dos interfaces principales, diferenciadas según el rol del usuario:

- Panel de la profesora.
- Panel del alumno.

Cada usuario accederá únicamente a las funcionalidades autorizadas para su rol.

La interfaz será adaptable a dispositivos móviles, tablets y computadoras, priorizando una experiencia sencilla y cómoda desde el teléfono.

### 9.1. Diseño general

La aplicación utilizará una identidad visual basada en Educando tu cuerpo — Paulina Onocko.

El diseño seguirá estos criterios:

- Estética moderna, minimalista y profesional.
- Fondos claros y espacios visuales amplios.
- Color bordó como principal elemento de identidad.
- Tipografía legible.
- Botones y campos cómodos para pantallas táctiles.
- Navegación sencilla.
- Información organizada mediante tarjetas, listas y tablas.
- Diseño adaptable a diferentes tamaños de pantalla.

Se priorizará la claridad de la información y la facilidad de uso por encima de los elementos decorativos.

### 9.2. Pantallas de autenticación

El sistema contará con las siguientes pantallas:

- Inicio de sesión.
- Establecimiento de contraseña mediante invitación.
- Recuperación de contraseña.
- Cambio de contraseña.

No existirá una pantalla pública para registrar alumnos.

Después de iniciar sesión, cada usuario será dirigido al panel correspondiente a su rol.

### 9.3. Panel principal de la profesora

La profesora accederá a un panel de administración desde el cual podrá consultar información general y acceder a las funcionalidades del sistema.

El panel principal mostrará:

- Acceso a la gestión de alumnos.
- Acceso a la biblioteca de ejercicios.
- Acceso a la gestión de rutinas.
- Alumnos con rutinas próximas a finalizar.
- Alumnos que necesitan una próxima rutina.
- Rutinas en borrador o programadas.

Los avisos de finalización de rutinas aparecerán cuando resten dos semanas para terminar, adaptándose a las rutinas de menor duración.

El panel permitirá acceder directamente a los alumnos o rutinas relacionados con cada aviso.

### 9.4. Gestión de alumnos

La profesora dispondrá de una pantalla para consultar y administrar alumnos.

Esta pantalla permitirá:

- Consultar el listado de alumnos.
- Buscar alumnos por nombre o apellido.
- Crear nuevas cuentas.
- Acceder a las fichas individuales.
- Editar datos personales.
- Desactivar y reactivar alumnos.

Cada ficha individual permitirá acceder a las rutinas y al historial del alumno.

### 9.5. Biblioteca de ejercicios

La profesora dispondrá de una pantalla para administrar la biblioteca de ejercicios.

Desde ella podrá:

- Consultar ejercicios existentes.
- Buscar ejercicios por nombre.
- Crear nuevos ejercicios.
- Editar ejercicios.
- Agregar, reemplazar o quitar enlaces de YouTube asociados a los ejercicios.
- Desactivar y reactivar ejercicios.

Los videos explicativos serán opcionales.

La profesora podrá incorporar un video explicativo pegando su enlace de YouTube al crear o editar un ejercicio.

El sistema almacenará únicamente la URL del video, sin descargar ni almacenar archivos de video.

Los alumnos podrán acceder a los videos desde los ejercicios correspondientes, según sus permisos de acceso.

No se implementarán funcionalidades de carga, conversión ni almacenamiento de archivos de video.

### 9.6. Gestión de rutinas

La profesora contará con una interfaz para crear y editar rutinas.

El editor permitirá:

- Seleccionar un alumno.
- Configurar fecha de inicio, duración y cantidad de días.
- Organizar semanas, días y bloques.
- Agregar ejercicios desde la biblioteca.
- Crear ejercicios sin abandonar el editor.
- Configurar series, repeticiones y pesos recomendados.
- Copiar planificaciones entre semanas.
- Guardar borradores.
- Publicar y programar rutinas.
- Modificar rutinas publicadas según las reglas establecidas.

La interfaz deberá facilitar la navegación entre semanas y días sin perder los cambios guardados.

### 9.7. Panel principal del alumno

Después de iniciar sesión, el alumno accederá a su panel personal.

La pantalla principal mostrará:

- Nombre del alumno.
- Semana actual de su rutina.
- Duración total de la rutina.
- Día de entrenamiento sugerido.
- Días de entrenamiento disponibles.
- Acceso a entrenamientos en curso.
- Acceso al historial.

El alumno podrá seleccionar libremente cualquiera de los días correspondientes a su semana actual.

Cuando no tenga una rutina activa, el sistema mostrará un mensaje informativo.

### 9.8. Pantalla de entrenamiento

La pantalla de entrenamiento estará optimizada para utilizarse desde el celular.

Mostrará:

- Semana y día seleccionados.
- Bloques y ejercicios.
- Series y repeticiones.
- Pesos recomendados.
- Campos para registrar los pesos utilizados.
- Videos explicativos disponibles.
- Estado de guardado del progreso.
- Botón para finalizar el entrenamiento.

Los campos de peso permitirán registrar valores diferentes para cada serie.

El sistema conservará el progreso guardado de entrenamientos en curso.

Antes de finalizar, se mostrará una confirmación para evitar finalizaciones accidentales.

### 9.9. Pantalla de historial

Los alumnos podrán consultar sus entrenamientos anteriores.

La pantalla permitirá:

- Consultar entrenamientos finalizados.
- Acceder al detalle de cada sesión.
- Filtrar por rutina y ejercicio.
- Consultar pesos históricos por ejercicio.
- Comparar registros mediante tablas sencillas.

La profesora podrá acceder al historial de cada alumno desde su ficha individual.

Las correcciones de pesos históricos estarán disponibles exclusivamente para la profesora.

### 9.10. Navegación y permisos

La navegación será diferente según el rol del usuario.

La profesora tendrá acceso a las secciones de administración, mientras que los alumnos accederán únicamente a sus rutinas, entrenamientos e historial.

La aplicación no mostrará opciones para las que el usuario no tenga permisos.

Las restricciones de acceso también deberán verificarse en el servidor, independientemente de la interfaz.

### 9.11. Estados y mensajes de la interfaz

La aplicación deberá mostrar mensajes claros cuando:

- Se guarde correctamente una modificación.
- Un entrenamiento esté guardando su progreso.
- Ocurra un error de conexión o guardado.
- Una rutina no esté disponible.
- Un alumno no tenga una rutina activa.
- Una acción requiera confirmación.
- Un formulario contenga datos inválidos.

Las operaciones importantes, como finalizar entrenamientos, publicar rutinas o desactivar alumnos, deberán contar con confirmaciones cuando corresponda.

### 9.12. Reglas generales

- La aplicación será responsive y mobile-first.
- Los alumnos tendrán una interfaz simplificada.
- La profesora contará con herramientas de administración.
- La navegación respetará los permisos de cada rol.
- Los datos de entrenamiento se presentarán de forma clara y legible.
- Los videos podrán reproducirse desde la aplicación.
- Las pantallas deberán informar el resultado de las operaciones importantes.
- No se incluirán gráficos estadísticos en el MVP.

### 9.13. Navegación móvil

La aplicación utilizará una barra de navegación inferior en dispositivos móviles.

Los accesos disponibles dependerán del rol del usuario.

Para la profesora, la navegación incluirá accesos a:

- Inicio.
- Alumnos.
- Rutinas.
- Ejercicios.

Para los alumnos, la navegación incluirá accesos a:

- Inicio.
- Mi rutina.
- Historial.
- Perfil.

En pantallas de mayor tamaño, la navegación podrá adaptarse a una distribución lateral o superior, manteniendo las mismas funcionalidades.

### 9.14. Pantalla de inicio de la profesora

Al iniciar sesión, la profesora accederá a un panel resumen.

El panel mostrará:

- Cantidad de alumnos registrados.
- Cantidad de rutinas activas.
- Rutinas próximas a finalizar.
- Alumnos que necesitan una próxima rutina.
- Rutinas en borrador y programadas.
- Accesos rápidos a las funcionalidades de administración.

Los avisos de finalización de rutinas seguirán las reglas definidas en la sección 6.

### 9.15. Identidad visual

La aplicación utilizará la identidad visual de Educando tu cuerpo — Paulina Onocko.

Se utilizarán:

- Logo oficial de Paulina.
- Color bordó como color principal.
- Fondos claros.
- Tipografía moderna y legible.
- Componentes visuales sencillos y consistentes.

La interfaz se diseñará siguiendo un enfoque mobile-first y responsive.

Los colores exactos, tipografías y componentes se documentarán posteriormente durante la definición del sistema de diseño.


## 10. Seguridad y requisitos técnicos

La aplicación deberá garantizar que los usuarios accedan únicamente a la información y funcionalidades correspondientes a su rol.

También deberá proteger los datos almacenados, validar las operaciones y ofrecer un funcionamiento confiable desde dispositivos móviles y computadoras.

### 10.1. Autenticación

El sistema utilizará un servicio de autenticación seguro para administrar las cuentas de usuarios.

Se utilizará Supabase Auth como servicio de autenticación.

El sistema deberá permitir:

- Iniciar y cerrar sesión.
- Establecer una contraseña mediante invitación por correo electrónico.
- Cambiar la contraseña.
- Recuperar una contraseña olvidada.
- Mantener una sesión autenticada de manera segura.
- Impedir el acceso a cuentas desactivadas.

No existirá registro público de usuarios.

Las contraseñas serán administradas por el proveedor de autenticación y no se almacenarán en texto plano en la base de datos de la aplicación.

### 10.2. Autorización y roles

El sistema tendrá dos roles:

- PROFESORA.
- ALUMNO.

Las operaciones deberán verificar los permisos correspondientes en el servidor.

La profesora podrá administrar alumnos, ejercicios, rutinas y entrenamientos.

Los alumnos únicamente podrán consultar y registrar información correspondiente a sus propias rutinas y entrenamientos.

El sistema no deberá confiar exclusivamente en la interfaz para restringir el acceso.

### 10.3. Protección de datos

La información de alumnos, rutinas y entrenamientos deberá estar protegida frente a accesos no autorizados.

Cada alumno podrá acceder únicamente a sus propios datos.

La profesora podrá consultar y administrar los datos de los alumnos registrados en el sistema.

Las cuentas desactivadas no podrán utilizar las funcionalidades protegidas.

Los datos históricos deberán conservarse según las reglas de negocio establecidas.

### 10.4. Seguridad de los enlaces de YouTube

Los videos explicativos de los ejercicios estarán alojados en YouTube.

La profesora podrá asociar opcionalmente un enlace de YouTube a cada ejercicio.

El sistema almacenará únicamente la URL del video, sin descargar, procesar ni almacenar archivos de video.

Se aplicarán las siguientes reglas:

- Se admitirán enlaces válidos de YouTube, correspondientes a videos públicos o no listados.
- Los enlaces deberán validarse en el servidor antes de guardarse.
- No se permitirán URLs de sitios distintos de los dominios de YouTube admitidos.
- Solo la profesora podrá agregar, reemplazar o quitar enlaces de los ejercicios.
- Los alumnos podrán acceder a los enlaces de los ejercicios incluidos en sus rutinas, según los permisos definidos para la aplicación.
- La aplicación no garantizará la privacidad de los videos alojados en YouTube, ya que cualquier persona con acceso al enlace de un video no listado podrá visualizarlo.

No se implementarán funcionalidades de carga, conversión ni almacenamiento de archivos de video.

La disponibilidad y reproducción de los videos dependerán de YouTube y de la configuración de privacidad establecida por el propietario del video.

### 10.5. Validación de datos

El sistema deberá validar los datos ingresados tanto en la interfaz como en el servidor.

Las validaciones incluirán:

- Campos obligatorios.
- Formato válido de correo electrónico.
- Unicidad de correos electrónicos.
- Unicidad de nombres de ejercicios, sin distinguir mayúsculas y minúsculas.
- Duración de rutinas entre 1 y 6 semanas.
- Cantidad de días de entrenamiento entre 1 y 7.
- Cantidades válidas de series y repeticiones.
- Pesos numéricos no negativos.
- Validación de las URLs de YouTube asociadas a los ejercicios, cuando se proporcione un enlace.
- Permisos para realizar modificaciones.

Los campos de peso utilizados durante un entrenamiento podrán quedar vacíos.

Un peso no informado no deberá interpretarse automáticamente como 0 kg.

### 10.6. Persistencia de entrenamientos en curso

El sistema deberá guardar de forma persistente los datos de entrenamientos que todavía no hayan sido finalizados.

Los alumnos podrán recuperar el progreso correctamente guardado cuando vuelvan a ingresar.

El sistema deberá indicar si existen cambios pendientes de guardar o si ocurrió un error durante el guardado.

La finalización de un entrenamiento será una acción independiente del guardado de su progreso.

### 10.7. Integridad de la información

El sistema deberá garantizar la consistencia de las relaciones entre alumnos, rutinas, ejercicios y entrenamientos.

Se deberán cumplir las siguientes condiciones:

- Cada rutina pertenecerá a un alumno.
- Un alumno tendrá como máximo una rutina activa.
- Un alumno tendrá como máximo una rutina programada.
- Los entrenamientos estarán asociados a la rutina correspondiente.
- Los pesos registrados estarán asociados a las series del entrenamiento.
- Los entrenamientos finalizados conservarán su información histórica.
- Las correcciones de pesos históricos generarán registros de auditoría.
- La activación automática de rutinas no deberá producir dos rutinas activas simultáneamente.

Las operaciones que modifiquen información relacionada deberán preservar la consistencia de los datos, incluso ante errores o solicitudes simultáneas.

### 10.8. Gestión de errores

La aplicación deberá informar al usuario cuando ocurra un problema.

Se contemplarán situaciones como:

- Error al iniciar sesión.
- Invitación vencida o inválida.
- Error al guardar una rutina.
- Error al guardar pesos.
- Error al subir un video.
- Pérdida de conexión.
- Intento de acceder a información sin permisos.
- Error al finalizar un entrenamiento.

Los mensajes deberán ser comprensibles y evitar exponer detalles internos del sistema.

Cuando una operación falle, el sistema deberá evitar mostrarla como completada.

### 10.9. Auditoría

El sistema conservará un registro de las correcciones realizadas por la profesora sobre pesos de entrenamientos finalizados.

Cada registro incluirá:

- Entrenamiento afectado.
- Serie modificada.
- Valor anterior.
- Valor nuevo.
- Fecha y hora de la corrección.
- Usuario responsable.

Los registros de auditoría no podrán ser modificados por los alumnos.

### 10.10. Diseño adaptable y compatibilidad

La aplicación será web y utilizará un enfoque mobile-first.

Deberá funcionar en navegadores modernos de teléfonos, tablets y computadoras.

Se priorizará la compatibilidad con dispositivos Android e iPhone.

No será necesario instalar una aplicación nativa desde una tienda.

La interfaz deberá adaptarse a diferentes tamaños de pantalla y permitir una interacción cómoda mediante controles táctiles.

### 10.11. Tecnologías previstas

Se propone utilizar las siguientes tecnologías:

- Next.js con React y TypeScript para la aplicación web.
- Tailwind CSS para los estilos.
- PostgreSQL mediante Supabase para la base de datos.
- Supabase Auth para autenticación.
- YouTube para alojar los videos explicativos de los ejercicios, mediante enlaces asociados a cada ejercicio.
- Zod para validación de datos.
- GitHub para el repositorio y control de versiones.
- Vercel para el despliegue, con un plan compatible con el uso previsto.
- Dirección web proporcionada por Vercel mediante el subdominio `.vercel.app`.

La aplicación almacenará únicamente las URLs de YouTube, sin utilizar Supabase Storage para los videos.

La arquitectura y las responsabilidades específicas de cada tecnología se definirán en `docs/architecture.md`.

### 10.12. Requisitos de seguridad adicionales

La aplicación deberá:

- Utilizar conexiones HTTPS en producción.
- Proteger las credenciales y claves privadas.
- No exponer claves administrativas en el navegador.
- Verificar los permisos en cada operación protegida.
- Evitar accesos directos no autorizados a datos de otros alumnos.
- Controlar la vigencia de los enlaces de invitación y recuperación de contraseña.
- Registrar errores relevantes para facilitar su diagnóstico.
- Mantener separadas las configuraciones de desarrollo y producción.


## 11. Reglas complementarias y casos especiales

Esta sección reúne las reglas adicionales confirmadas durante la revisión de consistencia de la especificación.

Su objetivo es definir el comportamiento del sistema ante situaciones excepcionales y complementar las reglas de negocio establecidas en las secciones anteriores.

### 11.1. Entrenamientos en curso al cambiar de semana

Los entrenamientos iniciados durante una semana podrán continuar y finalizarse aunque el sistema haya avanzado automáticamente a la semana siguiente.

No se permitirá iniciar nuevos entrenamientos correspondientes a semanas anteriores.

Los entrenamientos que continúen abiertos conservarán su asociación con la semana y el día en los que fueron iniciados.

### 11.2. Entrenamientos en curso al finalizar una rutina

Cuando una rutina llegue a su fecha de finalización, los entrenamientos que ya se encuentren en curso podrán continuar hasta que el alumno los finalice.

Los entrenamientos conservarán su asociación con la rutina original, incluso cuando esta ya se encuentre finalizada.

La finalización de una rutina no permitirá iniciar nuevos entrenamientos correspondientes a ella.

### 11.3. Reemplazo de una rutina activa

Cuando la profesora necesite reemplazar una rutina activa, el sistema deberá solicitar confirmación antes de realizar la operación.

La rutina anterior pasará al estado FINALIZADA y la nueva rutina podrá activarse.

Si existen entrenamientos en curso asociados a la rutina anterior, el sistema deberá informar esta situación a la profesora antes de confirmar el reemplazo.

Los entrenamientos ya iniciados podrán continuar y finalizarse normalmente.

El reemplazo no eliminará los registros históricos de la rutina anterior.

### 11.4. Modificación de rutinas con entrenamientos en curso

Cuando la profesora modifique una rutina que tenga entrenamientos en curso, las modificaciones se aplicarán a los entrenamientos que se inicien posteriormente.

Los entrenamientos ya iniciados conservarán la planificación original con la que comenzaron.

Esto incluye:

- Ejercicios.
- Bloques.
- Series.
- Repeticiones.
- Pesos recomendados.

Las modificaciones no deberán alterar los datos ya registrados por el alumno durante una sesión en curso.

### 11.5. Duración y carga de videos

La aplicación permitirá reproducir los videos explicativos asociados a los ejercicios.

La implementación dependerá del proveedor seleccionado:

- Si se utiliza YouTube, los videos se reproducirán mediante un mecanismo compatible con su plataforma.
- Si se utiliza Supabase Storage, los archivos se almacenarán y entregarán mediante mecanismos de acceso autorizado.

La aplicación deberá funcionar en navegadores modernos de dispositivos Android, iPhone y computadoras.

Los errores de reproducción deberán comunicarse mediante mensajes comprensibles.

La decisión sobre el proveedor y las condiciones específicas de privacidad continúa pendiente de confirmación por parte de Paulina.

### 11.6. Publicación y programación de rutinas

La profesora podrá guardar rutinas en estado BORRADOR antes de publicarlas.

Cuando un alumno ya tenga una rutina activa, la profesora podrá preparar una próxima rutina y dejarla en estado PROGRAMADA.

También podrá reemplazar inmediatamente la rutina activa, previa confirmación.

Cada alumno podrá tener como máximo:

- Una rutina ACTIVA.
- Una rutina PROGRAMADA.
- Múltiples rutinas en BORRADOR.

Los alumnos únicamente podrán realizar entrenamientos correspondientes a su rutina activa, con la excepción de las sesiones que ya hubieran iniciado antes de su finalización o reemplazo.

### 11.7. Conservación de información histórica

La finalización, modificación o reemplazo de una rutina no deberá eliminar los entrenamientos finalizados ni sus registros de pesos.

Los entrenamientos conservarán la planificación utilizada al momento de su inicio.

Las correcciones realizadas por la profesora sobre pesos históricos deberán registrarse mediante la auditoría definida en la sección 8.

### 11.8. Dominio y despliegue

Durante el MVP no se contratará un dominio personalizado.

La aplicación utilizará el subdominio proporcionado por Vercel, sujeto a disponibilidad.

El alojamiento deberá utilizar un plan que permita el uso comercial previsto para la aplicación.

La base de datos, la autenticación y el almacenamiento de videos se gestionarán mediante Supabase.

La incorporación de un dominio personalizado podrá evaluarse posteriormente.

### 11.9. Fechas de inicio y activación automática de rutinas

**Primera rutina de un alumno**

Cuando la profesora cree la primera rutina de un alumno, podrá seleccionar su fecha de inicio.

- Si la fecha seleccionada es el día actual, la rutina se activará al publicarla.
- Si la fecha seleccionada es futura, la rutina quedará en estado PROGRAMADA hasta su fecha de inicio.
- La fecha de inicio no podrá ser anterior a la fecha actual al momento de publicar.

**Programación de la próxima rutina**

Cuando un alumno tenga una rutina activa y la profesora prepare una nueva para continuar su planificación:

- El sistema calculará automáticamente la fecha de inicio de la próxima rutina.
- La nueva rutina comenzará el día siguiente al último día de la rutina actual.
- La profesora no necesitará calcular ni ingresar manualmente esa fecha.
- La próxima rutina permanecerá en estado PROGRAMADA hasta su activación.
- El sistema activará automáticamente la nueva rutina cuando corresponda.

**Finalización de una rutina**

La duración de una rutina se calculará en semanas consecutivas de siete días, a partir de su fecha de inicio.

Cuando finalice el último día de la rutina:

- La rutina pasará al estado FINALIZADA.
- Si existe una próxima rutina PROGRAMADA, se activará automáticamente en la fecha correspondiente.
- Si no existe una próxima rutina, el alumno quedará temporalmente sin rutina activa.
- Los entrenamientos finalizados y el historial de la rutina anterior permanecerán disponibles.

**Alumno sin rutina activa**

Cuando un alumno no tenga una rutina activa, la aplicación mostrará un mensaje informativo:

"Por el momento no tenés una rutina disponible. Tu profesora te asignará una nueva planificación próximamente."

El alumno podrá seguir consultando su historial, pero no podrá iniciar nuevos entrenamientos hasta que tenga una rutina activa. Si conserva entrenamientos iniciados anteriormente, podrá reanudarlos y finalizarlos según las reglas establecidas en los apartados 11.1 y 11.2.

**Reglas de consistencia**

- Un alumno nunca podrá tener dos rutinas activas simultáneamente.
- Un alumno podrá tener como máximo una rutina programada.
- La transición automática entre rutinas deberá preservar la información histórica.
- Los entrenamientos que ya estuvieran en curso podrán finalizarse según las reglas de los apartados 11.1 y 11.2.
- Las fechas y los cambios de estado deberán calcularse de manera consistente según la zona horaria configurada para la aplicación.

### 11.10. Reprogramación automática ante el reemplazo de una rutina activa

Cuando la profesora reemplace inmediatamente una rutina activa y el alumno ya tenga una próxima rutina en estado PROGRAMADA, el sistema deberá conservar esa rutina programada.

Se aplicarán las siguientes reglas:

- La rutina activa anterior pasará al estado FINALIZADA.
- La nueva rutina se activará inmediatamente.
- La rutina que ya estaba PROGRAMADA conservará su planificación y su estado.
- El sistema recalculará automáticamente su fecha de inicio para que comience el día siguiente al último día de la nueva rutina activa.
- La profesora no necesitará modificar manualmente la fecha de la rutina programada.
- Antes de confirmar el reemplazo, el sistema informará que la fecha de inicio de la próxima rutina será ajustada automáticamente.
- La operación deberá garantizar que el alumno tenga como máximo una rutina ACTIVA y una PROGRAMADA.
- Los entrenamientos históricos y los entrenamientos que ya estuvieran en curso conservarán su asociación con la rutina original.

El recálculo de fechas no modificará los ejercicios, bloques, series, repeticiones ni pesos recomendados de la rutina programada.

### 11.11. Conversión automática y compatibilidad de videos

Los límites y requisitos técnicos de los videos dependerán de la alternativa seleccionada.

Si se utiliza YouTube, se respetarán las condiciones de publicación y reproducción de esa plataforma.

Si se utiliza Supabase Storage, deberán definirse y verificarse:

- Tamaño máximo permitido por archivo.
- Formatos compatibles.
- Capacidad de almacenamiento disponible.
- Límites de transferencia y reproducción.
- Necesidad y viabilidad de optimización o conversión de archivos.

No se establecerá como requisito obligatorio una conversión automática de videos hasta comprobar que pueda implementarse de manera confiable y sin contratar servicios externos pagos.

La aplicación deberá informar claramente cuando un video no cumpla los requisitos establecidos para el proveedor seleccionado.

Estas decisiones deberán documentarse antes de implementar la carga y reproducción de videos.