
const TicketList = require( './ticket-list' );


class Sockets {

  constructor( io ) {

    this.io = io;
    //crear la instancia de nuestro ticket-list
    this.ticketList = new TicketList();

    this.socketEvents();
  }

  socketEvents() {
    // On connection
    this.io.on( 'connection', ( socket ) => {
      console.log( 'Cliente conectado' );

      // Escuchar evento: mensaje-to-server
      socket.on( 'solicitar-ticket', (data, callback) => {
        const nuevoTicker = this.ticketList.crearTicket();
        callback( nuevoTicker )
      })


    } );
  }


}


module.exports = Sockets;