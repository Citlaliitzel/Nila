let   chai     = require('chai');
let   chaiHttp = require('chai-http');
const expect   = require('chai').expect;
chai.use(chaiHttp);const url= 'http://localhost:8082';

describe('Obtiene un juego en especifico: ',()=>{
    it('Deberia obtener a un juego', (done) => {
        chai.request(url)
        .get('/juegos/1')
        .send()
        .end( function(err,res){
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            done();
        });
    });
});

describe('Obtiene todos los juegos',()=>{   
    it('Debe obtener todos los juegos', (done) => {
        chai.request(url)     
        .get('/juegos')
        .send()
        .end( function(err,res){
            expect(res).to.have.status(200);   
            expect(res).to.be.json;              
            done();
        });
    });
});

describe('Obtiene los juegos por categoria: ',()=>{
    it('Deberia obtener a todos los juegos que tengan la misma categoria', (done) => {
        chai.request(url)
        .get('/juegos/Categoria')
        .send()
        .end( function(err,res){
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            done();
        });
    });
});