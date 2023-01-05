 #include <stdio.h>
//#include <cs50.h>

 int main(void)
 
 
 {
   long a = 4003600000000014;
   int sum = 0;
   int counter = 0;
   int counter2 =0;
   int pemult = 0;
   int pesum = 0;
   int res = 0;
   
   while (a > 0)
   {
     printf("%li - ", a%10);
     sum += a%10;
     counter += 1;
     
     if((counter%2) == 0)
     {
       res = ((a%10) * 2);
       pemult += res;
     
       if(res >= 10)
       {
       pesum += ((res%10) +1); 
       }else
       {
        pesum += res;
       }
     }else
     {
        counter2 += a%10;
     }
     a = a/10;
   }
   printf("\n%i - A soma dos digitos do cartão.  \n", sum);
   printf("%i - A quantidade de digitos. \n", counter);
   printf("%i - A soma da multiplicação de cada segundo digito por 2, começando com o penúltimo. \n", pemult);
   printf("%i - A soma dos digitos dos numeros acima.  \n", pesum);
   printf("%i - Adicionando a soma acima com a soma dos digitos que não foram multiplicados por 2. \n", pesum + counter2);
 }