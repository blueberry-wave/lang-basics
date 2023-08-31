export class GlobalLogger {
    static logGlobalsToConsole() {
        for (let email of CONTACT_EMAIL_ARRAY) {
            Log(email);
        }
    }
}
window.onload = () => {
    GlobalLogger.logGlobalsToConsole();
};
function Log(obj) {
    console.log(obj);
}
