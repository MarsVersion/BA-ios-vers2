import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import CheckBox from 'expo-checkbox';
import styles from '../HomeScreenStyles';
import { LinearGradient } from 'expo-linear-gradient';

export default function BAND() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [conditions, setConditions] = useState({});
  const [bmiResult, setBmiResult] = useState('');
  const [therapyRecommendation, setTherapyRecommendation] = useState('');
  const [isPressed, setIsPressed] = useState(false);

  const calculateBMI = () => {
  const heightInMeters = parseFloat(height) / 100;
  const bmi = parseFloat(weight) / (heightInMeters * heightInMeters);

    let additionalPoints = Object.values(conditions).reduce(
      (sum, isChecked) => sum + (isChecked ? 5 : 0),
      0
    );

// Function to clear the results
  const clearResults = () => {
    setHeight('');
    setWeight('');
    setConditions({});
    setBmiResult('');
    setTherapyRecommendation('');
  };

  const toggleCondition = (value) => {
    setConditions((prevConditions) => ({
      ...prevConditions,
      [value]: !prevConditions[value],
    }));
  };

    let therapyRecommendationText = "";
    // Special case: Handle specific condition
    if (bmi >= 35 && bmi < 39.99 && additionalPoints >= 40) {
      therapyRecommendationText = (
        <View>
          <Text style={styles.strong}>Therapieempfehlung:</Text>
          <Text>{"\n\n"}Es besteht eine morbide Adipositas Grad 2 mit relevanten Begleitdiagnosen. Eine operative Therapie kommt in Frage. Es muss zunächst ein multimodaler Therapieversuch (MMK) über 6-12 Monate verfolgt werden.</Text>
        </View>
      );
    } else if (bmi >= 40 && bmi < 49.99 && additionalPoints >= 50) {
      therapyRecommendationText = (
        <View>
          <Text style={styles.strong}>Therapieempfehlung:</Text>
          <Text>
            {"\n\n"}
            Es besteht eine morbide Adipositas Grad 3 mit relevanten Begleitdiagnosen. Eine operative Therapie wird dringlich empfohlen (Primärtherapie). Es bedarf nur der vorbereitenden Maßnahmen.
            {"\n\n"}
          </Text>
          {renderTherapyList([
            "Beratung im Adipositaszentrum",
            "Ernährungsberatung, 2-3 Termine vor der Operation, weitere Termine postoperativ.",
            "Protokolliertes Bewegungstraining von 2-3 Stunden pro Woche, Bewegungseinheiten jeweils mindestens 30 Minuten.",
            "Psychologische Begutachtung zum Ausschluss von Kontraindikationen.",
            "Begleitende hausärztliche Maßnahmen, ggf. Empfehlung im Hinblick auf einen operativen Eingriff.",
            "Ausschluss endokriner Ursachen des Übergewichts mittels Bestimmung von TSH und Cortisol.",
            "Teilnahme an einer Selbsthilfegruppe, zum Bespiel der Online-SHG am Klinikum-Vest.",
            "Führen eines Ernährungstagebuchs über mindestens 2 Wochen.",
            "Ärztliche Atteste zum Beispiel Diabetologie, Orthopädie, Kardiologie, Gynäkologie, Lungenfacharzt, Schlafmedizin, ggf. Stellungnahmen im Hinblick auf einen bariatrischen Eingriff. Weitere Informationen dazu erhalten Sie beim Hausarzt.",
            "Operationseinwilligung wird zur Information frühzeitig mitgegeben, auf Komplikationsmöglichkeiten wird hingewiesen und Bereitschaft zur regelmäßigen Nachsorge muss bestehen. Die Einwilligung ist erforderlich vor dem Eingriff.",
            "Es wird eine Tendenz zur Gewichtsreduktion erwartet.",
            "Magenspiegelung",
          ])}
        </View>
      );
    } else if (bmi >= 40 && bmi < 49.99 && additionalPoints > 0 && additionalPoints + parseFloat(bmi) < 50) {
      therapyRecommendationText = (
        <View>
          <Text style={styles.strong}>Therapieempfehlung:</Text>
          <Text>
            {"\n\n"}
            Es besteht eine morbide Adipositas Grad 3 mit relevanten Begleitdiagnosen. Eine operative Therapie kommt in Frage. Es muss zunächst ein multimodaler Therapieversuch (MMK) über 6-12 Monate verfolgt werden.
            {"\n\n"}
          </Text>
          {renderTherapyList([
            "Beratung im Adipositaszentrum",
            "Ernährungsberatung, 5 Termine.",
            "Protokolliertes Bewegungstraining von 2-3 Stunden pro Woche, Bewegungseinheiten jeweils mindestens 30 Minuten.",
            "Psychologische Begutachtung zum Ausschluss von Kontraindikationen.",
            "Begleitende hausärztliche Maßnahmen, ggf. Empfehlung im Hinblick auf einen operativen Eingriff.",
            "Ausschluss endokriner Ursachen des Übergewichts mittels Bestimmung von TSH und Cortisol.",
            "Teilnahme an einer Selbsthilfegruppe, zum Bespiel der Online-SHG am Klinikum-Vest.",
            "Führen eines Ernährungstagebuchs über mindestens 2 Wochen.",
            "Ärztliche Atteste zum Beispiel Diabetologie, Orthopädie, Kardiologie, Gynäkologie, Lungenfacharzt, Schlafmedizin, ggf. Stellungnahmen im Hinblick auf einen bariatrischen Eingriff.",
            "Operationseinwilligung wird zur Information frühzeitig mitgegeben, auf Komplikationsmöglichkeiten wird hingewiesen und Bereitschaft zur regelmäßigen Nachsorge muss bestehen.",
            "Es wird eine Tendenz zur Gewichtsreduktion erwartet.",
            "Magenspiegelung",
          ])}
        </View>
      );
    } else if (bmi >= 40 && bmi < 49.99 && additionalPoints > 0 && additionalPoints + parseFloat(bmi) >= 50) {
      therapyRecommendationText = (
        <View>
          <Text style={styles.strong}>Therapieempfehlung:</Text>
          <Text>
            {"\n\n"}
            Es besteht eine morbide Adipositas Grad 3 mit relevanten Begleitdiagnosen. Eine operative Therapie wird dringlich empfohlen (Primärtherapie). Es bedarf nur der vorbereitenden Maßnahmen (verkürztes Programm).
            {"\n\n"}
          </Text>
          {renderTherapyList([
            "Beratung im Adipositaszentrum",
            "Ernährungsberatung, 2-3 Termine vor der Operation, weitere Termine postoperativ.",
            "Protokolliertes Bewegungstraining von 2-3 Stunden pro Woche, Bewegungseinheiten jeweils mindestens 30 Minuten.",
            "Psychologische Begutachtung zum Ausschluss von Kontraindikationen.",
            "Begleitende hausärztliche Maßnahmen, ggf. Empfehlung im Hinblick auf einen operativen Eingriff.",
            "Ausschluss endokriner Ursachen des Übergewichts mittels Bestimmung von TSH und Cortisol.",
            "Teilnahme an einer Selbsthilfegruppe, zum Bespiel der Online-SHG am Klinikum-Vest.",
            "Führen eines Ernährungstagebuchs über mindestens 2 Wochen.",
            "Ärztliche Atteste zum Beispiel Diabetologie, Orthopädie, Kardiologie, Gynäkologie, Lungenfacharzt, Schlafmedizin, ggf. Stellungnahmen im Hinblick auf einen bariatrischen Eingriff. Weitere Informationen dazu erhalten Sie beim Hausarzt.",
            "Operationseinwilligung wird zur Information frühzeitig mitgegeben, auf Komplikationsmöglichkeiten wird hingewiesen und Bereitschaft zur regelmäßigen Nachsorge muss bestehen. Die Einwilligung ist erforderlich vor dem Eingriff.",
            "Es wird eine Tendenz zur Gewichtsreduktion erwartet.",
            "Magenspiegelung",
          ])}
        </View>
      );
    } else if (bmi >= 40 && bmi < 49.99 && additionalPoints === 5) {
      therapyRecommendationText = (
        <View>
          <Text style={styles.strong}>Therapieempfehlung:</Text>
          <Text>
            {"\n\n"}
            Es besteht eine morbide Adipositas Grad 3 mit relevanten Begleitdiagnosen. Eine operative Therapie kommt in Frage. Es muss zunächst ein multimodaler Therapieversuch (MMK) über 6-12 Monate verfolgt werden.
            {"\n\n"}
          </Text>
          {renderTherapyList([
            "Beratung im Adipositaszentrum",
            "Ernährungsberatung, 5 Termine.",
            "Protokolliertes Bewegungstraining von 2-3 Stunden pro Woche, Bewegungseinheiten jeweils mindestens 30 Minuten.",
            "Psychologische Begutachtung zum Ausschluss von Kontraindikationen.",
            "Begleitende hausärztliche Maßnahmen, ggf. Empfehlung im Hinblick auf einen operativen Eingriff.",
            "Ausschluss endokriner Ursachen des Übergewichts mittels Bestimmung von TSH und Cortisol.",
            "Teilnahme an einer Selbsthilfegruppe, zum Bespiel der Online-SHG am Klinikum-Vest.",
            "Führen eines Ernährungstagebuchs über mindestens 2 Wochen.",
            "Ärztliche Atteste zum Beispiel Diabetologie, Orthopädie, Kardiologie, Gynäkologie, Lungenfacharzt, Schlafmedizin, ggf. Stellungnahmen im Hinblick auf einen bariatrischen Eingriff.",
            "Operationseinwilligung wird zur Information frühzeitig mitgegeben, auf Komplikationsmöglichkeiten wird hingewiesen und Bereitschaft zur regelmäßigen Nachsorge muss bestehen.",
            "Es wird eine Tendenz zur Gewichtsreduktion erwartet.",
            "Magenspiegelung",
          ])}
        </View>
      );
    } else {
      // Calls `getTherapyRecommendation` for any other cases that don't match the special conditions above
      therapyRecommendationText = getTherapyRecommendation(
        bmi,
        Object.values(conditions).some(Boolean),
        additionalPoints
      );
    }

    setBmiResult(`BMI: ${bmi.toFixed(2)}`);
    setTherapyRecommendation(therapyRecommendationText);
  };

   // Function to clear the results (MOVED OUTSIDE calculateBMI FUNCTION)
  const clearResults = () => {
    setHeight('');
    setWeight('');
    setConditions({});
    setBmiResult('');
    setTherapyRecommendation('');
  };

// Function to toggle the conditions
  const toggleCondition = (value) => {
    setConditions((prevConditions) => ({
      ...prevConditions,
      [value]: !prevConditions[value],
    }));
  };

  const renderTherapyList = (items) => {
  return (
    <View style={styles.listContainer}>
      {items.map((item, index) => (
        <View key={index} style={styles.listItemContainer}>
          <Text style={styles.listItemNumber}>{`${index + 1}. `}</Text>
          <Text style={styles.listItem}>{item}</Text>
        </View>
      ))}
    </View>
  );
};


  const getTherapyRecommendation = (
    bmi,
    hasNebendiagnoses,
    additionalPoints
  ) => {
    if (!hasNebendiagnoses) {
      // Cases without Nebendiagnosen
      if (bmi < 18.5) {
        return (
          <View>
            <Text style={styles.strong}>Therapieempfehlung:</Text>
            <Text>{"\n\n"}Das bedeutet Untergewicht.</Text>
          </View>
        );
      } else if (bmi >= 18.5 && bmi < 24.99) {
        return (
          <View>
            <Text style={styles.strong}>Therapieempfehlung:</Text>
            <Text>{"\n\n"}Das ist ein normaler Wert. Konservative Therapie oder keine Therapie.</Text>
          </View>
        );
      } else if (bmi >= 25 && bmi < 29.99) {
        return (
          <View>
            <Text style={styles.strong}>Therapieempfehlung:</Text>
            <Text>{"\n\n"}Es besteht keine dringende Therapieempfehlung basierend auf Ihrem BMI.</Text>
          </View>
        );
      } else if (bmi >= 30 && bmi < 34.99) {
        return (
          <View>
            <Text style={styles.strong}>Therapieempfehlung:</Text>
            <Text>{"\n\n"}Es besteht eine morbide Adipositas Grad 1. Eine operative Therapie wird nicht empfohlen.</Text>
          </View>
        );
      } else if (bmi >= 35 && bmi < 39.99) {
        return (
          <View>
            <Text style={styles.strong}>Therapieempfehlung:</Text>
            <Text>{"\n\n"}Es besteht eine morbide Adipositas Grad 2. Eine operative Therapie kommt regelhaft nicht in Frage.</Text>
          </View>
        );
      } else if (bmi >= 40 && bmi < 49.99) {
        return (
          <View>
            <Text style={styles.strong}>Therapieempfehlung:</Text>
            <Text>
              {"\n\n"}Es besteht eine morbide Adipositas Grad 3 ohne relevante Begleitdiagnosen. Eine operative Therapie kommt in Frage. Es muss zunächst ein multimodaler Therapieversuch (MMK) über 6-12 Monate verfolgt werden.
              {"\n\n"}
            </Text>
            {renderTherapyList([
              "Beratung im Adipositaszentrum",
              "Ernährungsberatung, 5 Termine.",
              "Protokolliertes Bewegungstraining von 2-3 Stunden pro Woche, Bewegungseinheiten jeweils mindestens 30 Minuten.",
              "Psychologische Begutachtung zum Ausschluss von Kontraindikationen.",
              "Begleitende hausärztliche Maßnahmen, ggf. Empfehlung im Hinblick auf einen operativen Eingriff.",
              "Ausschluss endokriner Ursachen des Übergewichts mittels Bestimmung von TSH und Cortisol.",
              "Teilnahme an einer Selbsthilfegruppe, zum Bespiel der Online-SHG am Klinikum-Vest.",
              "Führen eines Ernährungstagebuchs über mindestens 2 Wochen.",
              "Ärztliche Atteste zum Beispiel Diabetologie, Orthopädie, Kardiologie, Gynäkologie, Lungenfacharzt, Schlafmedizin, ggf. Stellungnahmen im Hinblick auf einen bariatrischen Eingriff.",
              "Operationseinwilligung wird zur Information frühzeitig mitgegeben, auf Komplikationsmöglichkeiten wird hingewiesen und Bereitschaft zur regelmäßigen Nachsorge muss bestehen.",
              "Es wird eine Tendenz zur Gewichtsreduktion erwartet.",
              "Magenspiegelung",
            ])}
          </View>
        );
      } else if (bmi >= 50 && bmi < 59.99) {
        return (
          <View>
        <Text>
  {"\n\n"}Es besteht eine morbide Adipositas Grad 3 mit einem BMI {'>='} 50 (Super-Obesitas). Eine operative Therapie wird dringlich empfohlen (Primärtherapie). Es bedarf nur der vorbereitenden Maßnahmen.
  {"\n\n"}
</Text>
            {renderTherapyList([
              "Beratung im Adipositaszentrum",
              "Ernährungsberatung, 2-3 Termine vor der Operation, weitere Termine postoperativ.",
              "Protokolliertes Bewegungstraining von 2-3 Stunden pro Woche, Bewegungseinheiten jeweils mindestens 30 Minuten.",
              "Psychologische Begutachtung zum Ausschluss von Kontraindikationen.",
              "Begleitende hausärztliche Maßnahmen, ggf. Empfehlung im Hinblick auf einen operativen Eingriff.",
              "Ausschluss endokriner Ursachen des Übergewichts mittels Bestimmung von TSH und Cortisol.",
              "Teilnahme an einer Selbsthilfegruppe, zum Bespiel der Online-SHG am Klinikum-Vest.",
              "Führen eines Ernährungstagebuchs über mindestens 2 Wochen.",
              "Ärztliche Atteste zum Beispiel Diabetologie, Orthopädie, Kardiologie, Gynäkologie, Lungenfacharzt, Schlafmedizin, ggf. Stellungnahmen im Hinblick auf einen bariatrischen Eingriff. Weitere Informationen dazu erhalten Sie beim Hausarzt.",
              "Operationseinwilligung wird zur Information frühzeitig mitgegeben, auf Komplikationsmöglichkeiten wird hingewiesen und Bereitschaft zur regelmäßigen Nachsorge muss bestehen. Die Einwilligung ist erforderlich vor dem Eingriff.",
              "Es wird eine Tendenz zur Gewichtsreduktion erwartet.",
              "Magenspiegelung",
            ])}
          </View>
        );
      } else if (bmi >= 60) {
        return (
          <View>
            <Text style={styles.strong}>Therapieempfehlung:</Text>
            <Text>
  {"\n\n"}Es besteht eine morbide Adipositas Grad 3 mit einem BMI {'>='}60 (Super-Super-Obesitas). Eine operative Therapie wird dringlich empfohlen (Primärtherapie). Es bedarf nur der vorbereitenden Maßnahmen.
  {"\n\n"}
</Text>

            {renderTherapyList([
              "Beratung im Adipositaszentrum",
              "Ernährungsberatung, 2-3 Termine vor der Operation, weitere Termine postoperativ.",
              "Protokolliertes Bewegungstraining von 2-3 Stunden pro Woche, Bewegungseinheiten jeweils mindestens 30 Minuten.",
              "Psychologische Begutachtung zum Ausschluss von Kontraindikationen.",
              "Begleitende hausärztliche Maßnahmen, ggf. Empfehlung im Hinblick auf einen operativen Eingriff.",
              "Ausschluss endokriner Ursachen des Übergewichts mittels Bestimmung von TSH und Cortisol.",
              "Teilnahme an einer Selbsthilfegruppe, zum Bespiel der Online-SHG am Klinikum-Vest.",
              "Führen eines Ernährungstagebuchs über mindestens 2 Wochen.",
              "Ärztliche Atteste zum Beispiel Diabetologie, Orthopädie, Kardiologie, Gynäkologie, Lungenfacharzt, Schlafmedizin, ggf. Stellungnahmen im Hinblick auf einen bariatrischen Eingriff. Weitere Informationen dazu erhalten Sie beim Hausarzt.",
              "Operationseinwilligung wird zur Information frühzeitig mitgegeben, auf Komplikationsmöglichkeiten wird hingewiesen und Bereitschaft zur regelmäßigen Nachsorge muss bestehen. Die Einwilligung ist erforderlich vor dem Eingriff.",
              "Es wird eine Tendenz zur Gewichtsreduktion erwartet.",
              "Magenspiegelung",
            ])}
          </View>
        );
      }
    } else {
      // Cases with Nebendiagnosen
      if (bmi >= 35 && bmi < 39.99 && additionalPoints >= 40) {
        return (
          <View>
            <Text style={styles.strong}>Therapieempfehlung:</Text>
            <Text>{"\n\n"}Es besteht eine morbide Adipositas Grad 2 mit relevanten Begleitdiagnosen. Eine operative Therapie kommt in Frage. Es muss zunächst ein multimodaler Therapieversuch (MMK) über 6-12 Monate verfolgt werden.</Text>
          </View>
        );
      } else if (bmi >= 25 && bmi < 29.99) {
        return (
          <View>
            <Text style={styles.strong}>Therapieempfehlung:</Text>
            <Text>{"\n\n"}Es besteht keine dringende Therapieempfehlung basierend auf Ihrem BMI.</Text>
          </View>
        );
      } else if (bmi >= 30 && bmi < 34.99) {
        return (
          <View>
            <Text style={styles.strong}>Therapieempfehlung:</Text>
            <Text>{"\n\n"}Es besteht eine morbide Adipositas Grad 1. Eine operative Therapie wird nicht empfohlen.</Text>
          </View>
        );
      } else if (bmi >= 35 && bmi < 39.99) {
        return (
          <View>
            <Text style={styles.strong}>Therapieempfehlung:</Text>
            <Text>
              {"\n\n"}Es besteht eine morbide Adipositas Grad 2 mit relevanten Begleitdiagnosen. Eine operative Therapie kommt in Frage. Es muss zunächst ein multimodaler Therapieversuch (MMK) über 6-12 Monate verfolgt werden.
              {"\n\n"}
            </Text>
            {renderTherapyList([
              "Beratung im Adipositaszentrum",
              "Ernährungsberatung, 5 Termine.",
              "Protokolliertes Bewegungstraining von 2-3 Stunden pro Woche, Bewegungseinheiten jeweils mindestens 30 Minuten.",
              "Psychologische Begutachtung zum Ausschluss von Kontraindikationen.",
              "Begleitende hausärztliche Maßnahmen, ggf. Empfehlung im Hinblick auf einen operativen Eingriff.",
              "Ausschluss endokriner Ursachen des Übergewichts mittels Bestimmung von TSH und Cortisol.",
              "Teilnahme an einer Selbsthilfegruppe, zum Bespiel der Online-SHG am Klinikum-Vest.",
              "Führen eines Ernährungstagebuchs über mindestens 2 Wochen.",
              "Ärztliche Atteste zum Beispiel Diabetologie, Orthopädie, Kardiologie, Gynäkologie, Lungenfacharzt, Schlafmedizin, ggf. Stellungnahmen im Hinblick auf einen bariatrischen Eingriff.",
              "Operationseinwilligung wird zur Information frühzeitig mitgegeben, auf Komplikationsmöglichkeiten wird hingewiesen und Bereitschaft zur regelmäßigen Nachsorge muss bestehen.",
              "Es wird eine Tendenz zur Gewichtsreduktion erwartet.",
              "Magenspiegelung",
            ])}
          </View>
        );
      } else if (bmi >= 40 && bmi < 49.99 && additionalPoints > 0 && additionalPoints + parseFloat(bmi) < 50) {
        return (
          <View>
            <Text style={styles.strong}>Therapieempfehlung:</Text>
            <Text>
              {"\n\n"}Es besteht eine morbide Adipositas Grad 3 mit relevanten Begleitdiagnosen. Eine operative Therapie kommt in Frage. Es muss zunächst ein multimodaler Therapieversuch (MMK) über 6-12 Monate verfolgt werden.
              {"\n\n"}
            </Text>
            {renderTherapyList([
              "Beratung im Adipositaszentrum",
              "Ernährungsberatung, 5 Termine.",
              "Protokolliertes Bewegungstraining von 2-3 Stunden pro Woche, Bewegungseinheiten jeweils mindestens 30 Minuten.",
              "Psychologische Begutachtung zum Ausschluss von Kontraindikationen.",
              "Begleitende hausärztliche Maßnahmen, ggf. Empfehlung im Hinblick auf einen operativen Eingriff.",
              "Ausschluss endokriner Ursachen des Übergewichts mittels Bestimmung von TSH und Cortisol.",
              "Teilnahme an einer Selbsthilfegruppe, zum Bespiel der Online-SHG am Klinikum-Vest.",
              "Führen eines Ernährungstagebuchs über mindestens 2 Wochen.",
              "Ärztliche Atteste zum Beispiel Diabetologie, Orthopädie, Kardiologie, Gynäkologie, Lungenfacharzt, Schlafmedizin, ggf. Stellungnahmen im Hinblick auf einen bariatrischen Eingriff.",
              "Operationseinwilligung wird zur Information frühzeitig mitgegeben, auf Komplikationsmöglichkeiten wird hingewiesen und Bereitschaft zur regelmäßigen Nachsorge muss bestehen.",
              "Es wird eine Tendenz zur Gewichtsreduktion erwartet.",
              "Magenspiegelung",
            ])}
          </View>
        );
      } else if (bmi >= 40 && bmi < 49.99 && additionalPoints > 0 && additionalPoints + parseFloat(bmi) >= 50) {
        return (
          <View>
            <Text style={styles.strong}>Therapieempfehlung:</Text>
            <Text>
              {"\n\n"}Es besteht eine morbide Adipositas Grad 3 mit relevanten Begleitdiagnosen. Eine operative Therapie wird dringlich empfohlen (Primärtherapie). Es bedarf nur der vorbereitenden Maßnahmen.
              {"\n\n"}
            </Text>
            {renderTherapyList([
              "Beratung im Adipositaszentrum",
              "Ernährungsberatung, 2-3 Termine vor der Operation, weitere Termine postoperativ.",
              "Protokolliertes Bewegungstraining von 2-3 Stunden pro Woche, Bewegungseinheiten jeweils mindestens 30 Minuten.",
              "Psychologische Begutachtung zum Ausschluss von Kontraindikationen.",
              "Begleitende hausärztliche Maßnahmen, ggf. Empfehlung im Hinblick auf einen operativen Eingriff.",
              "Ausschluss endokriner Ursachen des Übergewichts mittels Bestimmung von TSH und Cortisol.",
              "Teilnahme an einer Selbsthilfegruppe, zum Bespiel der Online-SHG am Klinikum-Vest.",
              "Führen eines Ernährungstagebuchs über mindestens 2 Wochen.",
              "Ärztliche Atteste zum Beispiel Diabetologie, Orthopädie, Kardiologie, Gynäkologie, Lungenfacharzt, Schlafmedizin, ggf. Stellungnahmen im Hinblick auf einen bariatrischen Eingriff. Weitere Informationen dazu erhalten Sie beim Hausarzt.",
              "Operationseinwilligung wird zur Information frühzeitig mitgegeben, auf Komplikationsmöglichkeiten wird hingewiesen und Bereitschaft zur regelmäßigen Nachsorge muss bestehen. Die Einwilligung ist erforderlich vor dem Eingriff.",
              "Es wird eine Tendenz zur Gewichtsreduktion erwartet.",
              "Magenspiegelung",
            ])}
          </View>
        );
      } else if (bmi >= 50 && bmi < 59.99) {
        return (
          <View>
            <Text style={styles.strong}>Therapieempfehlung:</Text>
            <Text>
  {"\n\n"}Es besteht eine morbide Adipositas Grad 3 mit einem BMI {'>='}50 (Super-Obesitas). Eine operative Therapie wird dringlich empfohlen (Primärtherapie). Es bedarf nur der vorbereitenden Maßnahmen.
  {"\n\n"}
</Text>

            {renderTherapyList([
              "Beratung im Adipositaszentrum",
              "Ernährungsberatung, 2-3 Termine vor der Operation, weitere Termine postoperativ.",
              "Protokolliertes Bewegungstraining von 2-3 Stunden pro Woche, Bewegungseinheiten jeweils mindestens 30 Minuten.",
              "Psychologische Begutachtung zum Ausschluss von Kontraindikationen.",
              "Begleitende hausärztliche Maßnahmen, ggf. Empfehlung im Hinblick auf einen operativen Eingriff.",
              "Ausschluss endokriner Ursachen des Übergewichts mittels Bestimmung von TSH und Cortisol.",
              "Teilnahme an einer Selbsthilfegruppe, zum Bespiel der Online-SHG am Klinikum-Vest.",
              "Führen eines Ernährungstagebuchs über mindestens 2 Wochen.",
              "Ärztliche Atteste zum Beispiel Diabetologie, Orthopädie, Kardiologie, Gynäkologie, Lungenfacharzt, Schlafmedizin, ggf. Stellungnahmen im Hinblick auf einen bariatrischen Eingriff. Weitere Informationen dazu erhalten Sie beim Hausarzt.",
              "Operationseinwilligung wird zur Information frühzeitig mitgegeben, auf Komplikationsmöglichkeiten wird hingewiesen und Bereitschaft zur regelmäßigen Nachsorge muss bestehen. Die Einwilligung ist erforderlich vor dem Eingriff.",
              "Es wird eine Tendenz zur Gewichtsreduktion erwartet.",
              "Magenspiegelung",
            ])}
          </View>
        );
      } else if (bmi >= 60) {
        return (
          <View>
            <Text style={styles.strong}>Therapieempfehlung:</Text>
            <Text>
  {"\n\n"}Es besteht eine morbide Adipositas Grad 3 mit einem BMI {'>='}60 (Super-Super-Obesitas). Eine operative Therapie wird dringlich empfohlen (Primärtherapie). Es bedarf nur der vorbereitenden Maßnahmen.
  {"\n\n"}
</Text>
            {renderTherapyList([
              "Beratung im Adipositaszentrum",
              "Ernährungsberatung, 2-3 Termine vor der Operation, weitere Termine postoperativ.",
              "Protokolliertes Bewegungstraining von 2-3 Stunden pro Woche, Bewegungseinheiten jeweils mindestens 30 Minuten.",
              "Psychologische Begutachtung zum Ausschluss von Kontraindikationen.",
              "Begleitende hausärztliche Maßnahmen, ggf. Empfehlung im Hinblick auf einen operativen Eingriff.",
              "Ausschluss endokriner Ursachen des Übergewichts mittels Bestimmung von TSH und Cortisol.",
              "Teilnahme an einer Selbsthilfegruppe, zum Bespiel der Online-SHG am Klinikum-Vest.",
              "Führen eines Ernährungstagebuchs über mindestens 2 Wochen.",
              "Ärztliche Atteste zum Beispiel Diabetologie, Orthopädie, Kardiologie, Gynäkologie, Lungenfacharzt, Schlafmedizin, ggf. Stellungnahmen im Hinblick auf einen bariatrischen Eingriff. Weitere Informationen dazu erhalten Sie beim Hausarzt.",
              "Operationseinwilligung wird zur Information frühzeitig mitgegeben, auf Komplikationsmöglichkeiten wird hingewiesen und Bereitschaft zur regelmäßigen Nachsorge muss bestehen. Die Einwilligung ist erforderlich vor dem Eingriff.",
              "Es wird eine Tendenz zur Gewichtsreduktion erwartet.",
              "Magenspiegelung",
            ])}
          </View>
        );
      }
    }

    // Default case if no conditions are met
    return (
      <View>
        <Text style={styles.strong}>Therapieempfehlung:</Text>
        <Text>{"\n\n"}Es besteht keine dringende Therapieempfehlung basierend auf Ihrem BMI.</Text>
      </View>
    );
  };

return (
  <SafeAreaView style={{ flex: 1 }}>
  <LinearGradient colors={['#460101', 'rgb(175, 4, 4)']} style={styles.container}>
    <ScrollView contentContainerStyle={[styles.container, { flexGrow: 1 }]}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Bariatric Assistant</Text>
      </View>

      <View style={styles.form}>
        {/* Height Input */}
        <Text style={styles.label}>Größe (cm):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={height}
          onChangeText={setHeight}
          accessible={true}
          accessibilityLabel="Geben Sie Ihre Größe in Zentimetern ein"
          accessibilityHint="Zum Bearbeiten tippen Sie hier und geben Sie Ihre Körpergröße in Zentimetern ein."
          accessibilityRole="text"
          importantForAccessibility="yes"
        />

        {/* Weight Input */}
        <Text style={styles.label}>Gewicht (kg):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={weight}
          onChangeText={setWeight}
          accessible={true}
          accessibilityLabel="Geben Sie Ihr Gewicht in Kilogramm ein"
          accessibilityHint="Zum Bearbeiten tippen Sie hier und geben Sie Ihr Gewicht in Kilogramm ein."
          accessibilityRole="text"
          importantForAccessibility="yes"
        />

          <Text style={styles.legend}>Nebendiagnosen</Text>
          {[
            { label: "Diabetes", value: "diabetes" },
            { label: "OSAS (Schlafapnoe)", value: "osas" },
            { label: "COPD", value: "copd" },
            { label: "Bluthochdruck", value: "bluthochdruck" },
            { label: "Gelenkersatz (Hüfte/Knie)", value: "gelenkersatz" },
            { label: "Wirbelsäulen OP", value: "wirbelsaeulen_op" },
            { label: "Immobilität", value: "immobilitaet" },
            { label: "Fibromyalgie", value: "fibromyalgie" },
            { label: "Fettleber", value: "fettleber" },
            { label: "Herzerkrankung", value: "herzerkrankung" },
            { label: "Sonstige", value: "sonstige" },
          ].map((condition) => (
            <TouchableOpacity
             key={condition.value}
  style={styles.checkboxContainer}
  onPress={() => toggleCondition(condition.value)}
  accessible={true}
  accessibilityLabel={`Wählen Sie ${condition.label} aus`}
  accessibilityHint={`Aktueller Status: ${conditions[condition.value] ? 'ausgewählt' : 'nicht ausgewählt'}. Tippen Sie, um zu ändern.`}
  accessibilityRole="checkbox"
  accessibilityState={{ checked: !!conditions[condition.value] }}
>
              <CheckBox
                value={!!conditions[condition.value]}
                onValueChange={() => toggleCondition(condition.value)}
                color="white"
                style={{ marginRight: 10 }}
                accessible={false} // Prevent redundancy by making the checkbox itself non-accessible
              />
              <Text style={styles.checkboxLabel}>{condition.label}</Text>
            </TouchableOpacity>
          ))}

          {/* Button for BMI Calculation */}
          <TouchableOpacity
            style={[
              styles.customButton,
              isPressed ? styles.customButtonPressed : null,
              { minHeight: 64, minWidth: 64, paddingHorizontal: 28, marginVertical: 10 }
            ]}
            onPress={calculateBMI}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
            accessible={true}
            accessibilityRole="button"
            accessibilityLabel="Berechne den Body-Mass-Index und zeige Therapieempfehlungen an"
            accessibilityHint="Nach dem Berechnen des BMI wird eine Therapieempfehlung angezeigt."
            importantForAccessibility="yes"
          >
            <Text style={[styles.customButtonText, isPressed ? styles.customButtonTextPressed : null]}>
              BMI + Therapieempfehlungen
            </Text>
          </TouchableOpacity>

          {/* Clear Button */}
          <TouchableOpacity
            style={[
              styles.customButton,
              { minHeight: 64, minWidth: 64, paddingHorizontal: 28, marginVertical: 10 }
            ]}
            onPress={clearResults}
            accessible={true}
            accessibilityRole="button"
            accessibilityLabel="Lösche alle eingegebenen Daten"
            accessibilityHint="Alle eingegebenen Informationen werden gelöscht."
            importantForAccessibility="yes"
          >
            <Text style={styles.customButtonText}>Löschen</Text>
          </TouchableOpacity>

          {bmiResult !== '' && (
            <View
              style={[styles.resultContainer, { maxHeight: 500, marginTop: 20 }]}
              accessible={true}
              accessibilityLabel={`Ihr berechneter Body-Mass-Index ist ${bmiResult}`}
              accessibilityHint="Nachfolgend sind die Therapieempfehlungen basierend auf Ihrem BMI."
            >
              <ScrollView contentContainerStyle={{ flexGrow: 1 }} nestedScrollEnabled={true}>
                <Text style={{ fontWeight: "bold", marginBottom: 10 }}>{bmiResult}</Text>
                <View style={{ marginBottom: 10 }}>{therapyRecommendation}</View>
              </ScrollView>
            </View>
          )}
        </View>
      </ScrollView>
    </LinearGradient>
  </SafeAreaView>
);

}