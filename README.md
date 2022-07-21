#Nuevo usuario

- Endpoint para registrar nuevos usuarios. 
- URL: https:localhost:3000/api/v1/wordle/user/new
- Método: POST
- Parámetros: user, email, password
- Respuesta: Todo el nuevo registro creado (user, email, password, score, winnings)
- Autenticacion: No es necesario un Token

#Nueva partida

- Endpoint para empezar una nueva partida. 
- URL: https:localhost:3000/api/v1/wordle/game/new
- Método: POST
- Parámetros: user, token, word_user
- Respuesta:  (letter, value, trys)
- Autenticacion: Es necesario un Token
- Reglas: 
  a. Si la letra ingresada está en el mismo lugar, regresará un 1 y sumará 1 intento al usuario
  b. Si la letra ingresada está en la palabra pero no en el mismo lugar, regresará
  la letra con un 2 y sumará 1 intento al usuario
  c. Si la letra ingresada no se encuentra en la palabra, regresará la letra con un
  3 y sumará 1 intento al usuario
  d. Si acertó en todas las letras, deberá guardar que el usuario acertó la palabra
