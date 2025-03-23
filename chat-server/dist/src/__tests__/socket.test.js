import { Server } from "socket.io";
import { createServer } from "http";
import { io as ClientIO } from "socket.io-client";
describe("WebSocket Integration Test", () => {
    let ioServer;
    let clientSocket;
    beforeAll((done) => {
        const httpServer = createServer();
        ioServer = new Server(httpServer);
        ioServer.on("connection", (socket) => {
            socket.on("sendMessage", (data) => {
                ioServer.emit("message", data);
            });
        });
        httpServer.listen(() => {
            const address = httpServer.address();
            clientSocket = ClientIO(`http://localhost:${address.port}`);
            clientSocket.on("connect", done);
        });
    });
    afterAll(() => {
        ioServer.close();
        clientSocket.close();
    });
    it("should broadcast received message to all clients", (done) => {
        const testMessage = { username: "Alice", content: "Hello World!" };
        clientSocket.emit("sendMessage", testMessage);
        clientSocket.on("message", (data) => {
            expect(data).toEqual(testMessage);
            done();
        });
    });
});
