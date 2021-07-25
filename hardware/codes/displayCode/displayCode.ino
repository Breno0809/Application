#include <LiquidCrystal.h>

LiquidCrystal displayLCD(2, 3, 4, 6, 7, 8, 9);

int efect = 2, contrast = 0;
boolean canIncrease = true;

String userBPM = "87.9";
String userOxygen = "92.7";

void setup() {
  // put your setup code here, to run once:
  pinMode(5, OUTPUT);
  analogWrite(5, 0);

  // CRIAR CARACTERES
  displayLCD.createChar(0, smiley);    // Cria um caracter nos espaços vazios
  displayLCD.createChar(1, next);
  displayLCD.createChar(2, bell);

  displayLCD.begin(16, 2);

  displayLCD.setCursor(0, 0);
  displayLCD.print("SpO2: " + userOxygen);
  displayLCD.setCursor(11, 0);
  displayLCD.print("%");

  displayLCD.setCursor(1, 1);
  displayLCD.print("BPM: " + userBPM);
  displayLCD.setCursor(11, 1);
  displayLCD.print("bpm");

  //  displayLCD.setCursor(12, 0);
  //  displayLCD.write(byte(0));
  //  displayLCD.setCursor(0, 1);
  //  displayLCD.write(byte(2));

  // LISTA DE COMANDOS BÁSICOS
  // displayLCD.setCursor(x, y);  // Posiciona o cursor na posição (x, y)
  // displayLCD.home();           // Coloca o cursor na posição principal (0, 0)
  // displayLCD.cursor();         // Exibe a posição do cursor
  // displayLCD.blink();          // Deixa o cursor piscando
  // displayLCD.clear();          // Limpa a Tela

  // TESTE DA TABELA DE CARACTERES
  // displayLCD.setCursor(13, 1);
  // displayLCD.write('3');       // Exibe na tela o caracter '3'
  // displayLCD.write(byte(188)); // Exibe na tela o caracter na posição byte(x)

}

void loop() {
  // put your main code here, to run repeatedly:

  if (efect == 0) {
    // Mantem o display ligado
    pinMode(5, OUTPUT);
    analogWrite(5, 120);
  }

  if (efect == 1) {
    // Mantem o display piscando através do contrast
    analogWrite(5, contrast);
    delay(20);

    if (canIncrease)contrast++;
    else            contrast--;

    if (contrast == 150)canIncrease = false;

    if (contrast == 0)canIncrease = true;
  }

  if (efect == 2) {
    // Mantem o display piscando através das funções noDisplay(); e display();
    displayLCD.noDisplay(); // noDisplay(); serve para ocultar os dados na tela
    delay(750);
    displayLCD.display();   // display(); serve para exibir os dados na tela
    delay(1500);
  }

  if (efect == 3) {
    displayLCD.scrollDisplayLeft(); // Rola o Texto para a Esquerda
    delay(350);
  }

  if (efect == 4) {
    displayLCD.scrollDisplayRight(); // Rola o Texto para a Esquerda
    delay(750);
  }

}