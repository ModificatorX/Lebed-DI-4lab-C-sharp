using System;
using System.Text;
using System.Threading;


class Program
{
  const int n = 20;
  static int c = 0;
  static void Threading(int i, Token t)
  {
    if (i<n)
    {
      Console.WriteLine(i+ " thread initialized");
      Thread thread = new Thread(() => Threading(i + 1, t));
      thread.Start();
      Thread.Sleep(n);
      if (t.Recipient == i)
      {
        Console.WriteLine(t.Data + " received in " + i + " thread");
        c=1;
      }
    }
  }
  static void Main(string[] args)
  {
    Console.WriteLine("vvedite celevoi potok");
    int k=int.Parse(Console.ReadLine());
    Token token=new Token(){Recipient = k, Data = "data"};
    Thread thread = new Thread(() => { Threading(1, token); });
    thread.Start();
    Thread.Sleep(n*2+1);
    if (c==0){Console.WriteLine("Povorot ne tuda");}
  }
}
public class Token
{
  public string Data;
  public int Recipient; 
 
}
