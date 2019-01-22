


fetch("http://localhost:3000/entries") // Fetch from the API
    .then(entries => entries.json())  // Parse as JSON
    .then(parsedEntries => {
        console.table(parsedEntries)
        parsedEntries.forEach(entries => {
            const entriesAsHTML = makeJournalEntryComponent(entries)
            addEntrytoDOM(entriesAsHTML)
        })
    })



    const makeJournalEntryComponent = (entries) => {
        return `
        <article class="entryLog">
            <h3 class = "theDate">${entries.date}</h3>
            <h2 class = "theConceptscovered">Concepts Covered: ${entries.concept}</h2>
            <section class = "entryText">${entries.entry}</section>
            <h4 class = "dailyMood">Mood for the Day: ${entries.mood}</h4>
        </article>
         `
    }



    const addEntrytoDOM = entriesAsHTML => {
document.querySelector(".entryLog").innerHTML += entriesAsHTML}








