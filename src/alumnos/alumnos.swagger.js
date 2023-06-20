/**
 * @openapi
 * tags:
 *   name: Alumno
 *   description: Busqueda alumno.
 */

/**
 * @openapi
 *  components:
 *    schemas:
 *      Alumno:
 *        type: object
 *        required:
 *          - dni
 *          - nombre
 *        properties:
 *          dni:
 *            type: string
 *            description: DNI del alumno.
 *          nombre:
 *            type: string
 *            description: Nombre del alumno
 *        example:
 *           dni: 12345678M
 *           nombre: Juan Perez
 */

/**
 * @openapi
 *  /alumnos/{dni}:
 *    get:
 *      summary: Recupera un alumno por su dni.
 *      tags: [Alumno]
 *      security: []
 *      operationId: getAlumno
 *      parameters:
 *        - in: path
 *          name: dni
 *          required: true
 *          description: DNI del alumno.
 *          schema:
 *            type: string
 *      responses:
 *        "200":
 *          description: Un alumno.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Alumno'
 *        "404":
 *          description: Alumno no encontrado.
 */

/**
 * @openapi
 *  /alumnos:
 *    get:
 *      summary: Recupera todos los alumnos
 *      tags: [Alumno]
 *      security: []
 *      operationId: getAlumnos
 *      responses:
 *        "200":
 *          description: Listado de alumnos.
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Alumno'
 */

/**
 * @openapi
 *  /alumnos:
 *    post:
 *      summary: Inserta un alumno.
 *      tags: [Alumno]
 *      security: []
 *      operationId: insertAlumno
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Alumno'
 *      responses:
 *        "200":
 *          description: Un alumno.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Alumno'
 *        "404":
 *          description: Alumno no encontrado.
 */

/**
 * @openapi
 *  /alumnos/{dni}:
 *    delete:
 *      summary: Elimina un alumno.
 *      tags: [Alumno]
 *      security: []
 *      operationId: deleteAlumno
 *      parameters:
 *        - in: path
 *          name: dni
 *          required: true
 *          description: DNI del alumno.
 *          schema:
 *            type: string
 *      responses:
 *        "200":
 *          description: Alumno eliminado.
 *        "404":
 *          description: Alumno no encontrado.
 */
