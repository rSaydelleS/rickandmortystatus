import axios from "axios";

const baseUrl = `https://rickandmortyapi.com/api/character`
const searchUrl = `https://rickandmortyapi.com/api/character/?name=`

export class info {
    static getCharacters(pagina) {
        return axios.get(baseUrl, {
            params:{
                page: pagina,
                limit:20
            }
        });
    }

    static getChar(name) {
        return axios(searchUrl + name)
    }
}