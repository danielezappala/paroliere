Authentication

le SPA normalmente dialogano con delle Restful
server non gestisce la sessione del client che ha inviato la richiesta
invece restituisce un json web token
il token verrà memorizzato sul client 
    se lo memorizziamo nello stato si perderà a causa di un eventuale refresh della pagina
    dunque normalmente si salva nel localStorage del client 
    in maniera che lo potremo riottenere anche dopo un eventuale refresh
questo token creato dal server inviato al client verrà poi reinviato al server ogni qualvolta il client dovrà richiedere l'accesso ad una risorsa protetta

1) create a form auth
https://www.codementor.io/@obabichev/react-token-auth-12os8txqo1
npm install react-token-auth
2) create a token provider

    getToken() to get the current token (it will be used in fetch)
    setToken() to set token after login, logout or registration
    isLoggedIn() to check is the user logged in
    subscribe() to give the provider a function that should be called after any token change
    unsubscribe() to remove subscriber






 
