
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
      socket.on( 'solicitar-ticket', ( _, callback ) => {
        const nuevoTicker = this.ticketList.crearTicket();
        callback( nuevoTicker );
      } );

      socket.on( 'siguiente-ticket',  ({agente, escritorio}, callback) =>{
        const suTicket = this.ticketList.asignarTicket(agente, escritorio)
        callback(suTicket)
      } );

       socket.on( 'siguiente-ticket',  ({agente, escritorio}, callback) =>{
        const suTicket = this.ticketList.asignarTicket(agente, escritorio)
        callback(suTicket)


        this.io.emit( 'ticket-asignado', this.ticketList.ultimos13 )
      } );



    } );
  }


}


module.exports = Sockets;