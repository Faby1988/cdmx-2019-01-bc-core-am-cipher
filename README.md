# Cifrado César

En el ambito de la criptografía (donde se ocupan técnicas de cifrado o codificado destinadas a alterar las representaciones lingüísticas de ciertos mensajes con el fin de hacerlos ininteligibles a receptores no autorizados) el cifrado Cesár es una de la técnicas más simples y usadas, en el que una letra en el texto original es reemplazada por otra letra que se encuentra un número fijo de posiciones más adelante en el alfabeto.

![caeser-cipher](https://www.abc.es/Media/201007/05/cifrado_cesar--478x270.jpg)


Por ejemplo, si usamos un desplazamiento (_offset_) de 13 posiciones:

- La letra A se cifra como N.
- La palabra HOLA se cifra como UBYN.
- Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto cifrado: N O P Q R S T U V W X Y Z A B C D E F G H I J K L M

En la actualidad, todos los cifrados de sustitución simple se descifran con mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas más complejos de codificación, como el cifrado Vigenère, e incluso tiene aplicación en el sistema ROT13.

## Empezando

Este proyecto es una aplicación web; sirve para que el usuario pueda cifrar y descifrar una palabra indicando un desplazamiento específico de carácteres (_offset_).
Acontinuación (https://faby1988.github.io/cdmx-2019-01-bc-core-am-cipher/src/) puedes obtener una copia del proyecto en funcionamiento.

La temática se situa en la necesidad de crear contraseñas más seguras para nuestras diferentes redes social usando una contraseña universal. 

#### Definición del producto

- Quiénes son los principales usuarios de producto.
Personas que manejan sus redes sociales con el mismo pasword creando el riesgo de ser hackeados; pero que debido a su agitado estilo de vida es complicado tener una contraseña única para cada una de sus cuentas.

- Cuáles son los objetivos de estos usuarios en relación con tu producto.
Obtener "varias" contraseñas con la ayuda del desplazamiento y una contraseña "universal", dando así mas seguridad a todas sus cuentas.

- Cómo crees que el producto que estás creando está resolviendo sus problemas.
Debido a que cada contaseña estará basada en una "contraseña universal" no es necesario aprender cada una de las nuevas contraseñas, solo se aplica el desplazamiento deseado u acordado y la web site lo generará en automático.

#### Interfaz de usuario (UI)

La interfaz  permite al usuario:
- Elegir un desplazamiento (_offset_) indicando cuántas posiciones queremos que el cifrado desplace cada caracter.
- Inserta un mensaje (texto) que queremos cifrar.
- Visualizamos el mensaje cifrado.
- De nueva cuenta podemos insertar un mensaje (texto) a descifrar.
- Visualizamos el mensaje descifrado.

## Prerrequisitos

1. Asegúrate de tener un :pencil: editor de texto en
   condiciones, algo como [Atom](https://atom.io/), 
   [Visual Code](https://code.visualstudio.com/), [Sublime Text](https://www.sublimetext.com) o cualquier otro de tu preferencia.
2. Necesitarás una :shell:
   [UNIX Shell](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/shell),
   que es un programita que interpreta líneas de comando (command-line
   interpreter) así como tener [git](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/scm/01-git)
   instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS,
   ya tienes una _shell_ (terminal) instalada por defecto (y probablemente `git`
   también). Si usas Windows puedes usar [Git bash](https://git-scm.com/download/win),
   aunque recomendaría que consideres probar :penguin: GNU/Linux como tu Sistema Operativo.
3. Haz tu propio :fork_and_knife: [fork](https://help.github.com/articles/fork-a-repo/)
   de [ este repositorio](https://github.com/Faby1988/cdmx-2019-01-bc-core-am-cipher).
4. :arrow_down:Clona tu _fork_ a tu computadora (copia local).
5. 📦 Instala las dependencias del proyecto con el comando `npm
   install`. Esto asume que has instalado [Node.js](https://nodejs.org/) (que
   incluye [npm](https://docs.npmjs.com/)).
6. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm run test`.

## Corriendo Pruebas

La lógica del proyecto esta implementada completamente en JavaScript (ES6).
En este proyecto **NO** está permitido usar librerías o frameworks, sólo
[vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e).

No se debe utilizar la _pseudo-variable_ `this`.

Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_
y _lines_, y un mínimo del 50% de _branches_. El _boilerplate_ ya contiene el
setup y configuración necesaria para ejecutar los tests (pruebas) así como _code
coverage_ para ver el nivel de cobertura de los tests usando el comando `npm run
test`.

El _boilerplate_ incluye tests (pruebas) de ejemplo como punto de partida.

Para comenzar este proyecto tendrás que hacer un _fork_ y _clonar_ este
repositorio que contiene el _boilerplate_.

## Construido con:

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias y tests de ejemplo:

```text
./
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── cipher.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── cipher.spec.js
    ├── headless.js
    └── index.html
```

El _boilerplate_ incluye tareas que ejecutan [eslint](https://eslint.org/) y
[htmlhint](https://github.com/yaniswang/HTMLHint) para verificar el `HTML` y
`JavaScript` con respecto a una guías de estilos. Ambas tareas se ejecutan
automáticamente antes de ejecutar las pruebas (tests) cuando usamos el comando
`npm run test`. En el caso de `JavaScript` estamos usando un archivo de
configuración de `eslint` que se llama `.eslintrc` que contiene un mínimo de
información sobre: qué version de JavaScript/ECMAScript, el
entorno (browser en este caso) y las [reglas recomendadas (`"eslint:recommended"`)](https://eslint.org/docs/rules/).
En cuanto a reglas/guías de estilo en sí,
usaremos las recomendaciones _por defecto_ de tanto `eslint` como `htmlhint`.

