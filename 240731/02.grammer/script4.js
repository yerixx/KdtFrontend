// for (let i = 1; i <= 5; i++) {
//   document.write(`<tr>${i}</tr>`, "<br/>");
//   for (let k = 1; k <= 5; k++) {
//     document.write(`<td>${k}</td>`);
//   }
// }
// tr행.td열

let num = 1;
document.write(`<table> </table>`);
let t = `<table border=1>`;
for (let i = 1; i <= 5; i++) {
  t += `<tr>`;
  for (let k = 1; k <= 5; k++) {
    t += `<td>${num}</td>`;
    num++;
  }
  t += `</tr>`;
}
t += `</table>`;
document.write(t);
