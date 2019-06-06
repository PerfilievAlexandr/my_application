export function generateId() {
    return Date.now();
}

export function idAdder(data) {
    const dataWithIdArr = Object.entries(data).map((event) => {
        return [event[0], {...event[1], id: event[0]}] 
    });
    return Object.fromEntries(dataWithIdArr)
};