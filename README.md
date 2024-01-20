Repo mit Helfern für verschiedene andere Module, z.B. Build

# Enthaltene Helfer

## Build

Der Build-Helfer kümmert sich darum, die Dateien, die für eine Veröffentlichung benötigt werden zusammenkopieren und ggfs. noch weitere Optimierungsschritte zu unternehmen. Der Helfer ist in _/src/build/build.js_ zu finden und exportiert die Funktion _build_. Vor einem Build werden alle Dateien im Zielverzeichnis gelöscht.

### Verwendung

Um den Build-Helfer zu verwenden, muss ein eigenes Build-Skript definiert werden, welches dem Helfer die benötigten Dateien mitteilt.

#### Beispiel
````
import { build } from "./helper/src/build/build.js";

const PATHS = [
    "module.json",
    "style.css",
    "babele-register.js",
    "module.js",
    "audio",
    "compendium",
    "maps",
    "pictures",
    "packs",
    "helper/src/importer/adventure-importer.js"
];

build(PATHS);
````
In dem Beispiel muss mindestens der Wert für PATHS angepasst werden. Hier stehen alle benötigten Dateien. Bei angegebenen Ordnern werden auch alle Unterordner und -Dateien mitkopiert. Dabei werden JSON-Dateien standardmäßig minimiert, also Leerzeichen und Zeilenumbrüche entfernt, um die Größe zu reduzieren ohne Information zu verlieren. Selbstverständlich kann das eigene Build-Skript auch weitere individuelle Schritte beinhalten, welche über das Standardhandling hinaus gehen.

Es wird empfohlen, für den Build eine eigene js-Datei (z.B. _build.js_) anzulegen und diese via npm-Skript auszuführen. Dies kann durch eine Erweiterung (oder auch Erstellung) einer _package.json_ im Hauptverzeichnis des Moduls umgesetzt werden.
#### Beispiel
````
{
    "scripts": {
        "build": "node ./build.js"
    },
    "type": "module"
}
````

Dann kann über die Kommandozeile via _npm run build_ der Build gestartet werden.

### Parametrisierung
Durch die Erstellung und Anpassung einer _buildconfig.json_ im Hauptverzeichnis des Moduls können die Parameter des Builds angepasst werden und somit das Verhalten angepasst oder erweitert werden. Die Datei wird im JSON-Format abgespeichert. Sie beinhaltet ein JSON-Objekt, welches die Parameter beinhaltet.

#### Beispiel
````
{
    "buildPath": "C:\\Users\\MyUser\\AppData\\Local\\FoundryVTT\\Data\\modules\\pf2e-zda",
    "ignoreFolders": [ "packs" ]
}
````

### Allgemeine unterstützte Parameter

Name          | Standardwert | Beschreibung
------------- | ------------ | -----------------
buildPath     | "./build"    | Passt den Build-Pfad an, also die Position an die das fertige Modul kopiert werden soll. Achtung: Bei der Verwendung von \ im Pfad, also das Trennzeichen für Windows, muss dieses "escaped" werden und als doppelter Backslash eingetragen werden, siehe obiges Beispiel
ignoreFolders | []           | Hier kann eine Liste von Ordnern angegeben werden, welche nicht kopiert werden sollen, obwohl sie in dem Build-Skript als Pfad mit angegeben werden. Darüber hinaus werden diese Ordner beim Löschen der vorherigen Build-Daten auch übersprungen. So können beispielsweise Daten, die durch eine Ausführung von Foundry nicht gelöscht werden können und nicht Teil der aktuellen Anpassungen sind, einfach beim Build übersprungen werden. Achtung: Aktuell funktioniert dieser Parameter nur mit Top-Level-Ordnern, welche auch genau so als Parameter an das Build-Skript übergeben werden
createZip     | false        | Wird dieser Parameter auf _true_ gesetzt, so wird nach dem Build eine Zip-Dateien erstellt, welche den gesamten Inhalt des Build-Verzeichnis beinhaltet. Innerhalb der Zip-Datei werden die Dateien innerhalb eines Ordners gleich der Modul-ID (also _id_ aus der _module.json_ im Hauptverzeichnis) platziert. Die Datei hat als Namen ebenfalls die Modul-ID und wird im Buildverzeichnis platziert.

Einzelne Module können selbstverständlich eigene Parameter hinzufügen und in individuellen Build-Skripten verwenden.

### Weitere Parameter der Funktion _build_

Für mehr Individualisierung können der Funktion bis zu drei Parameter mitgegeben werden, _build(paths, buildPath, extraConverters)_. Der Parameter _paths_ beinhaltet, wie oben beschrieben, alle benötigten Pfade des Moduls und muss immer angegeben werden. Der zweite Parameter _buildPath_ überschreibt, falls er gesetzt ist, das Build-Verzeichnis und ignoriert in dem Fall auch eventuell gesetzte Parameter in der _buildconfig.json_. Der dritte Parameter _extraConverters_ bietet die Möglichkeit JSON-Dateien zusätzlich beim Build zu bearbeiten. Der Parameter beinhaltet ein Objekt, dessen Felder den Namen der JSON-Dateien entsprechen. Der Inhalt des Feldes ist dann eine Funktion, welche mit dem Inhalt der JSON-Datei ausgeführt wird.

#### Beispiel
````
// Überschreibe beim Build die Beschreibung in der module.json
const converters = {
    'module.json': (content) => {
        content.description = 'Meine neue Beschreibung';
    }
}

build(PATHS, undefined, converters);
````

## Build-Konfiguration

Dieser Helfer unterstützt dabei, die Modulkonfiguration oder JSON-Dateien allgemein auszulesen. Dies ist insbesondere bei der Erweiterung der Build-Funktionalität hilfreich. Er ist in _/src/build/config\_helper.js_ zu finden und exportiert zwei Funktionen:

- _readJSONFile(path)_: Liest die Datei an der Stelle _path_ an und konvertiert den beinhaltenden Text als JSON-Objekt
- _getConfigParameter(parameterName, defaultValue)_: Liest die _buildConfig.json_ aus und gibt den Wert mit dem Namen _parameterName_ zurück. Beinhaltet die Konfigurationsdatei nicht, wird der Standardwert _defaultValue_ zurückgegeben.