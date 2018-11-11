import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestApiProvider {

    constructor(public http: HttpClient) {
        console.log('Hello RestApiProvider Provider');
    }

    getUsuarios() {
        return new Promise(resolve => {
            //this.http.get('http://portalandresito.gov.ar:50000/users').subscribe(data => {
                this.http.get('educaciondigitalmisiones.com:50000').subscribe(data => {
                resolve(data);
                console.log(data);
            }, err => {
                console.log(err);
            });
        });
    }
    
    getUsuario(usuario, clave) {
        return new Promise(resolve => {
            this.http.get('http://educaciondigitalmisiones.com:50000/loguin/' + usuario + '/' + clave).subscribe(data => {
            //this.http.get('http://portalandresito.gov.ar:50000/loguin/' + usuario + '/' + clave).subscribe(data => {
                //Si data no tiene keys(usuario o clave incorrectas) devuelve null
                if (Object.keys(data).length <= 0) {
                    return null;
                }
                resolve(data);
                console.log(data);
            }, err => {
                console.log(err);
            });
        });
    }
    getTurnos(){
        return new Promise(resolve => {
            this.http.get('http://educaciondigitalmisiones.com:50000/turno').subscribe(data => {
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }

    getPaises(){
        return new Promise(resolve => {
            this.http.get('http://educaciondigitalmisiones.com:50000/pais').subscribe(data => {
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }

    getProvincias(/* idPais */){
        return new Promise(resolve => {
            this.http.get('educaciondigitalmisiones.com:50000/provincia'/* +idPais */).subscribe(data => {
                console.log("getprovincias(idpais) ",data);
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }

    getDepartamentos(){
        return new Promise(resolve => {
            this.http.get('educaciondigitalmisiones.com:50000/departamento').subscribe(data => {
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }

    getLocalidades(){
        return new Promise(resolve => {
            this.http.get('educaciondigitalmisiones.com:50000/localidad').subscribe(data => {
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }

    guardarPreInscripcion(data) {
        return new Promise((resolve, reject) => {
            this.http.post('educaciondigitalmisiones.com:50000/preinscripcion', data)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    registrarUsuario(data){
        console.log(data);
        return new Promise((resolve, reject) => {
            this.http.post('educaciondigitalmisiones.com:50000/users', data)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

   

}
