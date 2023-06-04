/**
 * @openapi
 * tags:
 *   name: Auth
 *   description: Authentication management.
 */

/**
 * @openapi
 *  components:
 *    schemas:
 *      User:
 *        type: object
 *        required:
 *          - email
 *          - pass
 *        properties:
 *          email:
 *            type: string
 *            format: email
 *            description: Email for the user, needs to be unique.
 *          pass:
 *            type: string
 *            description: Password for the user
 *        example:
 *           email: john@mail.com
 *           pass: secret
 *           token: '653532'
 *      AuthToken:
 *        type: object
 *        required:
 *          - accessToken
 *          - refreshToken
 *          - tokenType
 *          - expires
 *        properties:
 *          accessToken:
 *            type: string
 *            description: Authorization bearer token.
 *          refreshToken:
 *            type: string
 *            description: Refresh token.
 *          tokenType:
 *            type: string
 *            description: value is bearer
 *          expires:
 *             type: number
 *             description: number of seconds for token expiration
 *        example:
 *           accessToken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxZTdmZmFiOC0wM2RlLWNkZTEtNDVjMy03ZWE5YTJmNjFlNTYiLCJlbWFpbCI6ImpzZWlqYXNAZ21haWwuY29tIiwiaWF0IjoxNTgzMzQ5MDU0LCJleHAiOjE1ODMzNDkxMTR9.ftDxHN-EqBMIqxatjjyYwfD_l2wKBaiJO1lTE9DPTX8
 *           refreshToken: 9ea97d38-873a-b680-a236-16feb6bd4590
 *           tokenType: bearer
 *           expires: 900
 */

/**
 * @openapi
 *  /auth/user/login:
 *    post:
 *      summary: Create a token for the user
 *      tags: [Auth]
 *      security: []
 *      operationId: loginUser
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      responses:
 *        "200":
 *          description: A user token
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/AuthToken'
 *        "401":
 *          description: Username or password not correct
 */
