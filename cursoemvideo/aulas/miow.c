#include <stdio.h>


void miow(void); // Prototy
int main(void)
{
    for (int i = 0; i < 5; i ++ )
{
    miow();
}
}

// por convenção, as funções personalizadas são inseridas no final do código. Par nao ter erro, ja que a execucão é feita de cima para baixo, é inserir uma linha chamada protótipo no inicio do programa.
void miow(void)
{
    printf("Miow! \n");
}
    