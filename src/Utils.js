export function truncateHash(hash) {
    let initStr = hash.slice(0,6);
    let lastStr = hash.slice(-4);
    return initStr + "..." + lastStr;
}