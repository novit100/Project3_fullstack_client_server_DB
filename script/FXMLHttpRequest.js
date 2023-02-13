class FXMLHttpRequest {

    constructor(args) {
        if (args) {
            let { url, data, done, progress, duration
            } = args

            this.url = url
            this.data = data
            this.done = done
            this.progress = progress
            this.duration = duration
        }

        this.open()
    }

    open(method, key, value = '') {
        if (method === 'GET') {
            return localStorage.getItem(key);
        }

        if (method === 'GETall') {
            var record = [];
            for (i = 0; i < localStorage.length; i++) {
                record[i] = (localStorage.getItem(key[i]));
            }
        }

        if (method === 'POST') {
            localStorage.setItem(key, JSON.stringify(value));
        }

        if (method === 'PUT') {
            localStorage.setItem(key, JSON.stringify(value));
        }
        if (method === 'DELETE') {
            localStorage.removeItem(key);

        }
    }


    /**
      Get the localStorage data then put it on private variable
    */
    getInternStorage() {
        if (localStorage.fakeRequest) internStorage = JSON.parse(localStorage.fakeRequest)
    }


    /**
      Set the localStorage data then put it on private variable
    */
    setLocalStorage() {
        localStorage.fakeRequest = JSON.stringify(internStorage)
    }
}