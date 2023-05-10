import {
    SubscribeMessage,
    WebSocketGateway,
    WsResponse,
    WebSocketServer,
    OnGatewayConnection,
    OnGatewayDisconnect,
    OnGatewayInit
} from '@nestjs/websockets';

@WebSocketGateway({ port: process.env.WEB_SOCKET_PORT, transports: ['websocket'] })
export class WebSocketEventGateway implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit {
    @WebSocketServer() private server: any;
    wsClients = [];

    afterInit(server: any) {
        this.server.emit('server initilized');
    }

    handleDisconnect(client: any) {
        for (let i = 0; i < this.wsClients.length; i++) {
            if (this.wsClients[i] === client) {
                this.wsClients.splice(i, 1);
                break;
            }
        }
    }

    public broadcastMessage(message: any) {
        const messageToSend = JSON.stringify(message);
        for (let c of this.wsClients) {
            c.send('message', messageToSend);
        }
    }

    handleConnection(client: any, ...args: any[]) {
        this.wsClients.push(client);
    }

}  