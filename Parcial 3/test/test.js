let   chai     = require('chai');
let   chaiHttp = require('chai-http');
const expect   = require('chai').expect;
chai.use(chaiHttp);const url= 'http://localhost:8082';
// Encapsular en test dentro de la funcion describe() Y describirmos el test
describe('Inserta un empleado: ',()=>{                       
    it('deberia insertar in empleado', (done) => {       
        // En la funcion it() lo que deberia hacer              
        chai.request(url)                                                   
        .get('/Leer/id/1')                       
        .send({ nombre:"Enrique", apPaterno:"Pena", apMaterno:"Nieto", edad:50, sueldo:5000 })                       
        .end( function(err,res){                                
            expect(res).to.have.status(200);                               
             expect(res.text).to.be.a('string');                                
             done();                           
            });      
        }); 
    });