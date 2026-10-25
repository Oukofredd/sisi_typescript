export function formatKes(amount) {
    return "KES " + amount.toLocaleString('en-KE');
}
export function totalKes(amounts) {
    let total = 0;
    for (let amount of amounts) {
        total += amount;
    }
    return total;
}
const roads = Number('150000');
const water = 100000;
const total = roads + water;
