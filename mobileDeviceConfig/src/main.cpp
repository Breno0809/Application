#include <Arduino.h>
#include <Wire.h>
// #include "MAX30100_PulseOximeter.h"

#define LED_BUILTIN 2
#define reportingPeriodMs 1000
// PulseOximeter pox;

void setup()
{
  pinMode(LED_BUILTIN, OUTPUT);
  // digitalWrite(LED_BUILTIN, LOW);
}

void loop()
{
  digitalWrite(LED_BUILTIN, HIGH);
  delay(2000);
  digitalWrite(LED_BUILTIN, LOW);
  delay(2000);
}