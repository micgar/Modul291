<!--
Aufgabe: Ausgabe von Studenten-Daten
Erstellen Sie eine computed Data-Property ...
a. student(), welche den Vor- und Nachnamen des Studenten ausgibt.
b. anzahlModule(), welche die Anzahl der Module des Studenten ausgibt.
b. durchschnittModule(), welche den arithmetischen Durchschnitt aller abgeschlossener Module des Studenten ausgibt.
-->
<template>
  <div class="container">
    <h3> Bitte überprüfen sie, ob ihre Daten korrekt sind.</h3>
      <p>{{ fullName }}</p>
      <p>{{ totalPosts }}</p>
      <p>{{ featuredPosts }}</p>

    <p></p>
    <!-- b.-->
    <p></p>
    <!-- c.-->
    <p></p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      schule: {
        beruf: {
          id: "Mediamatiker",
          jahre: 4,
          abschluss: "EFZ"
        },
        student: {
          name: {
            vorname: 'Hans',
            nachname: 'Muster'
          },
          module: [
            {
              M286: "Eigene ICT-Arbeitsinstrumente einrichten und bedienen",
              Note: 4.5,
              Semester: 1,
              abgeschlossen: true
            }, {
              M287: "Websites mit CSS gestalten",
              Note: 5,
              Semester: 2,
              abgeschlossen: true
            }, {
              M288: "Programmiertechniken im Webfrontend einsetzen",
              Note: 0,
              Semester: 3,
              abgeschlossen: false
            }
          ]
        }
      }
    }
  },
  computed: {
    fullName() {
      // Return string
      return this.student.name.vorname + ' '
          + this.student.name.nachname;
    },
    totalPosts() {
      // Return number
      return this.schule.module.entries.length
    },
    featuredPosts() {
      // Return string
      return this.post.fields.entries.filter(entry => {
        // If featured is true, return the entry title
        if (entry.featured) {
          return entry
        }
      })
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  padding: 30px;
  max-width: 600px;
}

input {
  padding: 10px 6px;
  margin: 20px 10px 10px 0;
}

.output {
  font-size: 16px;
  color: red;
}
</style>
