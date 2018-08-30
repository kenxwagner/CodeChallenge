using System;
using System.IO;

namespace kenFileReader
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            int counter = 0;
            string line;

            StreamReader file =
    new StreamReader(@"C:\Users\Ken\Documents\GitHub\CodeChallenge\FileReader\kenFileReader\filesToRead\TestFile.csv");
            while ((line = file.ReadLine()) != null)
            {
                char[] c = null;

                file.Read(c, 0, c.Length);
                Console.WriteLine(line);
                counter++;
            }

            file.Close();
            Console.WriteLine("There were {0} lines.", counter);
              
            Console.ReadLine();
        }
    }
}
//@"C:\Users\Ken\Documents\GitHub\CodeChallenge\FileReader\kenFileReader\filesToRead\TestFile.csv"