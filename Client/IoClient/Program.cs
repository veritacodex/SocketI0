using System;
using System.Threading.Tasks;

namespace IoClient;

class Program
{
    static async Task Main()
    {
        var client = new SocketIOClient.SocketIO("http://localhost:3001"); ;
        client.OnConnected += async (sender, e) =>
        {
            Console.WriteLine("connected to server");
            await client.EmitAsync("message", "hi from .net client");
        };

        await client.ConnectAsync();
        Console.ReadLine();
    }
}
