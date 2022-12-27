
class ContenedorArchivo {

    constructor() {
        this.productos = [
            {
                title: 'Resident Evil 5',
                price: 400,
                thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_911033-MLA45731803633_042021-O.webp',
                id: 1
            },
            
            
            {
                title: 'Resident Evil 6',
                price: 400,
                thumbnail: 'https://m.media-amazon.com/images/I/51GaThCwQaL._AC_.jpg',
                id: 2
            }
            ]
        this.id = 0
    }

    listar(id) {
        const posicion = this.productos.findIndex(e =>e.id == id )
        if(posicion == -1){
            return ({error: 'producto no encontrado'})
        }else{
            return (this.productos[posicion]) 
        }
    }

    listarAll() {
        return this.productos
    }

    guardar(prod) {
        let products = this.productos
        let id = 0
        this.productos.length == 0 ? (id=1) : (id=products[products.length-1].id + 1);
        const nuevoProducto = {...prod, id}
        this.productos.push(nuevoProducto)
        return('producto guardado')
    }

    actualizar(prod, id) {
        const posicion = this.productos.findIndex(e =>e.id == id )
        if(posicion >= 0){
        this.productos[posicion] = prod
        return('producto actualizado')
        }else{
            return({error:'producto no encontrado'})
        }
    }

    borrar(id) {
        const posicion = this.productos.findIndex(e =>e.id == id )
        if(posicion == -1){
            return({error: 'producto no encontrado'})
        }else{

          const productoEliminado = this.productos.splice(posicion, 1)
          return({producto:productoEliminado})
        }
    }
}





 module.exports = ContenedorArchivo