class Usuario {

    constructor (nombre, apellido, documento, cuil, edad, totalDJ, totalDC, totalDS ) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.documento = documento;
        this.cuil = cuil;
        this.edad = edad;
        this.totalDJ = 15; //Descuento de jubilados
        this.totalDC = 5; //Descuento de Consumidor Final
        this.totalDS = 20; //Descuento de Socio Club
        }

        
        descuentoJ (){
            return `
    > ${this.nombre}, ${this.apellido}  (Jubilado)
    > DNI: ${this.documento}
    > EDAD: ${this.edad} 
    > CUIL: ${this.cuil}

    .Subtotal:                                   --> $${this.total}
    .El descuento es de:                         --> $${this.total * this.totalDJ / 100}
    .Total con Descuento:                        --> $${this.total - this.total * this.totalDJ / 100}
    
    > Se le realizo un descuento del 15% por beneficio de ${this.tipousuario1} `
        }

        descuentoCF (){
            return `
    > ${this.nombre}, ${this.apellido}  (Consumidor Final)
    > DNI: ${this.documento}
    > EDAD: ${this.edad} 
    > CUIL: ${this.cuil}

    .Subtotal:                                   --> $${this.total}
    .El descuento es de:                         --> $ ${this.total * this.totalDC / 100}
    .Total con Descuento:                        --> $${this.total - this.total * this.totalDC / 100}
    
    > Se le realizo un descuento del 5% por ser ${this.tipousuario2} `
        }

        descuentoDS (){
            return `
    > ${this.nombre}, ${this.apellido}  (Socio Club)
    > DNI: ${this.documento}
    > EDAD: ${this.edad} 
    > CUIL: ${this.cuil}

    .Subtotal:                                   --> $${this.total}
    .El descuento es de:                         --> $ ${this.total * this.totalDS / 100}
    .Total con Descuento:                        --> $${this.total - this.total * this.totalDS / 100} 

    > Se le realizo un descuento del 20% por beneficio de ${this.tipousuario3}`
        }


    }

class Jubilado extends Usuario {
    constructor(nombre, apellido, documento, cuil, edad, total) {
        super(nombre, apellido, documento, cuil, edad, total)
        this.total = total;
        this.descuento = this.totalDJ; 
        this.tipousuario1 = "Jubilado"
    }
    
}

class ConsumidorFinal extends Usuario {
    constructor(nombre, apellido, documento, cuil, edad, total) {
        super(nombre, apellido, documento, cuil, edad, total)
        this.total = total;
        this.descuento = this.totalDC; 
        this.tipousuario2 = "Consumidor Final"
    }
}

class SocioClub extends Usuario{
    constructor(nombre, apellido, documento, cuil, edad, total){
        super(nombre, apellido, documento, cuil, edad, total)
        this.total = total;
        this.descuento = this.totalDS;
        this.tipousuario3 = "Socio Club"
    }
}


console.info("----------------------------------------------------------------------")
console.info("  Compra Usuario: 1")
const j1 = new Jubilado ("Rodrigo", "Gonzalez", "14352643", "20-24352643-9", 69, 8900)
const Desc1 = j1.descuentoJ()
console.info(Desc1)
console.info("----------------------------------------------------------------------")

console.info("----------------------------------------------------------------------")
console.info("  Compra Usuario: 2")
const j2 = new ConsumidorFinal ("Angela", "Perez", "20352987", "27-0352987-4", 35, 6300)
const Desc2 = j2.descuentoCF()
console.info(Desc2)
console.info("----------------------------------------------------------------------")

console.info("----------------------------------------------------------------------")
console.info("  Compra Usuario: 3")
const j3 = new Jubilado ("Miguel", "Acosta", "14421543", "21-4421543-7", 66, 9700)
const Desc3 = j3.descuentoJ()
console.info(Desc3)
console.info("----------------------------------------------------------------------")

console.info("----------------------------------------------------------------------")
console.info("  Compra Usuario: 4")
const j4 = new SocioClub ("Jimena", "Marin", "21987324", "27-21987324-4", 45, 24500)
const Desc4 = j4.descuentoDS()
console.info(Desc4)
console.info("----------------------------------------------------------------------")
