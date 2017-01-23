using System;
using System.Threading;
public class Program
{
    public static void Main(string[] args)
    {
        int n = int.Parse(Console.ReadLine());
        Rebel rebel = new Rebel();
        rebel.data = "Death star plans";
        rebel.recipient = n;
        Rogue runner = new Rogue();
        runner.Run(rebel, n);
    }
}

public class Rogue
{
    private Rebel rebel;

    public void Run(Rebel rebel, int n)
    {
        this.rebel = rebel;
        for (int i = 1; i <= n; i++)
        {
            Thread thread = new Thread(Func); 
            thread.Start(i);
        }
        
    }

    private void Func(object data)
    {
        lock (rebel)
        {
            int threadNum = (int)data;
            Console.WriteLine("thread #{0}", threadNum);
            if (rebel.recipient == threadNum) {
                Console.WriteLine("{0} received", rebel.data);
            }
        }
    }
}

public class Rebel
{
    public string data;
    public int recipient;
}