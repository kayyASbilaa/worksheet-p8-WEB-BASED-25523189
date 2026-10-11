
const profile = {
    name: "Faizah Nabila Azzahra",
    studentId: "25523189",
    year: 2026,
    role: "Informatics Student",
    skills: ["HTML5", "CSS3", "JavaScript ES6+", "DOM Manipulation"]
};

const bookCollection = [
    { id: 1, title: "Atomic Habits", author: "James Clear", genre: "Self-Development", status: "Completed" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic Fiction", status: "Reading" },
    { id: 3, title: "The Art of Noticing", author: "Lalena", genre: "Self-Development", status: "Plan to Read" },
    { id: 4, title: "Is it Better to speak or die?", author: "Kathrina", genre: "Self-Development", status: "Reading" }
];

function createIntroduction({ name, role, studentId }) {
    return `Hello! My name is ${name} (${studentId}), and I am an ${role}.`;
}

const formatSkills = (skillsArray) => skillsArray.join(" · ");

console.log(createIntroduction(profile));
console.log("My Web Skills:", formatSkills(profile.skills));

console.log("--- Profile Data ---");
console.table(profile);

console.log("--- Full Book Collection ---");
console.table(bookCollection);

const bookTitles = bookCollection.map((book) => book.title);
console.log("All Book Titles:", bookTitles);

const currentlyReading = bookCollection.filter((book) => book.status === "Reading");
console.log("--- Currently Reading Books ---");
console.table(currentlyReading);

const targetBook = bookCollection.find((book) => book.title === "Atomic Habits");
console.log("Found Book Object:", targetBook);