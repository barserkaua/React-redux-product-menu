export default class RestoService{
    _apiBase = 'http://localhost:3000';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok){
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }
        return await res.json();
    }
    // returns an array of data
    async getCommentsItems () {
        return await this.getResource(`/comments/`);
    }
    // returns an array of data
    async getMenuItems () {
        return await this.getResource(`/menu/`);
    }
}

const postData = async (url, data) => {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });
    return await res.json(); // this is proms
}

export {postData}