import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestApiProvider {
    // direccionurl = 'http://localhost:3000';
    direccionurl = 'http://educaciondigitalmisiones.com:50000';
    constructor(public http: HttpClient) {
        console.log('Hello RestApiProvider Provider');
    }

    getUsuarios() {
        return new Promise(resolve => {
            this.http.get(this.direccionurl).subscribe(data => {
                resolve(data);
                console.log(data);
            }, err => {
                console.log(err);
            });
        });
    }
    
    getUsuario(usuario, clave) {
        return new Promise(resolve => {
            this.http.get(this.direccionurl + '/loguin/' + usuario + '/' + clave).subscribe(data => {
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
            this.http.get(this.direccionurl + '/turno').subscribe(data => {
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }

    getPaises(){
        return new Promise(resolve => {
            this.http.get(this.direccionurl + '/pais').subscribe(data => {
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }

    getProvincias(/* idPais */){
        return new Promise(resolve => {
            this.http.get(this.direccionurl + '/provincia'/* +idPais */).subscribe(data => {
                console.log("getprovincias(idpais) ",data);
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }

    getDepartamentos(){
        return new Promise(resolve => {
            this.http.get(this.direccionurl + '/departamento').subscribe(data => {
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }

    getLocalidades(){
        return new Promise(resolve => {
            this.http.get(this.direccionurl + '/localidad').subscribe(data => {
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }

    guardarPreInscripcion(data) {
        return new Promise((resolve, reject) => {
            this.http.post(this.direccionurl + '/preinscripcion', data)
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
            this.http.post(this.direccionurl + '/users', data)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

   

}
