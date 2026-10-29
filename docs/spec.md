**Especificación del proyecto — Educando tu cuerpo**


### 1. Descripción del proyecto
Nombre: Educando tu cuerpo — Paulina Onocko.

Objetivo: Desarrollar una aplicación web que permita a una profesora de educación física crear, asignar y administrar rutinas de entrenamiento personalizadas para los alumnos de su gimnasio.

El sistema tendrá dos tipos de usuarios:
- Profesora (administradora): podrá gestionar alumnos, crear y modificar rutinas personalizadas, administrar una biblioteca de ejercicios, configurar series y repeticiones por semana, asignar pesos y consultar el progreso de sus alumnos.
- Alumno: podrá acceder únicamente a sus propias rutinas, consultar ejercicios y videos explicativos, registrar los pesos utilizados, finalizar entrenamientos y revisar su historial.

## 1.1. Funcionamiento general
1. La profesora registra un alumno en el sistema y elige si compartir su invitación por correo electrónico o WhatsApp.
2. Crea una rutina personalizada, definiendo su fecha de inicio, cantidad de semanas de planificación y cantidad de estímulos requeridos por semana.
3. Selecciona ejercicios de la biblioteca o crea nuevos ejercicios cuando sea necesario.
4. Organiza los ejercicios en días de entrenamiento y bloques, configurando sus series y repeticiones.
5. Puede modificar la planificación de cada semana sin tener que volver a cargar todos los ejercicios.
6. Publica la rutina para que el alumno pueda consultarla.
7. El alumno accede a la semana de planificación correspondiente según los estímulos completados y puede seleccionar libremente cualquiera de los días de entrenamiento disponibles.
8. Realiza sus entrenamientos y registra los pesos utilizados en cada serie, sin modificar la planificación.
9. Finaliza cada entrenamiento mediante el botón "Finalizar entrenamiento".
10. El sistema guarda los datos del entrenamiento y permite consultar su historial.
11. La profesora puede asignar pesos sugeridos, registrar o corregir pesos y supervisar el progreso del alumno.
12. Cuando el alumno completa todos los estímulos de la rutina, esta finaliza automáticamente y se conserva en su historial. Si existe una rutina PROGRAMADA, se activa automáticamente.

## 1.2. Características principales
- Cada alumno podrá tener como máximo una rutina ACTIVA y una rutina PROGRAMADA al mismo tiempo.
- También podrá tener múltiples rutinas en estado BORRADOR.
- Un alumno podrá permanecer temporalmente sin ninguna rutina ACTIVA, por ejemplo, cuando todavía no tenga una rutina asignada o cuando su última rutina haya finalizado y no exista otra vigente.
- Las rutinas serán creadas individualmente por la profesora. No existirán rutinas completas precargadas.
- La duración de cada rutina será configurable entre 1 y 6 semanas.
- La profesora podrá configurar entre 1 y 7 días de entrenamiento por semana de planificación. Esta cantidad determinará los estímulos necesarios para avanzar a la siguiente semana, aunque el alumno podrá elegir libremente qué día realizar en cada entrenamiento.
- Las rutinas estarán organizadas por semanas, días de entrenamiento, bloques y ejercicios.
- Las series y repeticiones podrán variar entre semanas sin necesidad de volver a cargar los ejercicios.
- La profesora podrá modificar rutinas publicadas sin alterar el historial de entrenamientos finalizados.
- La profesora podrá asignar pesos sugeridos y el alumno registrar los pesos realmente utilizados.
- Los alumnos no podrán modificar ejercicios, series ni repeticiones.
- Cada ejercicio podrá incluir un video explicativo.
- Los alumnos podrán repetir un mismo día de entrenamiento en fechas diferentes. Cada entrenamiento finalizado contará como un estímulo independiente.
- Las semanas de planificación avanzarán automáticamente cuando el alumno complete la cantidad de estímulos requerida, independientemente del tiempo calendario transcurrido.
- Se conservará el historial de rutinas, entrenamientos realizados y pesos registrados.
- La aplicación tendrá una interfaz sencilla, minimalista y adaptable a celulares.
- Se utilizará el color bordó del logo de Paulina como identidad visual principal.

## 1.3. Gestión de ejercicios
El sistema contará con una biblioteca de ejercicios dinámica, administrada por la profesora.

Al crear una rutina, la profesora podrá:
- Seleccionar ejercicios previamente registrados mediante una lista desplegable con buscador.
- Crear nuevos ejercicios cuando no se encuentren en la biblioteca.
- Agregar opcionalmente un video explicativo y una descripción o indicaciones.
- Reutilizar ejercicios en distintas rutinas sin tener que cargarlos nuevamente.
Los ejercicios creados se incorporarán automáticamente a la biblioteca para utilizarlos en futuras rutinas.

Cada ejercicio tendrá los siguientes datos:
- Nombre: obligatorio.
- Video explicativo: opcional.
- Descripción o indicaciones: opcional.
Las series, repeticiones y pesos no formarán parte de la definición del ejercicio, ya que se configurarán individualmente en cada rutina.

La profesora podrá editar los datos de los ejercicios y desactivar aquellos que ya no utilice, conservando la información de las rutinas históricas.

La biblioteca podrá comenzar vacía y crecerá progresivamente a medida que la profesora agregue ejercicios.

## 1.4. Organización de las rutinas
Las rutinas se organizarán por semanas y días de entrenamiento.

Cada rutina tendrá:
- Un alumno asignado.
- Una fecha de inicio.
- Una duración configurable por la profesora, con un mínimo de 1 y un máximo de 6 semanas.
- Una cantidad de días de entrenamiento por semana de planificación, configurable por la profesora entre 1 y 7. Esta cantidad determinará los estímulos necesarios para avanzar de semana.
- Bloques y ejercicios dentro de cada día.
- Series y repeticiones configurables por semana.
La cantidad de semanas de planificación y de estímulos requeridos por semana se establecerá individualmente para cada rutina. La duración real dependerá del ritmo con el que el alumno complete sus entrenamientos.

Por ejemplo, un alumno podrá tener una rutina de 4 semanas y 2 días por semana, mientras que otro tendrá una de 6 semanas y 4 días por semana.

Los días se identificarán como Día 1, Día 2, Día 3, etc., según la cantidad configurada.

Estos días representarán entrenamientos diferentes y no estarán necesariamente asociados a días específicos del calendario.

La profesora podrá copiar la planificación entre semanas y modificar ejercicios, series y repeticiones sin volver a cargar toda la rutina.

Las rutinas no tendrán nombres personalizados. Se identificarán mediante el alumno, su fecha de inicio y la planificación correspondiente, sin establecer una fecha de finalización fija.

## 1.4.1. Avance de semanas por estímulos
Las semanas de una rutina representarán etapas de planificación del entrenamiento y no períodos fijos de siete días calendario.

Cada rutina tendrá una cantidad de estímulos por semana, determinada por la cantidad de días de entrenamiento configurada por la profesora.

Se considerará estímulo completado a cada entrenamiento que haya sido finalizado correctamente, mediante la acción "Finalizar entrenamiento".

Se aplicarán las siguientes reglas:
- Cada entrenamiento finalizado contará como un estímulo completado.
- Los entrenamientos en estado EN_CURSO no contarán como estímulos completados.
- El alumno podrá seleccionar libremente cualquiera de los días de entrenamiento disponibles en su semana actual.
- El alumno podrá repetir un mismo día de entrenamiento en fechas diferentes.
- Las repeticiones de un mismo día también contarán como estímulos independientes.
- El alumno podrá iniciar como máximo un entrenamiento por día calendario, considerando la zona horaria de Argentina.
- La semana de planificación avanzará automáticamente cuando el alumno complete la cantidad de estímulos requerida.
- El avance no dependerá de la cantidad de días calendario transcurridos.
- Los estímulos no completados impedirán avanzar a la siguiente semana de planificación.
Por ejemplo, una rutina de 6 semanas con 2 estímulos por semana tendrá un total de 12 estímulos planificados.

Si el alumno completa únicamente un estímulo durante una semana calendario, continuará en la misma semana de planificación hasta completar el segundo estímulo.

Si realiza dos veces el Día 1 en fechas diferentes, ambas realizaciones contarán como estímulos independientes y permitirán completar esa semana de planificación.

Al completar los estímulos de la última semana, la rutina finalizará automáticamente, según las reglas de finalización y activación de rutinas programadas.

## 1.4.2. Modificación de rutinas publicadas
La profesora podrá editar una rutina incluso cuando ya esté publicada y siendo utilizada por un alumno.

Podrá modificar ejercicios, series, repeticiones y pesos sugeridos.

Los cambios se aplicarán a la planificación pendiente o futura, sin modificar los datos históricos de entrenamientos ya finalizados.

## 1.5. Realización de entrenamientos y registro de pesos
La aplicación mostrará al alumno el próximo entrenamiento sugerido de su rutina activa.

El alumno podrá seleccionar cualquiera de los días de entrenamiento disponibles en la semana correspondiente.

Un mismo día de entrenamiento podrá repetirse en fechas diferentes. Cada alumno podrá iniciar como máximo un entrenamiento por día calendario, considerando la zona horaria America/Argentina/Buenos_Aires. Cada entrenamiento finalizado contará como un estímulo independiente, incluso cuando se repita el mismo día de entrenamiento.

Cada realización se registrará de forma independiente, conservando los datos correspondientes.

## 1.5.1. Registro de pesos
Los alumnos podrán registrar los pesos realmente utilizados en cada serie de los ejercicios.

La profesora podrá asignar pesos sugeridos y registrar o corregir los pesos utilizados.

Los pesos sugeridos por la profesora y los pesos realmente utilizados se almacenarán de manera independiente.

El alumno no podrá modificar los ejercicios, las series ni las repeticiones establecidas por la profesora.

## 1.5.2. Finalización de entrenamientos
El alumno finalizará cada entrenamiento mediante el botón "Finalizar entrenamiento".

Al finalizar, el sistema:
- Guardará la fecha de realización.
- Guardará los ejercicios y los pesos registrados.
- Marcará esa realización como completada.
- Conservará la información para el historial y el seguimiento del progreso.
- Mostrará el próximo entrenamiento sugerido, según la planificación y los entrenamientos completados.
Cada entrenamiento finalizado sumará un estímulo a la semana de planificación correspondiente. Cuando el alumno complete la cantidad de estímulos requerida, el sistema avanzará automáticamente a la siguiente semana de planificación. Si se completa el último estímulo de la última semana, la rutina finalizará y, si existe una rutina PROGRAMADA, esta se activará automáticamente.

El alumno podrá volver a seleccionar el mismo día de entrenamiento en otra fecha, siempre que pertenezca a la semana de planificación habilitada.

## 1.5.3. Historial y seguimiento
El sistema conservará el historial de entrenamientos realizados, incluyendo las repeticiones de un mismo día de entrenamiento.

La profesora podrá consultar el progreso de cada alumno a partir de los pesos registrados a lo largo de las semanas.

El alumno podrá consultar sus propios entrenamientos y rutinas anteriores.

Los registros históricos no se sobrescribirán cuando se repita un entrenamiento o se modifique una rutina publicada.

## 1.6. Interfaz de usuario
La aplicación tendrá dos interfaces diferenciadas:
- Panel de la profesora: gestión de alumnos, biblioteca de ejercicios, creación y edición de rutinas, asignación de pesos y seguimiento del progreso.
- Panel del alumno: consulta de la rutina activa, visualización de ejercicios y videos, registro de pesos, finalización de entrenamientos e historial.
El diseño será minimalista, con pocas opciones por pantalla, navegación sencilla y prioridad de uso desde dispositivos móviles.

Se utilizarán el color bordó de la identidad visual de Paulina, fondos claros y componentes simples.


### 2. Objetivos y alcance del MVP

## 2.1. Objetivo general
Desarrollar una primera versión funcional de la aplicación web Educando tu cuerpo, que permita a la profesora administrar alumnos y rutinas de entrenamiento personalizadas, mientras que cada alumno pueda consultar su planificación, registrar los pesos utilizados y visualizar su progreso.

El MVP deberá permitir completar el proceso principal del sistema: desde el registro de un alumno y la creación de su rutina hasta la realización de entrenamientos y la consulta del historial.

## 2.2. Objetivos específicos
- Permitir el acceso seguro al sistema mediante usuarios con roles diferenciados.
- Facilitar a la profesora la gestión de sus alumnos, con invitaciones por correo electrónico o WhatsApp y edición de datos personales por los propios alumnos.
- Permitir crear, editar y reutilizar ejercicios mediante una biblioteca dinámica.
- Permitir crear y modificar rutinas personalizadas para cada alumno.
- Configurar individualmente entre 1 y 6 semanas de planificación y entre 1 y 7 estímulos requeridos por semana, sin establecer una duración fija en días calendario.
- Organizar las rutinas por semanas, días, bloques y ejercicios.
- Facilitar la planificación semanal mediante la copia de ejercicios y la modificación de series y repeticiones.
- Permitir asignar pesos sugeridos y registrar los pesos realmente utilizados.
- Permitir que los alumnos finalicen entrenamientos y repitan un mismo día de entrenamiento en fechas diferentes, contabilizando cada sesión finalizada como un estímulo independiente.
- Avanzar automáticamente entre semanas de planificación según los estímulos completados y permitir que la profesora configure avisos anticipados cuando una rutina esté próxima a finalizar.
- Conservar el historial de entrenamientos y rutinas.
- Ofrecer una interfaz sencilla y adaptable a dispositivos móviles.

## 2.3. Funcionalidades incluidas en el MVP

## 2.3.1. Autenticación y usuarios
- Inicio y cierre de sesión mediante correo electrónico y contraseña.
- Activación inicial de cuenta mediante invitación enviada por correo o compartida manualmente por WhatsApp.
- Edición de datos personales propios por parte de cada alumno.
- Dos roles: profesora (administradora) y alumno.
- Acceso a interfaces diferentes según el rol.
- Protección de la información para que cada alumno acceda únicamente a sus propios datos.

## 2.3.2. Gestión de alumnos
- Registrar nuevos alumnos y elegir el envío de la invitación por correo electrónico o WhatsApp manual.
- Consultar el listado de alumnos.
- Visualizar la información individual de cada alumno.
- Editar sus datos.
- Consultar su rutina activa y su historial.
- Desactivar y reactivar alumnos sin eliminar sus datos históricos. Los alumnos desactivados no podrán acceder al sistema hasta que la profesora los reactive.

## 2.3.3. Biblioteca de ejercicios
- Crear ejercicios con nombre y, opcionalmente, descripción y video explicativo.
- Buscar y seleccionar ejercicios existentes.
- Editar los datos de un ejercicio.
- Desactivar ejercicios sin perder la información histórica.
- Reutilizar ejercicios en diferentes rutinas.

## 2.3.4. Gestión de rutinas
- Crear rutinas personalizadas para cada alumno.
- Definir la fecha de inicio, la cantidad de semanas de planificación y los estímulos requeridos por semana.
- Organizar entrenamientos mediante días, bloques y ejercicios.
- Configurar series y repeticiones.
- Copiar la planificación de una semana a otra.
- Modificar ejercicios, series y repeticiones de semanas específicas.
- Guardar rutinas en estado BORRADOR antes de publicarlas.
- Publicar rutinas para que los alumnos puedan acceder a ellas.
- Preparar rutinas en estado PROGRAMADA para su activación automática al finalizar la rutina activa.
- Editar rutinas publicadas, conservando los registros históricos.
- Mantener como máximo una rutina ACTIVA y una PROGRAMADA por alumno.
- Permitir que la profesora configure la cantidad de estímulos restantes con la que desea recibir un aviso de próxima finalización de cada rutina, con un valor predeterminado de 3 estímulos.

## 2.3.5. Consulta y realización de entrenamientos
- Mostrar al alumno la semana de planificación correspondiente según los estímulos completados.
- Mostrar el próximo entrenamiento sugerido, sin que sea obligatorio seguir ese orden.
- Permitir seleccionar libremente cualquiera de los días de entrenamiento disponibles en la semana actual.
- Visualizar los ejercicios, series, repeticiones y videos explicativos.
- Registrar los pesos utilizados en cada serie.
- Permitir iniciar como máximo un entrenamiento por alumno y por día calendario, considerando la zona horaria America/Argentina/Buenos_Aires.
- Finalizar un entrenamiento mediante el botón "Finalizar entrenamiento".
- Contabilizar cada entrenamiento finalizado como un estímulo completado.
- Permitir repetir un mismo día de entrenamiento en fechas diferentes, contando cada realización finalizada como un estímulo independiente.
- Guardar cada realización como un registro independiente, sin sobrescribir entrenamientos anteriores.
- Mostrar la cantidad de estímulos completados y pendientes de la semana actual y de la rutina.
- Avanzar automáticamente a la siguiente semana de planificación cuando se complete la cantidad de estímulos requerida.
- Finalizar automáticamente la rutina al completar todos sus estímulos y activar la próxima rutina PROGRAMADA, si existe.

## 2.3.6. Registro de pesos y seguimiento
- Permitir que la profesora asigne pesos sugeridos.
- Permitir que el alumno registre los pesos realmente utilizados.
- Permitir que la profesora registre o corrija pesos.
- Conservar los registros de pesos de cada entrenamiento.
- Consultar la evolución de los pesos utilizados en diferentes semanas.
El progreso se visualizará mediante listas o tablas simples que permitan consultar los pesos utilizados por ejercicio, fecha y entrenamiento. Los gráficos de evolución quedarán fuera del MVP.

## 2.3.7. Historial
- Consultar entrenamientos finalizados.
- Consultar rutinas anteriores.
- Conservar los datos históricos aunque una rutina sea modificada posteriormente.
- Permitir que la profesora consulte el historial de sus alumnos.
- Permitir que cada alumno consulte únicamente su propio historial.

## 2.4. Funcionalidades fuera del alcance del MVP
Las siguientes funcionalidades no se incluirán en la primera versión:
- Pagos de cuotas y facturación.
- Reserva de turnos o clases.
- Control de asistencia al gimnasio.
- Planes de alimentación y seguimiento nutricional.
- Mensajería interna entre profesora y alumnos.
- Notificaciones automáticas por correo electrónico o WhatsApp, excepto el envío inicial de invitaciones por correo elegido expresamente por la profesora. El envío por WhatsApp será manual.
- Generación automática de rutinas mediante inteligencia artificial.
- Rutinas completas precargadas.
- Integraciones con relojes inteligentes o dispositivos de actividad física.
- Aplicación móvil nativa para Android o iOS.
- Gráficos estadísticos de evolución y paneles de análisis avanzado del rendimiento.
Estas funcionalidades podrán evaluarse para futuras versiones según las necesidades del gimnasio.

## 2.5. Alcance técnico del MVP
La primera versión se desarrollará como una aplicación web adaptable a computadoras, tablets y teléfonos celulares.

Contará con:
- Un frontend para las interfaces de la profesora y los alumnos.
- Un backend para gestionar las reglas de negocio y el acceso a los datos.
- Una base de datos relacional para almacenar usuarios, alumnos, ejercicios, rutinas y entrenamientos.
- Un sistema de autenticación y autorización.
- Persistencia del historial de entrenamientos y pesos.
- Despliegue en un servicio de hosting web.
- Posibilidad de utilizar un dominio propio.
La arquitectura y las tecnologías concretas se documentarán en docs/architecture.md.

## 2.6. Criterios de éxito del MVP
El MVP se considerará funcional cuando sea posible completar correctamente el siguiente flujo:
1. La profesora inicia sesión.
2. Registra un alumno.
3. Crea ejercicios nuevos o selecciona ejercicios existentes.
4. Crea una rutina personalizada, definiendo semanas de planificación, estímulos requeridos por semana, días de entrenamiento, bloques, ejercicios, series y repeticiones.
5. Configura la cantidad de estímulos restantes con la que desea recibir un aviso de próxima finalización.
6. Publica la rutina.
7. El alumno inicia sesión y visualiza únicamente su rutina activa.
8. El alumno selecciona libremente un día de entrenamiento, registra los pesos utilizados y finaliza la sesión.
9. El sistema contabiliza el entrenamiento finalizado como un estímulo completado y conserva su información histórica.
10. El alumno puede repetir un mismo día de entrenamiento en otra fecha, generando un nuevo registro y un nuevo estímulo.
11. Al completar los estímulos requeridos de una semana de planificación, el sistema habilita automáticamente la siguiente.
12. Cuando los estímulos restantes alcanzan el umbral configurado, el sistema muestra un aviso en el panel de la profesora.
13. La profesora puede preparar una próxima rutina y dejarla en estado PROGRAMADA.
14. Al completar todos los estímulos de la rutina activa, el sistema la marca como FINALIZADA y activa automáticamente la rutina PROGRAMADA, si existe.
15. La profesora y el alumno pueden consultar los entrenamientos realizados, los pesos registrados y el historial correspondiente.
Además, deberán verificarse las restricciones de acceso, el límite de un entrenamiento iniciado por alumno y por día calendario, el avance por estímulos, la activación automática de rutinas programadas y la conservación de los registros históricos al editar una rutina publicada.


### 3. Roles y permisos
El sistema contará con dos roles: Profesora (administradora) y Alumno.

Cada usuario deberá iniciar sesión para acceder a las funcionalidades correspondientes a su rol.

El sistema verificará los permisos tanto en la interfaz como en el backend, evitando que un usuario acceda o modifique información para la que no está autorizado.

## 3.1. Profesora (administradora)
La profesora tendrá acceso a las funcionalidades de administración y gestión del gimnasio.

**Gestión de alumnos**
- Registrar nuevos alumnos y elegir el envío de la invitación por correo electrónico o WhatsApp manual.
- Consultar el listado de alumnos.
- Visualizar y editar sus datos.
- Desactivar y reactivar alumnos.
- Consultar la rutina activa y el historial de cada alumno.
- Crear las cuentas de acceso de los alumnos y elegir el canal de invitación (correo electrónico o WhatsApp manual).
- Gestionar la activación y desactivación de sus cuentas.

**Gestión de ejercicios**
- Crear ejercicios y agregarlos a la biblioteca.
- Consultar y buscar ejercicios existentes.
- Editar nombres, descripciones y videos explicativos.
- Desactivar ejercicios que ya no utilice.
- Reutilizar ejercicios en diferentes rutinas.

**Gestión de rutinas**
- Crear rutinas personalizadas para cada alumno.
- Configurar la fecha de inicio, la cantidad de semanas de planificación y los estímulos requeridos por semana.
- Organizar semanas, días, bloques y ejercicios.
- Definir y modificar series y repeticiones.
- Copiar la planificación de una semana a otra.
- Guardar rutinas en estado borrador.
- Publicar rutinas para los alumnos.
- Editar rutinas publicadas, conservando los registros históricos.
- Consultar las rutinas anteriores de cada alumno.
- Configurar para cada rutina la cantidad de estímulos restantes con la que desea recibir un aviso de próxima finalización, con un valor predeterminado de 3 estímulos.
- Preparar una próxima rutina en estado PROGRAMADA para que se active automáticamente cuando el alumno complete todos los estímulos de su rutina activa.
- Consultar el progreso de cada alumno según los estímulos completados y pendientes de su rutina.

**Registro de pesos y seguimiento**
- Asignar y modificar pesos sugeridos.
- Registrar y corregir los pesos utilizados por los alumnos.
- Consultar entrenamientos finalizados.
- Consultar el historial de pesos por ejercicio, fecha y entrenamiento.
- Supervisar el progreso mediante listas o tablas simples.
- Finalizar entrenamientos en nombre de un alumno, conservando el registro correspondiente.

## 3.2. Alumno
El alumno tendrá acceso únicamente a su información personal de entrenamiento.

**Consulta de rutinas**
- Visualizar su rutina activa.
- Consultar la semana de planificación correspondiente según los estímulos completados, visualizando cuántos estímulos lleva realizados y cuántos le faltan para avanzar.
- Visualizar los días de entrenamiento disponibles.
- Consultar ejercicios, bloques, series y repeticiones.
- Acceder a los videos explicativos.
- Consultar los pesos sugeridos por la profesora.

**Realización de entrenamientos**
- Seleccionar un día de entrenamiento disponible de la semana actual.
- Registrar los pesos realmente utilizados en cada serie.
- Finalizar un entrenamiento mediante el botón "Finalizar entrenamiento".
- Repetir un mismo día de entrenamiento en fechas diferentes, contabilizando cada sesión finalizada como un estímulo independiente y respetando el límite de un entrenamiento iniciado por día calendario.
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

**Gestión de cuenta y datos personales**
- Iniciar y cerrar sesión con correo electrónico y contraseña.
- Consultar y editar su propio nombre, apellido, correo electrónico y teléfono opcional.
- Confirmar un cambio de correo electrónico mediante el procedimiento seguro de Supabase Auth antes de usar la nueva dirección para iniciar sesión.
- Cambiar su contraseña.
- Recuperar el acceso a su cuenta mediante un procedimiento seguro.
- No podrá crear cuentas de otros alumnos, modificar su propio rol ni activar o desactivar su cuenta.

## 3.3. Reglas generales de acceso
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
- Los alumnos podrán editar sus propios datos personales, pero no su rol ni el estado de su cuenta.
- El cambio de correo electrónico requerirá verificación segura y sincronización entre autenticación y perfil.
- La profesora podrá finalizar entrenamientos en nombre de un alumno.
- Los pesos de entrenamientos finalizados solo podrán ser corregidos por la profesora.

## 3.4. Matriz de permisos
Funcionalidad	Profesora	Alumno
Gestionar alumnos	Sí	No
Crear y editar ejercicios	Sí	No
Crear y editar rutinas	Sí	No
Publicar rutinas	Sí	No
Consultar rutina activa	Todas	Solo propia
Consultar videos	Sí	Sí
Modificar series y repeticiones	Sí	No
Asignar pesos sugeridos	Sí	No
Registrar pesos utilizados	Sí	Solo propios
Corregir pesos registrados	Sí	No
Consultar historial	Todos los alumnos	Solo propio
Desactivar alumnos	Sí	No
Crear cuentas de alumnos	Sí	No
Editar datos personales del alumno	Sí	Solo propios
Modificar rol o estado de la cuenta	Sí	No
Compartir invitaciones por correo o WhatsApp	Sí	No
Cambiar contraseña propia	Sí	Sí
Recuperar contraseña propia	Sí	Sí
Finalizar entrenamientos	Sí, de cualquier alumno	Sí, solo propios
Corregir pesos de entrenamientos finalizados	Sí	No


### 4. Gestión de alumnos
El sistema permitirá a la profesora registrar, consultar, modificar, desactivar y reactivar alumnos. Cada alumno también podrá modificar sus propios datos personales.

Cada alumno tendrá una cuenta individual para acceder a sus rutinas, entrenamientos e historial.

La creación y administración de cuentas de alumnos será exclusiva de la profesora; la edición de datos personales propios estará habilitada para cada alumno.

## 4.1. Registro de alumnos
La profesora podrá registrar nuevos alumnos desde su panel de administración.

Cada alumno tendrá los siguientes datos:
- Nombre: obligatorio.
- Apellido: obligatorio.
- Correo electrónico: obligatorio y único por cuenta.
- Teléfono: opcional, para contacto e invitaciones por WhatsApp; no se utilizará para iniciar sesión.
- Contraseña: gestionada mediante el sistema de autenticación.
- Estado: activo o inactivo.
El sistema asignará automáticamente el rol Alumno a cada cuenta creada por la profesora.

No existirá un formulario público de registro de alumnos.

## 4.2. Creación y acceso a cuentas
La profesora será la única persona autorizada para crear cuentas de alumnos.

Al registrar un alumno, el sistema creará su cuenta y permitirá a la profesora elegir cómo compartir la invitación:
- Correo electrónico: el sistema enviará la invitación al correo registrado.
- WhatsApp: el sistema generará de forma segura un enlace de activación y abrirá WhatsApp con un mensaje preparado para que la profesora lo envíe manualmente. Si no hay teléfono registrado, podrá copiar el enlace y compartirlo manualmente. No se integrará la API de WhatsApp Business en el MVP.
En ambos casos, el alumno utilizará el enlace para establecer su contraseña inicial. Luego iniciará sesión exclusivamente con su correo electrónico y contraseña.

Los enlaces se generarán en el servidor con mecanismos seguros de Supabase Auth, tendrán vigencia limitada y no podrán reutilizarse una vez completada la activación. No se expondrán credenciales administrativas ni tokens sensibles en registros o respuestas innecesarias.

El alumno podrá:
- Iniciar y cerrar sesión.
- Establecer su contraseña mediante la invitación inicial.
- Cambiar su contraseña.
- Recuperar el acceso a su cuenta mediante un procedimiento seguro.
Las contraseñas serán gestionadas por el servicio de autenticación y no serán visibles para la profesora.

No existirá un formulario público de registro de alumnos.

## 4.3. Listado y búsqueda de alumnos
La profesora podrá consultar un listado de los alumnos registrados.

El listado permitirá:
- Visualizar nombre y apellido.
- Identificar si el alumno está activo o inactivo.
- Buscar alumnos por nombre o apellido.
- Acceder a la ficha individual de cada alumno.

## 4.4. Ficha individual del alumno
Cada alumno tendrá una ficha desde la cual la profesora podrá:
- Consultar sus datos personales registrados, incluido el teléfono opcional.
- Modificar nombre, apellido, correo electrónico y teléfono opcional.
- Consultar su estado.
- Consultar su rutina activa, si tiene una asignada.
- Crear una nueva rutina.
- Consultar sus rutinas anteriores.
- Consultar los entrenamientos realizados.
- Revisar los pesos registrados.
Cada alumno podrá tener como máximo una rutina activa.

Los alumnos que todavía no tengan una rutina publicada podrán existir en el sistema sin una rutina activa.

## 4.5. Modificación de datos
La profesora podrá modificar los datos personales de cualquier alumno. Cada alumno también podrá modificar únicamente sus propios datos personales.

Los datos editables serán:
- Nombre (obligatorio).
- Apellido (obligatorio).
- Correo electrónico (obligatorio y único).
- Teléfono (opcional).
El cambio de correo electrónico se realizará mediante un flujo seguro de Supabase Auth que verifique la nueva dirección antes de utilizarla para iniciar sesión. El sistema deberá mantener sincronizado el correo de autenticación con el perfil del alumno.

Ni el alumno ni otros alumnos podrán cambiar su rol o estado de activación; esas acciones corresponderán exclusivamente a la profesora.

La modificación de datos personales no afectará las rutinas ni los entrenamientos históricos del alumno.

El cambio de contraseña será una funcionalidad independiente de la edición de datos personales.

## 4.6. Desactivación y reactivación
La profesora podrá desactivar alumnos que dejen de asistir al gimnasio.

La desactivación será lógica, es decir, no eliminará físicamente sus datos de la base de datos.

Al desactivar un alumno:
- Su cuenta quedará marcada como inactiva.
- No podrá acceder a las funcionalidades protegidas de la aplicación.
- Sus rutinas y entrenamientos permanecerán almacenados.
- Su historial seguirá disponible para la profesora.
- La profesora podrá reactivarlo posteriormente.
Al reactivar un alumno, recuperará el acceso a su cuenta y a la información que corresponda según el estado de sus rutinas.

## 4.7. Reglas de negocio
- Solo la profesora podrá registrar, modificar, desactivar y reactivar alumnos.
- Cada alumno tendrá una cuenta individual.
- No podrán existir dos cuentas con el mismo correo electrónico.
- Los alumnos no podrán registrarse por cuenta propia.
- Cada alumno podrá tener como máximo una rutina activa.
- Un alumno podrá estar registrado sin tener una rutina activa.
- Desactivar un alumno no eliminará sus rutinas ni sus entrenamientos.
- La profesora podrá consultar la información histórica de alumnos inactivos.
- Los alumnos solo podrán acceder a sus propios datos de entrenamiento.
- La profesora elegirá si invitar por correo electrónico o compartir la invitación manualmente por WhatsApp.
- El teléfono será opcional y no reemplazará al correo electrónico como identificador de acceso.
- Los alumnos podrán editar sus propios datos personales y cambiar o recuperar su contraseña.
- Los cambios de correo electrónico requerirán verificación segura antes de su uso para iniciar sesión.


### 5. Gestión de ejercicios
El sistema contará con una biblioteca dinámica de ejercicios, administrada exclusivamente por la profesora.

La biblioteca permitirá crear, consultar, buscar, editar, desactivar y reutilizar ejercicios en diferentes rutinas.

Inicialmente, la biblioteca podrá estar vacía y se completará progresivamente a medida que la profesora incorpore ejercicios.

## 5.1. Creación de ejercicios
La profesora podrá registrar nuevos ejercicios desde la sección de biblioteca o directamente durante la creación de una rutina.

Cada ejercicio tendrá los siguientes datos:
- Nombre: obligatorio.
- Descripción o indicaciones: opcional.
- Video explicativo: opcional. La profesora podrá asociar un enlace de YouTube al ejercicio. El sistema almacenará la URL del video, sin descargarlo ni guardar archivos de video en la aplicación.
- Estado: activo o inactivo, administrado por el sistema.
Al guardar un ejercicio, este se incorporará automáticamente a la biblioteca y quedará disponible para utilizarlo en futuras rutinas.

Si la profesora crea un ejercicio mientras está armando una rutina, el sistema permitirá seleccionarlo inmediatamente después de guardarlo, sin perder el trabajo realizado.

## 5.2. Biblioteca y búsqueda de ejercicios
La profesora podrá consultar todos los ejercicios registrados.

La biblioteca permitirá:
- Visualizar los nombres de los ejercicios.
- Buscar ejercicios por nombre.
- Seleccionar ejercicios mediante una lista desplegable con buscador.
- Consultar sus descripciones y videos explicativos.
- Identificar ejercicios activos e inactivos.
- Acceder a las opciones de edición y desactivación.
Los ejercicios inactivos no aparecerán entre las opciones habituales al crear nuevas rutinas.

## 5.3. Reutilización de ejercicios
Los ejercicios registrados podrán utilizarse en diferentes rutinas y para distintos alumnos.

Al seleccionar un ejercicio existente, la profesora no tendrá que volver a ingresar su nombre, descripción o video.

Las series, repeticiones y pesos se configurarán dentro de cada rutina, de manera independiente.

Por ejemplo, el ejercicio "Sentadilla" podrá utilizarse en la rutina de un alumno con 4 series de 8 repeticiones y en la de otro con 3 series de 12 repeticiones.

La modificación de las series y repeticiones de una rutina no afectará a las demás.

## 5.4. Edición de ejercicios
La profesora podrá modificar:
- Nombre.
- Descripción o indicaciones.
- Enlace de YouTube asociado al ejercicio, que podrá agregarse, reemplazarse o quitarse.
Los cambios realizados en la biblioteca se reflejarán en las consultas futuras del ejercicio.

Las modificaciones de un ejercicio no alterarán la planificación histórica almacenada en los entrenamientos ya iniciados, tanto EN_CURSO como FINALIZADOS.

Los entrenamientos iniciados conservarán la información necesaria para representar la planificación con la que fueron creados, aunque posteriormente se modifique el ejercicio de la biblioteca.

## 5.5. Desactivación y reactivación
La profesora podrá desactivar ejercicios que ya no utilice.

La desactivación será lógica, sin eliminar físicamente el ejercicio de la base de datos.

Al desactivar un ejercicio:
- Dejará de aparecer entre las opciones habituales para agregar a nuevas rutinas.
- Permanecerá registrado en la biblioteca.
- Se conservará su relación con las rutinas existentes.
- No se eliminará de los entrenamientos históricos.
La profesora podrá reactivar un ejercicio para volver a utilizarlo en nuevas rutinas.

## 5.6. Videos explicativos
Los ejercicios podrán incluir opcionalmente un video explicativo alojado en YouTube para que los alumnos consulten cómo realizar el movimiento.

La profesora podrá agregar, reemplazar o quitar el enlace de YouTube asociado a cada ejercicio.

Los alumnos podrán acceder al video desde la aplicación, siempre que tengan autorización para consultar el ejercicio correspondiente.

Los videos no se cargarán ni almacenarán en los servidores de la aplicación. El sistema guardará únicamente la URL del video de YouTube.

Se podrán utilizar videos públicos o no listados de YouTube. Los videos privados no serán compatibles con el acceso habitual mediante enlaces, salvo que YouTube autorice expresamente al usuario.

Los enlaces deberán validarse antes de guardarse para comprobar que correspondan a URLs admitidas de YouTube.

La aplicación no requerirá conversión, procesamiento ni almacenamiento de archivos de video.

El uso de YouTube no garantizará privacidad estricta: cualquier persona que tenga acceso al enlace de un video no listado podrá visualizarlo.

## 5.7. Reglas de negocio
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


### 6. Creación y gestión de rutinas
El sistema permitirá a la profesora crear, configurar, publicar, modificar y consultar rutinas de entrenamiento personalizadas para cada alumno.

Cada rutina estará asociada a un único alumno y contará con una planificación organizada por semanas, días de entrenamiento, bloques y ejercicios.

La creación y administración de rutinas será exclusiva de la profesora.

## 6.1. Creación de rutinas
La profesora podrá crear una nueva rutina desde la ficha individual de un alumno.

Para crearla, deberá configurar:
- Alumno: destinatario de la rutina.
- Fecha de inicio de la rutina.
- Cantidad de semanas de planificación, entre 1 y 6.
- Cantidad de días de entrenamiento disponibles por semana, entre 1 y 7.
- Cantidad de estímulos requeridos para completar cada semana de planificación, equivalente a la cantidad de días de entrenamiento configurados.
Cada rutina se identificará mediante el alumno al que pertenece y su período de entrenamiento.

No será obligatorio asignar un nombre personalizado a la rutina.

La rutina podrá guardarse como borrador antes de ser publicada.

## 6.2. Organización y avance de semanas de planificación
Las rutinas estarán organizadas en semanas de planificación numeradas consecutivamente, desde la semana 1 hasta la cantidad configurada por la profesora, con un máximo de 6 semanas.

Estas semanas no representan períodos fijos de siete días calendario, sino etapas de entrenamiento que el alumno completa según su propio ritmo.

Reglas de avance:
- Cada semana de planificación tendrá una cantidad de estímulos requeridos, equivalente a la cantidad de días de entrenamiento configurados para esa rutina.
- Cada entrenamiento finalizado contabilizará un estímulo para la semana de planificación correspondiente.
- Los entrenamientos en estado EN_CURSO no contabilizarán estímulos hasta su finalización.
- El alumno podrá elegir libremente cualquiera de los días de entrenamiento disponibles para la semana actual, sin obligación de seguir un orden.
- Un mismo día de entrenamiento podrá repetirse en fechas diferentes y cada realización finalizada contará como un estímulo independiente.
- Solo podrá iniciarse un entrenamiento por alumno y por día calendario, considerando la zona horaria America/Argentina/Buenos_Aires.
- Cuando el alumno complete la cantidad de estímulos requerida, el sistema avanzará automáticamente a la siguiente semana de planificación.
- El avance no dependerá de la fecha de inicio ni de la cantidad de días transcurridos.
- Una semana de planificación podrá completarse en tantos días calendario como necesite el alumno.
- Al completar los estímulos de la última semana, la rutina pasará automáticamente a estado FINALIZADA.
- Si existe una rutina PROGRAMADA para ese alumno, se activará automáticamente al finalizar la rutina anterior.
Ejemplo:

Una rutina tiene 4 semanas de planificación y 3 estímulos requeridos por semana.

El alumno necesita completar 12 entrenamientos en total. Si tarda 5 días en completar los primeros 3 entrenamientos, recién entonces avanzará a la semana 2. Si tarda 10 días en completar los siguientes 3, avanzará a la semana 3 después de esos 10 días.

En ningún caso el sistema avanzará de semana únicamente porque hayan transcurrido siete días.

## 6.3. Organización por días de entrenamiento
La profesora podrá definir entre 1 y 7 días distintos de entrenamiento.

Los días se identificarán como:
- Día 1.
- Día 2.
- Día 3.
- Y así sucesivamente.
Estos días representarán sesiones de entrenamiento, no días fijos del calendario.

Por ejemplo, una rutina de tres días podrá tener Día 1, Día 2 y Día 3, sin obligar al alumno a entrenar lunes, miércoles y viernes.

Selección y repetición de días de entrenamiento:
- El alumno podrá seleccionar libremente cualquiera de los días de entrenamiento disponibles en su semana de planificación actual.
- No será obligatorio realizar los días en un orden determinado.
- El alumno podrá repetir un mismo día de entrenamiento en fechas diferentes.
- Cada entrenamiento finalizado contará como un estímulo independiente, aunque corresponda a un día que ya haya realizado.
- No será necesario completar todos los días de entrenamiento diferentes para avanzar de semana. Será suficiente con completar la cantidad de estímulos requeridos.
- Solo podrá iniciarse un entrenamiento por alumno y por día calendario, considerando la zona horaria America/Argentina/Buenos_Aires.
- Los entrenamientos en estado EN_CURSO no contabilizarán estímulos hasta que sean finalizados.
- La selección o repetición de un día de entrenamiento no modificará la planificación original creada por la profesora.
Ejemplo:

Una semana de planificación tiene tres días disponibles (Día 1, Día 2 y Día 3) y requiere completar tres estímulos.

El alumno podría realizar:
- Lunes: Día 1.
- Miércoles: Día 1 nuevamente.
- Viernes: Día 3.
Al finalizar esas tres sesiones, el sistema avanzará automáticamente a la siguiente semana de planificación, aunque el alumno no haya realizado el Día 2.

## 6.4. Organización por bloques
Cada día de entrenamiento estará organizado en bloques.

Los bloques permitirán agrupar ejercicios y definir su orden de realización.

La profesora podrá:
- Crear bloques dentro de un día.
- Agregar ejercicios a cada bloque.
- Modificar el orden de los bloques.
- Modificar el orden de los ejercicios dentro de cada bloque.
- Quitar ejercicios de un bloque.
La estructura de bloques permitirá representar diferentes formas de organización del entrenamiento.

## 6.5. Incorporación de ejercicios
La profesora podrá agregar ejercicios desde la biblioteca definida en la sección 5.

Para seleccionar un ejercicio, dispondrá de una lista desplegable con buscador.

Si el ejercicio no existe, podrá crearlo desde la misma pantalla sin perder la configuración de la rutina.

Cada ejercicio agregado a una rutina tendrá una configuración independiente.

La utilización de un mismo ejercicio en diferentes rutinas no implicará compartir sus series, repeticiones o pesos.

## 6.6. Configuración de series, repeticiones y pesos
Para cada ejercicio incluido en una rutina, la profesora podrá configurar:
- Cantidad de series.
- Repeticiones previstas.
- Peso recomendado, cuando corresponda.
Estos valores pertenecerán a la planificación del ejercicio dentro de la rutina.

El peso recomendado será independiente del peso real registrado posteriormente por el alumno.

La profesora podrá modificar la planificación entre las distintas semanas.

## 6.7. Planificación y progresión semanal
La profesora podrá definir una planificación diferente para cada semana de una rutina.

El sistema permitirá copiar la configuración de una semana a otra para facilitar la creación de progresiones.

Después de copiar una semana, la profesora podrá modificar:
- Ejercicios.
- Cantidad de series.
- Repeticiones.
- Pesos recomendados.
- Organización de los bloques.
Los cambios realizados en una semana no modificarán automáticamente las demás.

## 6.8. Guardado como borrador
La profesora podrá guardar una rutina en estado BORRADOR.

Las rutinas en borrador:
- Podrán tener información incompleta.
- Serán visibles únicamente para la profesora.
- Podrán editarse y completarse posteriormente.
- No estarán disponibles para el alumno.
- No permitirán registrar entrenamientos.
La publicación requerirá que la rutina cumpla las validaciones correspondientes.

## 6.9. Publicación de rutinas
Una vez completada la planificación, la profesora podrá publicar la rutina.

La publicación permitirá que el alumno consulte sus días, bloques, ejercicios y planificación semanal.

Cada alumno podrá tener como máximo una rutina activa.

Las rutinas anteriores se conservarán para consulta histórica.

## 6.10. Modificación de rutinas publicadas
La profesora podrá modificar rutinas publicadas, incluyendo:
- Ejercicios.
- Bloques y orden de ejercicios.
- Series y repeticiones.
- Pesos recomendados.
Las modificaciones afectarán la planificación disponible para los entrenamientos posteriores.

Los entrenamientos ya iniciados, tanto EN_CURSO como FINALIZADOS, conservarán una representación histórica de la planificación con la que fueron iniciados.

La edición de una rutina no deberá alterar los pesos reales ni los resultados registrados en entrenamientos iniciados o finalizados.

Modificación de la duración y cantidad de días

La profesora podrá modificar la duración total o la cantidad de días de entrenamiento por semana de una rutina publicada únicamente cuando todavía no exista ningún entrenamiento iniciado asociado a ella.

Se considerará entrenamiento iniciado cualquier sesión registrada, independientemente de que su estado sea EN_CURSO o FINALIZADO.

Una vez que el alumno haya iniciado al menos un entrenamiento de la rutina, la profesora no podrá modificar:
- La cantidad de semanas de planificación.
- La cantidad de días de entrenamiento disponibles por semana.
- La cantidad de estímulos requeridos por semana.
Estas restricciones permiten mantener la consistencia del progreso del alumno y de los entrenamientos registrados.

La profesora podrá realizar las modificaciones permitidas sobre la planificación, conservando los registros históricos de los entrenamientos ya iniciados o finalizados.

## 6.11. Consulta de rutinas
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

## 6.12. Reglas de negocio
- Solo la profesora podrá crear, modificar y publicar rutinas.
- Cada rutina pertenecerá a un único alumno.
- Cada alumno podrá tener como máximo una rutina activa.
- La duración será configurable entre 1 y 6 semanas.
- La cantidad de días de entrenamiento será configurable entre 1 y 7.
- Los días de entrenamiento no estarán vinculados a días fijos de la semana.
- Las semanas de planificación avanzarán automáticamente cuando el alumno complete la cantidad de estímulos requerida para la semana actual.
- Cada entrenamiento FINALIZADO contará como un estímulo, independientemente del día de entrenamiento seleccionado.
- Los entrenamientos EN_CURSO no sumarán estímulos hasta su finalización.
- El avance entre semanas no dependerá de los días transcurridos ni de fechas del calendario.
- Al completar todos los estímulos de la última semana de planificación, la rutina pasará automáticamente a estado FINALIZADA.
- Si existe una rutina PROGRAMADA para el alumno, se activará automáticamente al finalizar la rutina anterior.
- La profesora podrá copiar la planificación entre semanas.
- Las rutinas podrán guardarse como borradores.
- Los alumnos no podrán modificar la planificación de sus rutinas.
- Los entrenamientos finalizados conservarán sus datos históricos aunque posteriormente se modifique la rutina.

## 6.13. Preparación de la próxima rutina
La profesora podrá preparar una nueva rutina para un alumno mientras este todavía se encuentra realizando su rutina ACTIVA.

La nueva rutina podrá guardarse inicialmente en estado BORRADOR, permitiendo continuar su edición antes de dejarla preparada para su activación.

Cuando la profesora considere que la nueva rutina está lista, podrá establecerla en estado PROGRAMADA.

Reglas:
- Cada alumno podrá tener como máximo una rutina ACTIVA y una rutina PROGRAMADA al mismo tiempo.
- Podrán existir varias rutinas en estado BORRADOR.
- La rutina PROGRAMADA no estará disponible para que el alumno inicie entrenamientos mientras exista una rutina ACTIVA.
- La rutina PROGRAMADA se activará automáticamente cuando el alumno complete todos los estímulos requeridos de su rutina ACTIVA.
- La activación no dependerá de una fecha de finalización calculada ni de la cantidad de días transcurridos.
- Mientras la rutina permanezca en estado PROGRAMADA, la profesora podrá modificar su planificación respetando las reglas de edición correspondientes.
- Si la rutina ACTIVA finaliza y no existe una rutina PROGRAMADA, el alumno quedará sin rutina activa hasta que la profesora publique una nueva.
La preparación anticipada permitirá que el alumno continúe entrenando sin interrupciones cuando complete su planificación actual.

## 6.14. Activación automática de rutinas programadas
Cuando un alumno complete todos los estímulos requeridos de su rutina ACTIVA, el sistema deberá finalizarla automáticamente.

Si el alumno tiene una rutina en estado PROGRAMADA, esta se activará inmediatamente después de finalizar la anterior.

Reglas de activación:
- La finalización de la rutina ACTIVA se producirá cuando se complete el último estímulo de su última semana de planificación.
- La rutina anterior cambiará automáticamente al estado FINALIZADA.
- Si existe una rutina PROGRAMADA, cambiará automáticamente al estado ACTIVA.
- La nueva rutina comenzará en su primera semana de planificación, con cero estímulos completados.
- La activación no dependerá de fechas estimadas de finalización ni de períodos de siete días.
- El alumno podrá consultar la nueva rutina activa inmediatamente después de la transición.
- La transición deberá realizarse de forma atómica, evitando que queden dos rutinas ACTIVA para el mismo alumno.
- Si no existe una rutina PROGRAMADA, la rutina anterior igualmente pasará a FINALIZADA y el alumno quedará sin rutina activa.
- Los entrenamientos y registros históricos de la rutina anterior deberán conservarse sin modificaciones.

**Ejemplo:**

Un alumno tiene una rutina ACTIVA de 4 semanas de planificación con 3 estímulos por semana, es decir, 12 estímulos en total.

Paulina prepara una nueva rutina y la deja en estado PROGRAMADA.

Cuando el alumno finaliza su entrenamiento número 12, el sistema marca la rutina anterior como FINALIZADA y activa automáticamente la nueva rutina.

No importa si el alumno tardó 4, 6 u 8 semanas calendario en completar esos 12 estímulos.

## 6.15. Avisos de próxima finalización de rutinas
El sistema deberá mostrar avisos a la profesora cuando un alumno esté próximo a completar su rutina ACTIVA, para que pueda preparar con anticipación la siguiente planificación.

Los avisos se basarán en la cantidad de estímulos pendientes, no en fechas ni semanas calendario.

Configuración de avisos:
- La profesora podrá configurar para cada rutina la cantidad de estímulos restantes que activará el aviso.
- El valor predeterminado será de 3 estímulos.
- El umbral deberá ser un número entero positivo y no podrá superar la cantidad total de estímulos de la rutina.
- La configuración podrá modificarse mientras la rutina esté ACTIVA.
- Si la profesora modifica el umbral y la cantidad de estímulos pendientes ya cumple la nueva condición, el aviso deberá generarse.
Reglas de funcionamiento:
- El sistema calculará los estímulos pendientes restando los entrenamientos finalizados de la cantidad total de estímulos requeridos por la rutina.
- Cuando los estímulos pendientes sean menores o iguales al umbral configurado y mayores que cero, se generará un aviso para la profesora.
- El aviso aparecerá dentro del panel de la profesora, sin enviar correos electrónicos ni mensajes de WhatsApp.
- El aviso identificará al alumno, la rutina y la cantidad de estímulos pendientes.
- No deberán generarse avisos duplicados por cada entrenamiento posterior.
- El aviso permanecerá visible mientras la rutina continúe ACTIVA y no exista una próxima rutina PROGRAMADA.
- Cuando la profesora deje preparada una rutina PROGRAMADA para ese alumno, el aviso dejará de mostrarse.
- Cuando la rutina ACTIVA finalice, el aviso de próxima finalización dejará de mostrarse.
- Cada rutina tendrá su propio umbral de aviso.
**Ejemplo:**

Un alumno tiene una rutina de 4 semanas de planificación con 3 estímulos por semana, es decir, 12 estímulos en total.

Paulina configura el aviso cuando resten 3 estímulos.

Cuando el alumno finaliza su noveno entrenamiento, quedan 3 estímulos pendientes y el sistema muestra un aviso en el panel de Paulina.

El aviso continuará visible hasta que Paulina prepare una rutina PROGRAMADA o hasta que la rutina actual finalice.

El aviso no dependerá de cuántas semanas calendario haya tardado el alumno en realizar esos entrenamientos.

## 6.16. Estados de las rutinas
Las rutinas podrán encontrarse en los siguientes estados:
- BORRADOR: en preparación y no publicada.
- PROGRAMADA: publicada, pendiente de activación.
- ACTIVA: disponible para el alumno.
- FINALIZADA: rutina que ha concluido porque el alumno completó todos los estímulos requeridos de sus semanas de planificación, o porque fue reemplazada mediante una acción permitida de la profesora. La rutina deja de estar disponible para iniciar nuevos entrenamientos, pero conserva su planificación y todos los registros históricos.
Los cambios de estado deberán respetar las reglas de acceso, publicación y conservación del historial.

Reglas de transición de estados:
- Una rutina ACTIVA pasará automáticamente a FINALIZADA cuando el alumno complete todos los estímulos requeridos.
- Si existe una rutina PROGRAMADA, pasará automáticamente a ACTIVA inmediatamente después de finalizar la anterior.
- La transición automática no dependerá de fechas de finalización ni de semanas calendario.
- Cada alumno podrá tener como máximo una rutina ACTIVA y una PROGRAMADA.
- Las rutinas FINALIZADA conservarán sus entrenamientos, registros de pesos e información histórica.
- Los cambios de estado deberán respetar las restricciones de permisos y mantener la consistencia de los datos.


### 7. Realización de entrenamientos y registro de pesos
El sistema permitirá a los alumnos consultar sus rutinas activas, seleccionar un día de entrenamiento, registrar los pesos utilizados y finalizar cada sesión.

Cada entrenamiento realizado se almacenará de forma independiente, permitiendo conservar un historial de las sesiones completadas.

La profesora también podrá registrar y finalizar entrenamientos en nombre de sus alumnos.

## 7.1. Acceso a los entrenamientos
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

## 7.2. Selección del día de entrenamiento
El alumno podrá seleccionar cualquiera de los días de entrenamiento correspondientes a su semana actual.

Los días se identificarán como Día 1, Día 2, Día 3, etc.

El sistema podrá sugerir el siguiente día de entrenamiento según la planificación y los entrenamientos realizados anteriormente.

Esta sugerencia no será obligatoria.

El alumno podrá realizar los días en un orden diferente al sugerido.

## 7.3. Inicio de un entrenamiento
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

## 7.4. Registro de pesos
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

## 7.5. Finalización de entrenamientos
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

## 7.6. Repetición de entrenamientos
El alumno podrá realizar un mismo día de entrenamiento más de una vez durante la semana correspondiente.

El alumno podrá repetir un mismo día de entrenamiento en fechas diferentes, sin necesidad de haber realizado los demás días disponibles de su semana de planificación.

Cada repetición deberá generar un registro de entrenamiento independiente.

Reglas:
- Un mismo día de entrenamiento podrá realizarse varias veces durante una semana de planificación, siempre que cada sesión se inicie en una fecha diferente.
- El alumno podrá iniciar como máximo un entrenamiento por día calendario, considerando la zona horaria America/Argentina/Buenos_Aires.
- Cada entrenamiento FINALIZADO contabilizará un estímulo para la semana de planificación en la que fue iniciado.
- Los entrenamientos EN_CURSO no contabilizarán estímulos hasta su finalización.
- Retomar un entrenamiento EN_CURSO no se considerará iniciar un entrenamiento nuevo.
- Los pesos registrados y los datos de cada realización deberán conservarse de manera independiente.
- La repetición de un entrenamiento no modificará la planificación original de la profesora.
Cada realización se registrará como un entrenamiento independiente.

Los nuevos registros no reemplazarán ni modificarán entrenamientos anteriores.

## 7.7. Entrenamientos finalizados por la profesora
La profesora podrá registrar y finalizar un entrenamiento en nombre de un alumno.

Para ello, accederá a la ficha del alumno y seleccionará el día de entrenamiento correspondiente.

Podrá ingresar los pesos utilizados y finalizar la sesión.

El sistema identificará que el entrenamiento fue registrado o finalizado por la profesora.

## 7.8. Modificación de entrenamientos finalizados
Una vez finalizado un entrenamiento, el alumno no podrá modificar los pesos registrados.

La profesora podrá corregir los pesos de un entrenamiento finalizado cuando sea necesario.

Estas correcciones no modificarán la planificación original de la rutina ni otros entrenamientos del alumno.

## 7.9. Conservación del historial
Cada entrenamiento finalizado conservará la información necesaria para representar cómo fue realizado.

Esto incluye la planificación de ejercicios, series, repeticiones y pesos recomendados correspondientes al momento del entrenamiento.

Las modificaciones posteriores de la rutina o de los ejercicios de la biblioteca no alterarán los registros históricos ya finalizados.

## 7.10. Reglas generales de los entrenamientos
- El alumno solo podrá iniciar entrenamientos correspondientes a su rutina ACTIVA y a su semana de planificación actual.
- Podrá elegir libremente cualquiera de los días de entrenamiento disponibles, sin obligación de seguir un orden.
- Podrá iniciar como máximo un entrenamiento por día calendario, considerando la zona horaria America/Argentina/Buenos_Aires.
- Un entrenamiento iniciado antes de la medianoche podrá finalizarse al día siguiente, sin modificar la fecha en la que fue iniciado.
- Retomar un entrenamiento EN_CURSO no contará como iniciar una nueva sesión.
- Cada entrenamiento FINALIZADO contabilizará exactamente un estímulo para la semana de planificación en la que fue iniciado.
- Los entrenamientos EN_CURSO no contabilizarán estímulos.
- El alumno podrá repetir un mismo día de entrenamiento en fechas diferentes, generando registros independientes.
- Cuando se complete la cantidad de estímulos requerida, el sistema avanzará automáticamente a la siguiente semana de planificación.
- Cuando se completen todos los estímulos de la rutina, esta pasará a FINALIZADA y se activará la rutina PROGRAMADA, si existe.
- Cada entrenamiento conservará los ejercicios, las series, las repeticiones y los pesos registrados correspondientes a esa realización.
- Los entrenamientos FINALIZADOS no podrán volver a finalizarse ni contabilizar estímulos adicionales.
- La finalización de un entrenamiento y la actualización del progreso deberán realizarse de manera consistente, evitando registros duplicados.

## 7.11. Finalización con pesos incompletos
El sistema permitirá finalizar un entrenamiento aunque existan series sin un peso registrado.

Los campos de peso serán opcionales.

Cuando una serie no tenga un peso registrado, el sistema conservará ese valor como dato no informado, sin interpretarlo automáticamente como 0 kg.

El entrenamiento podrá finalizarse siempre que cumpla las demás condiciones de validación.

Una vez finalizado, el alumno no podrá modificar los pesos registrados.

La profesora podrá realizar correcciones posteriores.

## 7.12. Guardado y recuperación de entrenamientos en curso
El sistema permitirá conservar el progreso de un entrenamiento que todavía no haya sido finalizado.

Los pesos ingresados se guardarán de forma persistente para que el alumno pueda continuar su entrenamiento posteriormente.

Si el alumno cierra la aplicación, cambia de pantalla o pierde temporalmente la conexión, podrá recuperar el último progreso guardado correctamente.

El sistema diferenciará entre entrenamientos EN CURSO y FINALIZADOS.

Un entrenamiento EN CURSO no se considerará completado ni aparecerá como una sesión finalizada en el historial.

El alumno podrá reanudar su entrenamiento y continuar registrando pesos hasta presionar "Finalizar entrenamiento".

El guardado deberá realizarse sin requerir que el alumno finalice la sesión.

## 7.13. Consulta de semanas anteriores
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


### 8. Historial y seguimiento de entrenamientos
El sistema permitirá consultar el historial de entrenamientos finalizados y los pesos registrados por los alumnos.

El historial tendrá como objetivo facilitar el seguimiento de la actividad realizada y la evolución de los pesos utilizados en cada ejercicio.

La información se presentará mediante listas y tablas sencillas, adaptadas a dispositivos móviles.

## 8.1. Historial del alumno
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

## 8.2. Historial desde el panel de la profesora
La profesora podrá consultar el historial de cualquier alumno registrado.

Desde la ficha individual de un alumno podrá acceder a sus entrenamientos finalizados y revisar los pesos utilizados.

La profesora podrá consultar el historial de alumnos activos e inactivos.

## 8.3. Detalle de un entrenamiento
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

## 8.4. Historial de pesos por ejercicio
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

## 8.5. Conservación de información histórica
Los entrenamientos finalizados conservarán una representación de la planificación utilizada en el momento de su realización.

La modificación posterior de una rutina o de un ejercicio de la biblioteca no deberá alterar la información histórica del entrenamiento.

La finalización o sustitución de una rutina tampoco eliminará sus entrenamientos.

Los registros permanecerán asociados al alumno correspondiente.

## 8.6. Corrección de pesos históricos
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

## 8.7. Consulta de rutinas anteriores
El alumno y la profesora podrán consultar las rutinas finalizadas.

Las rutinas anteriores estarán disponibles en modo lectura.

La consulta permitirá visualizar la planificación correspondiente y acceder a los entrenamientos que se realizaron durante su período.

No podrán iniciarse nuevos entrenamientos sobre rutinas finalizadas.

## 8.8. Reglas de negocio
- Cada alumno podrá consultar únicamente su propio historial.
- La profesora podrá consultar el historial de todos sus alumnos.
- Los entrenamientos finalizados se conservarán aunque la rutina deje de estar activa.
- Los entrenamientos repetidos aparecerán como registros independientes.
- Los pesos no informados se mostrarán como "Sin registrar".
- Los alumnos no podrán modificar entrenamientos finalizados.
- La profesora podrá corregir los pesos históricos.
- Las modificaciones posteriores de rutinas y ejercicios no alterarán los datos históricos.
- En el MVP, el seguimiento se realizará mediante listas y tablas, sin gráficos estadísticos.


### 9. Paneles e interfaz de usuario
La aplicación contará con dos interfaces principales, diferenciadas según el rol del usuario:
- Panel de la profesora.
- Panel del alumno.
Cada usuario accederá únicamente a las funcionalidades autorizadas para su rol.

La interfaz será adaptable a dispositivos móviles, tablets y computadoras, priorizando una experiencia sencilla y cómoda desde el teléfono.

## 9.1. Diseño general
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

## 9.2. Pantallas de autenticación
El sistema contará con las siguientes pantallas:
- Inicio de sesión con correo electrónico y contraseña.
- Establecimiento de contraseña mediante invitación.
- Recuperación de contraseña.
- Cambio de contraseña.
No existirá una pantalla pública para registrar alumnos.

Después de iniciar sesión, cada usuario será dirigido al panel correspondiente a su rol.

## 9.3. Panel principal de la profesora
La profesora accederá a un panel de administración desde el cual podrá consultar información general y acceder a las funcionalidades del sistema.

El panel principal mostrará:
- Acceso a la gestión de alumnos.
- Acceso a la biblioteca de ejercicios.
- Acceso a la gestión de rutinas.
- Alumnos con rutinas próximas a finalizar.
- Alumnos que necesitan una próxima rutina.
- Rutinas en estado BORRADOR o PROGRAMADA.
Avisos de próxima finalización de rutinas:
- Los avisos se mostrarán cuando la cantidad de estímulos pendientes de una rutina ACTIVA sea menor o igual al umbral configurado por la profesora.
- El umbral será configurable para cada rutina y tendrá un valor predeterminado de 3 estímulos.
- Cada aviso mostrará el alumno correspondiente, la rutina activa y la cantidad de estímulos pendientes.
- Los avisos permanecerán visibles mientras la rutina continúe ACTIVA y no exista una próxima rutina PROGRAMADA.
- Cuando la profesora prepare una rutina PROGRAMADA para ese alumno, el aviso dejará de mostrarse.
- Si la rutina ACTIVA finaliza sin que exista una próxima rutina PROGRAMADA, el alumno aparecerá entre aquellos que necesitan una nueva rutina.
- El sistema evitará mostrar avisos duplicados para una misma rutina.
- Los avisos se mostrarán únicamente dentro del panel de la profesora, sin enviar correos electrónicos ni mensajes externos.
El panel permitirá acceder directamente a los alumnos o rutinas relacionados con cada aviso.

La detección de rutinas próximas a finalizar se basará exclusivamente en los estímulos pendientes, independientemente de los días o semanas calendario transcurridos.

## 9.4. Gestión de alumnos
La profesora dispondrá de una pantalla para consultar y administrar alumnos.

Esta pantalla permitirá:
- Consultar el listado de alumnos.
- Buscar alumnos por nombre o apellido.
- Crear nuevas cuentas y elegir el canal de invitación (correo o WhatsApp).
- Acceder a las fichas individuales.
- Editar datos personales.
- Desactivar y reactivar alumnos.
Cada ficha individual permitirá acceder a las rutinas y al historial del alumno.

La pantalla de perfil del alumno permitirá consultar y editar nombre, apellido, correo electrónico y teléfono opcional. El cambio de correo requerirá verificación segura; el alumno no podrá modificar su rol ni el estado de su cuenta.

## 9.5. Biblioteca de ejercicios
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

## 9.6. Gestión de rutinas
La profesora contará con una interfaz para crear y editar rutinas personalizadas para cada alumno.

El editor permitirá:
- Seleccionar un alumno.
- Configurar la fecha de inicio de la rutina.
- Definir la cantidad de semanas de planificación, entre 1 y 6.
- Definir la cantidad de días de entrenamiento disponibles por semana, entre 1 y 7.
- Establecer la cantidad de estímulos requeridos por semana, equivalente a la cantidad de días de entrenamiento configurados.
- Visualizar la cantidad total de estímulos de la rutina, calculada multiplicando las semanas de planificación por los estímulos requeridos por semana.
- Configurar la cantidad de estímulos restantes para mostrar un aviso de próxima finalización, con un valor predeterminado de 3 estímulos.
- Organizar semanas de planificación, días de entrenamiento y bloques.
- Agregar ejercicios desde la biblioteca.
- Crear ejercicios sin abandonar el editor.
- Configurar series, repeticiones y pesos recomendados.
- Copiar planificaciones entre semanas.
- Guardar rutinas en estado BORRADOR.
- Publicar rutinas y preparar una próxima rutina en estado PROGRAMADA.
- Modificar rutinas publicadas según las reglas establecidas.
- Consultar el progreso del alumno según los estímulos completados y pendientes.
Reglas del formulario:
- La cantidad total de estímulos se calculará automáticamente.
- El umbral de aviso deberá ser un número entero positivo y no podrá superar la cantidad total de estímulos de la rutina.
- Si una rutina tiene menos de 3 estímulos en total, el valor predeterminado del aviso se ajustará a la cantidad total de estímulos.
- Una vez que el alumno haya iniciado al menos un entrenamiento de la rutina, no podrán modificarse la cantidad de semanas de planificación, la cantidad de días de entrenamiento ni los estímulos requeridos por semana.
- La profesora podrá modificar el umbral de aviso mientras la rutina esté ACTIVA.
- La fecha de inicio no determinará el avance entre semanas de planificación ni la finalización de la rutina.
La interfaz deberá facilitar la navegación entre semanas y días de entrenamiento sin perder los cambios guardados.

Las modificaciones de rutinas publicadas deberán respetar las restricciones establecidas y conservar los registros históricos de los entrenamientos realizados.

## 9.7. Panel principal del alumno
Después de iniciar sesión, el alumno accederá a su panel personal.

La pantalla principal mostrará:
- Nombre del alumno.
- Rutina ACTIVA asignada.
- Semana de planificación actual, determinada por los estímulos completados.
- Cantidad total de semanas de planificación de la rutina.
- Cantidad de estímulos completados y pendientes de la semana actual.
- Cantidad total de estímulos completados y pendientes de la rutina.
- Día de entrenamiento sugerido, sin que sea obligatorio seguir ese orden.
- Días de entrenamiento disponibles para la semana actual.
- Acceso a entrenamientos EN_CURSO.
- Acceso al historial de entrenamientos realizados.
Selección de entrenamientos y visualización del progreso:
- El alumno podrá seleccionar libremente cualquiera de los días de entrenamiento disponibles en su semana de planificación actual.
- Podrá repetir un mismo día de entrenamiento en fechas diferentes, respetando el límite de un entrenamiento iniciado por día calendario.
- Cada entrenamiento FINALIZADO sumará un estímulo al progreso de la semana correspondiente.
- Los entrenamientos EN_CURSO no sumarán estímulos hasta su finalización.
- El panel actualizará el progreso cuando se finalice un entrenamiento.
- Al completar los estímulos requeridos de una semana, el sistema mostrará automáticamente la siguiente semana de planificación.
- Al completar todos los estímulos de la rutina, esta pasará a FINALIZADA y, si existe una rutina PROGRAMADA, el alumno podrá acceder a ella como su nueva rutina ACTIVA.
El avance de las semanas de planificación y la finalización de la rutina no dependerán de fechas ni de semanas calendario.

Cuando el alumno no tenga una rutina ACTIVA, el sistema mostrará un mensaje informativo indicando que no tiene una rutina disponible para realizar entrenamientos.

## 9.8. Pantalla de entrenamiento
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

## 9.9. Pantalla de historial
Los alumnos podrán consultar sus entrenamientos anteriores.

La pantalla permitirá:
- Consultar entrenamientos finalizados.
- Acceder al detalle de cada sesión.
- Filtrar por rutina y ejercicio.
- Consultar pesos históricos por ejercicio.
- Comparar registros mediante tablas sencillas.
La profesora podrá acceder al historial de cada alumno desde su ficha individual.

Las correcciones de pesos históricos estarán disponibles exclusivamente para la profesora.

## 9.10. Navegación y permisos
La navegación será diferente según el rol del usuario.

La profesora tendrá acceso a las secciones de administración, mientras que los alumnos accederán únicamente a sus rutinas, entrenamientos e historial.

La aplicación no mostrará opciones para las que el usuario no tenga permisos.

Las restricciones de acceso también deberán verificarse en el servidor, independientemente de la interfaz.

## 9.11. Estados y mensajes de la interfaz
La aplicación deberá mostrar mensajes claros cuando:
- Se guarde correctamente una modificación.
- Un entrenamiento esté guardando su progreso.
- Ocurra un error de conexión o guardado.
- Una rutina no esté disponible.
- Un alumno no tenga una rutina activa.
- Una acción requiera confirmación.
- Un formulario contenga datos inválidos.
Las operaciones importantes, como finalizar entrenamientos, publicar rutinas o desactivar alumnos, deberán contar con confirmaciones cuando corresponda.

## 9.12. Reglas generales
- La aplicación será responsive y mobile-first.
- Los alumnos tendrán una interfaz simplificada.
- La profesora contará con herramientas de administración.
- La navegación respetará los permisos de cada rol.
- Los datos de entrenamiento se presentarán de forma clara y legible.
- Los videos podrán reproducirse desde la aplicación.
- Las pantallas deberán informar el resultado de las operaciones importantes.
- No se incluirán gráficos estadísticos en el MVP.

## 9.13. Navegación móvil
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

## 9.14. Pantalla de inicio de la profesora
Al iniciar sesión, la profesora accederá a un panel resumen.

El panel mostrará:
- Cantidad de alumnos registrados.
- Cantidad de rutinas activas.
- Rutinas próximas a finalizar.
- Alumnos que necesitan una próxima rutina.
- Rutinas en borrador y programadas.
- Accesos rápidos a las funcionalidades de administración.
Los avisos de finalización de rutinas seguirán las reglas definidas en la sección 6.

## 9.15. Identidad visual
La aplicación utilizará la identidad visual de Educando tu cuerpo — Paulina Onocko.

Se utilizarán:
- Logo oficial de Paulina.
- Color bordó como color principal.
- Fondos claros.
- Tipografía moderna y legible.
- Componentes visuales sencillos y consistentes.
La interfaz se diseñará siguiendo un enfoque mobile-first y responsive.

Los colores exactos, tipografías y componentes se documentarán posteriormente durante la definición del sistema de diseño.


### 10. Seguridad y requisitos técnicos
La aplicación deberá garantizar que los usuarios accedan únicamente a la información y funcionalidades correspondientes a su rol.

También deberá proteger los datos almacenados, validar las operaciones y ofrecer un funcionamiento confiable desde dispositivos móviles y computadoras.

## 10.1. Autenticación
El sistema utilizará un servicio de autenticación seguro para administrar las cuentas de usuarios.

Se utilizará Supabase Auth como servicio de autenticación.

El sistema deberá permitir:
- Iniciar y cerrar sesión.
- Establecer una contraseña mediante invitación enviada por correo electrónico o compartida manualmente por WhatsApp.
- Modificar los datos personales propios, incluido el correo electrónico mediante verificación segura.
- Iniciar sesión exclusivamente con correo electrónico y contraseña.
- Cambiar la contraseña.
- Recuperar una contraseña olvidada.
- Mantener una sesión autenticada de manera segura.
- Impedir el acceso a cuentas desactivadas.
No existirá registro público de usuarios.

Las contraseñas serán administradas por el proveedor de autenticación y no se almacenarán en texto plano en la base de datos de la aplicación.

## 10.2. Autorización y roles
El sistema tendrá dos roles:
- PROFESORA.
- ALUMNO.
Las operaciones deberán verificar los permisos correspondientes en el servidor.

La profesora podrá administrar alumnos, ejercicios, rutinas y entrenamientos.

Los alumnos únicamente podrán consultar y registrar información correspondiente a sus propias rutinas y entrenamientos.

El sistema no deberá confiar exclusivamente en la interfaz para restringir el acceso.

## 10.3. Protección de datos
La información de alumnos, rutinas y entrenamientos deberá estar protegida frente a accesos no autorizados.

Cada alumno podrá acceder únicamente a sus propios datos.

La profesora podrá consultar y administrar los datos de los alumnos registrados en el sistema.

Las cuentas desactivadas no podrán utilizar las funcionalidades protegidas.

Los datos históricos deberán conservarse según las reglas de negocio establecidas.

## 10.4. Seguridad de los enlaces de YouTube
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

## 10.5. Validación de datos
El sistema deberá validar los datos ingresados tanto en la interfaz como en el servidor.

Las validaciones incluirán:
- Campos obligatorios.
- Formato válido de correo electrónico.
- Teléfono opcional con formato validado cuando se proporcione.
- Verificación segura del nuevo correo electrónico antes de utilizarlo para iniciar sesión.
- Unicidad de correos electrónicos.
- Unicidad de nombres de ejercicios, sin distinguir mayúsculas y minúsculas.
- Duración de rutinas entre 1 y 6 semanas.
- Cantidad de días de entrenamiento entre 1 y 7.
- Cantidades válidas de series y repeticiones.
- Pesos numéricos no negativos.
- Validación de las URLs de YouTube asociadas a los ejercicios, cuando se proporcione un enlace.
- Permisos para realizar modificaciones.
- La cantidad de semanas de planificación deberá estar entre 1 y 6.
- La cantidad de días de entrenamiento disponibles deberá estar entre 1 y 7.
- La cantidad de estímulos requeridos por semana será igual a la cantidad de días de entrenamiento configurados.
- El umbral de aviso de próxima finalización deberá ser un número entero positivo y no podrá superar la cantidad total de estímulos de la rutina.
- El sistema deberá impedir que un alumno inicie más de un entrenamiento en un mismo día calendario, considerando la zona horaria America/Argentina/Buenos_Aires.
- Retomar un entrenamiento EN_CURSO no deberá considerarse el inicio de una nueva sesión.
- Un entrenamiento FINALIZADO no podrá finalizarse nuevamente ni sumar estímulos adicionales.
- Los entrenamientos EN_CURSO no deberán contabilizarse como estímulos completados.
- El sistema deberá impedir que el progreso de una semana supere la cantidad de estímulos requeridos.
- El avance de semana y la finalización de la rutina deberán producirse únicamente cuando se completen los estímulos correspondientes.
Los campos de peso utilizados durante un entrenamiento podrán quedar vacíos.

Un peso no informado no deberá interpretarse automáticamente como 0 kg.

## 10.6. Persistencia de entrenamientos en curso
El sistema deberá guardar de forma persistente los datos de entrenamientos que todavía no hayan sido finalizados.

Los alumnos podrán recuperar el progreso correctamente guardado cuando vuelvan a ingresar.

El sistema deberá indicar si existen cambios pendientes de guardar o si ocurrió un error durante el guardado.

La finalización de un entrenamiento será una acción independiente del guardado de su progreso.

## 10.7. Integridad de la información
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
- Cada entrenamiento podrá contabilizarse como estímulo una única vez, cuando cambie de EN_CURSO a FINALIZADO.
- La finalización de un entrenamiento deberá ser idempotente: repetir una solicitud de finalización no podrá generar estímulos adicionales ni duplicar registros.
- La actualización del estado del entrenamiento y del progreso de la rutina deberá realizarse en una misma transacción.
- El sistema deberá verificar que el entrenamiento pertenece a la rutina ACTIVA y a la semana de planificación correspondiente antes de contabilizarlo.
- El progreso de una semana no podrá superar la cantidad de estímulos requeridos.
- Cuando se complete el último estímulo de una semana, el avance a la siguiente deberá realizarse de forma atómica.
- Cuando se complete el último estímulo de la rutina, su finalización y la activación de la rutina PROGRAMADA, si existe, deberán realizarse de forma atómica.
- El sistema deberá evitar que dos solicitudes simultáneas produzcan avances duplicados o activen más de una rutina.
- Los registros históricos de entrenamientos y pesos deberán conservarse independientemente de los cambios de semana o de rutina.
Las operaciones que modifiquen información relacionada deberán preservar la consistencia de los datos, incluso ante errores o solicitudes simultáneas.

## 10.8. Gestión de errores
La aplicación deberá informar al usuario cuando ocurra un problema.

Se contemplarán situaciones como:
- Error al iniciar sesión.
- Invitación vencida o inválida.
- Error al guardar una rutina.
- Error al guardar pesos.
- Error al abrir o reproducir un video.
- Pérdida de conexión.
- Intento de acceder a información sin permisos.
- Error al finalizar un entrenamiento.
Los mensajes deberán ser comprensibles y evitar exponer detalles internos del sistema.

Cuando una operación falle, el sistema deberá evitar mostrarla como completada.

## 10.9. Auditoría
El sistema conservará un registro de las correcciones realizadas por la profesora sobre pesos de entrenamientos finalizados.

Cada registro incluirá:
- Entrenamiento afectado.
- Serie modificada.
- Valor anterior.
- Valor nuevo.
- Fecha y hora de la corrección.
- Usuario responsable.
Los registros de auditoría no podrán ser modificados por los alumnos.

## 10.10. Diseño adaptable y compatibilidad
La aplicación será web y utilizará un enfoque mobile-first.

Deberá funcionar en navegadores modernos de teléfonos, tablets y computadoras.

Se priorizará la compatibilidad con dispositivos Android e iPhone.

No será necesario instalar una aplicación nativa desde una tienda.

La interfaz deberá adaptarse a diferentes tamaños de pantalla y permitir una interacción cómoda mediante controles táctiles.

## 10.11. Tecnologías previstas
Se propone utilizar las siguientes tecnologías:
- Next.js con React y TypeScript para la aplicación web.
- Tailwind CSS para los estilos.
- PostgreSQL mediante Supabase para la base de datos.
- Supabase Auth para autenticación.
- YouTube para alojar los videos explicativos de los ejercicios, mediante enlaces asociados a cada ejercicio.
- Zod para validación de datos.
- GitHub para el repositorio y control de versiones.
- Vercel para el despliegue, con un plan compatible con el uso previsto.
- Dirección web proporcionada por Vercel mediante el subdominio .vercel.app.
La aplicación almacenará únicamente las URLs de YouTube, sin utilizar Supabase Storage para los videos.

La arquitectura y las responsabilidades específicas de cada tecnología se definirán en docs/architecture.md.

## 10.12. Requisitos de seguridad adicionales
La aplicación deberá:
- Utilizar conexiones HTTPS en producción.
- Proteger las credenciales y claves privadas.
- No exponer claves administrativas en el navegador.
- Verificar los permisos en cada operación protegida.
- Evitar accesos directos no autorizados a datos de otros alumnos.
- Controlar la vigencia y el uso único de los enlaces de invitación y recuperación de contraseña.
- Generar enlaces de invitación compartibles por WhatsApp únicamente desde el servidor, sin exponer claves administrativas ni tokens de acceso en registros.
- Registrar errores relevantes para facilitar su diagnóstico.
- Mantener separadas las configuraciones de desarrollo y producción.


### 11. Reglas complementarias y casos especiales
Esta sección reúne las reglas adicionales confirmadas durante la revisión de consistencia de la especificación.

Su objetivo es definir el comportamiento del sistema ante situaciones excepcionales y complementar las reglas de negocio establecidas en las secciones anteriores.

## 11.1. Entrenamientos en curso al cambiar de semana
Las semanas de planificación no avanzarán automáticamente por el paso del tiempo, sino cuando el alumno complete la cantidad de estímulos requerida.

Los entrenamientos en estado EN_CURSO no contabilizarán estímulos hasta que sean finalizados.

Reglas:
- Cada entrenamiento conservará su asociación con la semana de planificación y el día de entrenamiento en los que fue iniciado.
- Un entrenamiento EN_CURSO podrá retomarse y finalizarse en una fecha posterior a la de su inicio.
- Retomar un entrenamiento EN_CURSO no se considerará iniciar un nuevo entrenamiento.
- Un entrenamiento iniciado antes de la medianoche podrá finalizarse al día siguiente, conservando su fecha de inicio original.
- La finalización de un entrenamiento contabilizará exactamente un estímulo para la semana de planificación en la que fue iniciado.
- Si ese estímulo completa la cantidad requerida para la semana actual, el sistema avanzará automáticamente a la siguiente semana de planificación.
- No se permitirá iniciar nuevos entrenamientos correspondientes a semanas de planificación anteriores.
- El cambio de semana no modificará los registros históricos de los entrenamientos realizados.
Ejemplo:

Un alumno se encuentra en la semana 2 de planificación y necesita completar 3 estímulos.

Ya finalizó 2 entrenamientos y comienza el tercero un lunes, pero lo deja EN_CURSO.

El sistema permanecerá en la semana 2 hasta que finalice ese entrenamiento.

Si lo retoma y finaliza el martes, se contabilizará el tercer estímulo y el sistema avanzará automáticamente a la semana 3.

El entrenamiento conservará su fecha de inicio del lunes y su asociación con la semana 2.

## 11.2. Entrenamientos en curso al finalizar una rutina
Una rutina ACTIVA finalizará automáticamente cuando el alumno complete todos los estímulos requeridos de sus semanas de planificación, independientemente del tiempo calendario transcurrido.

En condiciones normales, la rutina no podrá finalizar automáticamente mientras exista un entrenamiento EN_CURSO pendiente de contabilizar, ya que cada alumno podrá iniciar como máximo un entrenamiento por día y el avance dependerá de las sesiones finalizadas.

Sin embargo, si la profesora reemplaza una rutina antes de que el alumno complete todos sus estímulos, podrían existir entrenamientos EN_CURSO asociados a la rutina anterior.

Reglas:
- Los entrenamientos EN_CURSO podrán retomarse y finalizarse aunque su rutina original haya pasado a estado FINALIZADA por un reemplazo realizado por la profesora.
- Estos entrenamientos conservarán su asociación con la rutina, la semana de planificación y el día de entrenamiento en los que fueron iniciados.
- La finalización de un entrenamiento perteneciente a una rutina reemplazada conservará sus registros históricos, pero no modificará el progreso de la nueva rutina ACTIVA.
- Los entrenamientos de una rutina reemplazada no podrán provocar avances de semana ni activar nuevas rutinas.
- No se permitirá iniciar nuevos entrenamientos correspondientes a una rutina FINALIZADA.
- Retomar un entrenamiento EN_CURSO no se considerará iniciar un nuevo entrenamiento.
- Los pesos registrados y demás datos de cada entrenamiento deberán conservarse.
- La finalización de un entrenamiento y la conservación de sus registros deberán realizarse sin duplicaciones.
Ejemplo:

Un alumno tiene una rutina ACTIVA y comienza un entrenamiento, pero lo deja EN_CURSO.

Posteriormente, Paulina decide reemplazar esa rutina por otra.

La rutina anterior pasa a FINALIZADA y la nueva pasa a ACTIVA.

El alumno podrá retomar y finalizar el entrenamiento pendiente de la rutina anterior. Ese entrenamiento quedará registrado en su historial, pero no sumará estímulos a la nueva rutina ni modificará su semana de planificación.

## 11.3. Reemplazo de una rutina activa
Cuando la profesora necesite reemplazar una rutina activa, el sistema deberá solicitar confirmación antes de realizar la operación.

La rutina anterior pasará al estado FINALIZADA y la nueva rutina podrá activarse.

Si existen entrenamientos en curso asociados a la rutina anterior, el sistema deberá informar esta situación a la profesora antes de confirmar el reemplazo.

Los entrenamientos ya iniciados podrán continuar y finalizarse normalmente.

El reemplazo no eliminará los registros históricos de la rutina anterior.

## 11.4. Modificación de rutinas con entrenamientos en curso
Cuando la profesora modifique una rutina que tenga entrenamientos en curso, las modificaciones se aplicarán a los entrenamientos que se inicien posteriormente.

Los entrenamientos ya iniciados conservarán la planificación original con la que comenzaron.

Esto incluye:
- Ejercicios.
- Bloques.
- Series.
- Repeticiones.
- Pesos recomendados.
Las modificaciones no deberán alterar los datos ya registrados por el alumno durante una sesión en curso.

## 11.5. Duración y carga de videos
La aplicación permitirá reproducir videos explicativos asociados a los ejercicios mediante enlaces de YouTube.

Reglas de funcionamiento:
- La profesora podrá agregar o modificar el enlace de YouTube asociado a cada ejercicio.
- Los videos se reproducirán mediante un reproductor integrado compatible con YouTube.
- Los alumnos podrán visualizar los videos desde la descripción de los ejercicios correspondientes.
- El sistema deberá validar que los enlaces ingresados correspondan a URLs de YouTube compatibles con la reproducción integrada.
- La aplicación deberá funcionar en navegadores modernos de dispositivos Android, iPhone y computadoras.
- Si un video no está disponible, fue eliminado o tiene restricciones de reproducción, el sistema deberá mostrar un mensaje comprensible.
- La disponibilidad y reproducción de los videos dependerán de las condiciones y restricciones establecidas por YouTube.
Alcance del MVP:
- No se permitirá subir archivos de video directamente a la aplicación.
- No se utilizará Supabase Storage para almacenar videos.
- No se implementarán funciones de edición, conversión ni procesamiento de archivos de video.
- No se establecerá un límite de duración propio de la aplicación, ya que los videos estarán alojados en YouTube.

## 11.6. Publicación y programación de rutinas
La profesora podrá guardar rutinas en estado BORRADOR antes de publicarlas.

Cuando un alumno ya tenga una rutina activa, la profesora podrá preparar una próxima rutina y dejarla en estado PROGRAMADA.

También podrá reemplazar inmediatamente la rutina activa, previa confirmación.

Cada alumno podrá tener como máximo:
- Una rutina ACTIVA.
- Una rutina PROGRAMADA.
- Múltiples rutinas en BORRADOR.
Los alumnos únicamente podrán realizar entrenamientos correspondientes a su rutina activa, con la excepción de las sesiones que ya hubieran iniciado antes de su finalización o reemplazo.

## 11.7. Conservación de información histórica
La finalización, modificación o reemplazo de una rutina no deberá eliminar los entrenamientos finalizados ni sus registros de pesos.

Los entrenamientos conservarán la planificación utilizada al momento de su inicio.

Las correcciones realizadas por la profesora sobre pesos históricos deberán registrarse mediante la auditoría definida en la sección 8.

## 11.8. Dominio y despliegue
Durante el MVP no se contratará un dominio personalizado.

La aplicación utilizará el subdominio proporcionado por Vercel, sujeto a disponibilidad.

El alojamiento deberá utilizar un plan que permita el uso comercial previsto para la aplicación.

La base de datos y la autenticación se gestionarán mediante Supabase. Los videos explicativos se alojarán en YouTube y solo se guardarán sus enlaces.

La incorporación de un dominio personalizado podrá evaluarse posteriormente.

## 11.9. Fechas de inicio y activación automática de rutinas
Primera rutina de un alumno

Cuando la profesora cree la primera rutina de un alumno, podrá seleccionar su fecha de inicio.
- Si la fecha seleccionada es el día actual, la rutina se activará al publicarla.
- Si la fecha seleccionada es futura, la rutina quedará en estado PROGRAMADA hasta su fecha de inicio.
- La fecha de inicio no podrá ser anterior a la fecha actual al momento de publicar.
- Cuando llegue la fecha de inicio programada, el sistema activará automáticamente la rutina.
- La activación por fecha se utilizará únicamente cuando el alumno no tenga una rutina ACTIVA y se haya definido expresamente una fecha futura de inicio.
Programación de la próxima rutina

Cuando un alumno tenga una rutina ACTIVA y la profesora prepare una nueva para continuar su planificación:
- La profesora podrá crear la nueva rutina y guardarla inicialmente en estado BORRADOR.
- Cuando esté lista, podrá establecerla en estado PROGRAMADA.
- La próxima rutina no tendrá una fecha de activación calculada a partir de la duración de la rutina anterior.
- La rutina PROGRAMADA permanecerá pendiente hasta que el alumno complete todos los estímulos requeridos de su rutina ACTIVA.
- Al finalizar el último estímulo de la rutina actual, el sistema activará automáticamente la rutina PROGRAMADA.
- La activación será inmediata y no dependerá de los días calendario transcurridos.
- La nueva rutina comenzará en su primera semana de planificación, con cero estímulos completados.
Finalización de una rutina

La duración real de una rutina dependerá del ritmo con el que el alumno complete los estímulos requeridos.

Las semanas de planificación no representarán períodos obligatorios de siete días calendario.

Cuando el alumno complete el último estímulo de la última semana de planificación:
- La rutina pasará automáticamente al estado FINALIZADA.
- Si existe una próxima rutina PROGRAMADA, se activará automáticamente.
- Si no existe una próxima rutina, el alumno quedará temporalmente sin rutina ACTIVA.
- Los entrenamientos finalizados, los pesos registrados y el historial de la rutina anterior permanecerán disponibles.
- La finalización y la activación de la próxima rutina deberán realizarse de forma atómica para evitar inconsistencias.
La profesora también podrá reemplazar anticipadamente una rutina ACTIVA, respetando las reglas de reemplazo y conservación de entrenamientos históricos establecidas en el sistema.

Alumno sin rutina activa

Cuando un alumno no tenga una rutina ACTIVA, la aplicación mostrará un mensaje informativo:

"Por el momento no tenés una rutina disponible. Tu profesora te asignará una nueva planificación próximamente."

El alumno podrá seguir consultando su historial, pero no podrá iniciar nuevos entrenamientos hasta que tenga una rutina ACTIVA.

Si conserva entrenamientos iniciados anteriormente, podrá reanudarlos y finalizarlos según las reglas establecidas en los apartados 11.1 y 11.2.

Si tiene una primera rutina PROGRAMADA con fecha de inicio futura, el sistema podrá informarle que su planificación todavía no se encuentra disponible.

Reglas de consistencia
- Un alumno nunca podrá tener dos rutinas ACTIVA simultáneamente.
- Un alumno podrá tener como máximo una rutina PROGRAMADA.
- La activación automática de una primera rutina con fecha futura deberá comprobar que el alumno no tenga otra rutina ACTIVA.
- Las rutinas PROGRAMADAS como continuación de una rutina ACTIVA se activarán al completarse los estímulos de la rutina anterior, no mediante fechas calculadas.
- El avance de las semanas de planificación dependerá exclusivamente de los estímulos completados.
- La transición automática entre rutinas deberá preservar la información histórica.
- Los entrenamientos que ya estuvieran EN_CURSO podrán finalizarse según las reglas de los apartados 11.1 y 11.2.
- Las fechas de inicio y los límites diarios de entrenamiento se interpretarán utilizando la zona horaria America/Argentina/Buenos_Aires.
- Los cambios automáticos de estado deberán ejecutarse de manera consistente, evitando activaciones duplicadas.

## 11.10. Reprogramación automática ante el reemplazo de una rutina activa
Cuando la profesora reemplace anticipadamente una rutina ACTIVA y el alumno ya tenga una próxima rutina en estado PROGRAMADA, el sistema deberá conservar esa rutina programada.

Reglas de funcionamiento:
- La rutina ACTIVA anterior pasará al estado FINALIZADA por reemplazo anticipado.
- La nueva rutina seleccionada por la profesora pasará inmediatamente al estado ACTIVA.
- La rutina que ya estaba PROGRAMADA conservará su planificación y su estado.
- La rutina PROGRAMADA se activará automáticamente cuando el alumno complete todos los estímulos requeridos de la nueva rutina ACTIVA.
- No se calcularán ni modificarán fechas de activación en función de la duración de las rutinas.
- Antes de confirmar el reemplazo, el sistema informará a la profesora que la rutina PROGRAMADA existente se conservará y se activará al finalizar la nueva rutina.
- La operación deberá garantizar que el alumno tenga como máximo una rutina ACTIVA y una rutina PROGRAMADA.
- Los entrenamientos históricos y los entrenamientos EN_CURSO conservarán su asociación con la rutina original.
- Los entrenamientos EN_CURSO de la rutina reemplazada podrán finalizarse según las reglas de la sección 11.2, sin modificar el progreso de la nueva rutina.
- El reemplazo deberá realizarse de forma atómica para evitar estados inconsistentes.
Conservación de la planificación:

El reemplazo de la rutina ACTIVA no modificará los ejercicios, bloques, series, repeticiones, pesos recomendados ni la configuración de estímulos de la rutina PROGRAMADA.

**Ejemplo:**
Un alumno tiene:
- Rutina A: ACTIVA.
- Rutina B: PROGRAMADA.
Paulina decide reemplazar anticipadamente la rutina A por una nueva rutina C.

Después del reemplazo:
- Rutina A: FINALIZADA.
- Rutina C: ACTIVA.
- Rutina B: PROGRAMADA.
Cuando el alumno complete todos los estímulos de la rutina C, esta pasará a FINALIZADA y la rutina B se activará automáticamente.

La rutina B no necesitará una nueva fecha de inicio calculada.

## 11.11. Conversión automática y compatibilidad de videos
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