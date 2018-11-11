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

    getTurnos(){
        return new Promise(resolve => {
            this.http.get('http://localhost:3000/turno').subscribe(data => {
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }

    getPaises(){
        return new Promise(resolve => {
            this.http.get('http://localhost:3000/pais').subscribe(data => {
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }

    getProvincias(/* idPais */){
        return new Promise(resolve => {
            this.http.get('http://localhost:3000/provincia'/* +idPais */).subscribe(data => {
                console.log("getprovincias(idpais) ",data);
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }

    getDepartamentos(){
        return new Promise(resolve => {
            this.http.get('http://localhost:3000/departamento').subscribe(data => {
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }

    getLocalidades(){
        return new Promise(resolve => {
            this.http.get('http://localhost:3000/localidad').subscribe(data => {
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }

    getUsuarios() {
        return new Promise(resolve => {
            this.http.get('http://localhost:3000/users').subscribe(data => {
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }

    getUsuario(usuario, clave) {
        return new Promise(resolve => {
            this.http.get('http://40.0.0.211:3000/loguin/' + usuario + '/' + clave).subscribe(data => {
                //Si data no tiene keys(usuario o clave incorrectas) devuelve null
                if (Object.keys(data).length <= 0) {
                    return null;
                }
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }

    guardarPreInscripcion(data) {
        return new Promise((resolve, reject) => {
            this.http.post('http://localhost:3000/preinscripcion', data)
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
            this.http.post('http://localhost:3000/users', data)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

}
