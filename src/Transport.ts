/// <reference path="ISocket.interface.ts" />
/// <reference path="IServer.interface.ts" />


module Eureca {
    
    // Class
    export class Transport {
        private static transports: any = {};
        static register(name, clientScript:string, createClient: (uri: string, options?: any) => ISocket, createServer: (hook: any, options?: any) => IServer):boolean
        {
            if (this.transports[name] !== undefined) return false;

            this.transports[name] = {
                createClient: createClient,
                createServer: createServer,
                script:clientScript
            }
        }
        static get (name)
        {
            return this.transports[name];
        }
    }
}