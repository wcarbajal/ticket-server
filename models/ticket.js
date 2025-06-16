const { v4: uiidv4 } = require( 'uuid' );

class Ticket {

  constructor( numero ) {
    this.id = uiidv4();
    this.numero = numero;
    this.escritorio = null;
    this.agente = null;


  }


}

module.exports = Ticket;