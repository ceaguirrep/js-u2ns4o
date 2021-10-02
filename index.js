datos_entrada = {
  "destino": "HTD",
  "idReferencia": "110236725027",
  "nombre": "ejecutarAccion",
  "origen": "IVR",
  "tipo": "solicitud",
  "parametros": {
    "codigoAccion": "CHANGE_PASSWORD_CM",
    "parametros": [
      {
        "nombre": "Mac",
        "valor": "2C9569B1A21A"
      },
      {
        "nombre": "Security",
        "valor": "WPA2"
      },
      {
        "nombre": "Password",
        "valor": "prueba_arris2"
      }

    ]
  }
};

datos_entrada.parametros.parametros[3] = {"nombre":"Band","valor":"5"};

console.log(datos_entrada);

