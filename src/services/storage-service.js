export default function StorageService() {
    return {
        read(name) {
            let item = localStorage.getItem(name);
            let result = [];
            try {
                result = JSON.parse(item);
            } catch (e) {
                console.error("name is not in storage", e)
            }
            return result;
        },
        save(key, data) {
            return localStorage.setItem(key, JSON.stringify(data))
        }
    }
}