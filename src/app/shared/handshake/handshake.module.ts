import {APP_INITIALIZER, NgModule, Provider} from "@angular/core";
import {HttpClient} from "@angular/common/http";

function initHandshake(httpClient: HttpClient) {
    return () => {
        new Promise((resolve, reject) => {

            httpClient.get('http://localhost:4200/backend/handshake').subscribe({
                next: () => {
                    console.error('handshake successfull');

                   /* httpClient.get('http://localhost:4200/backend/call').subscribe({
                        next: () => {
                            resolve(true);
                        },
                        error: () => {
                            reject(false);
                        }
                    })*/
                    resolve(true);

                },
                error: () => {
                    reject(true);
                }
            });
        })
    }
}

export const INIT_HANSHAKE: Provider = {
    provide: APP_INITIALIZER,
    useFactory: initHandshake,
    deps: [ HttpClient ],
    multi: true,
};


@NgModule({
    providers: [INIT_HANSHAKE]
})
export class HandshakeModule {}