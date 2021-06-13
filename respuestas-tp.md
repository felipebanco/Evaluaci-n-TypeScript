# **Evaluación Programación II**.
## *Felipe Banco.*
## *Cristian Fernandez .*
## *Desarrollo de Software IES-9023.*
- - -
## **Polimorfismo en TypeScript**
***¿Qué es el polimorfismo en Programación Orientada a Objetos?***

Es una propiedad del paradigma de objetos, que hace referencia a que un método del mismo nombre que comparten varias clases se ejecuta de forma diferente. Por ej: la clase Vehiulo{} dispone del método arrancar() que heredan tres subclases, Auto(), Camion(), Moto(); cada una de ellas ejecuta el mismo método de una forma diferente.

***¿Cuáles son los tipos de polimorfismo?***

Existen dos tipos: polimorfismo de sobrecarga y de sobreescritura. El primero se aplica cuando las clases tiene el mismo método pero que recibe un número variable de parámetros y de tipo de datos(boolean, int, string, etc). El segundo permite que hayan los mismos métodos entre las clases principales y las subclases.

***¿Cómo podemos usar el polimorfismo en TypeScript?***

El polimorfismo siempre se ejecuta por herencia de clases, pero también es posible complementar con clases abstractas e interfaces.

