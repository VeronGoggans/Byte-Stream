import { fetchData } from "./request.js";
import { RequestBuilder } from "./requestBuilder.js";

export class HttpModel {

    async add(endpoint, object) {
        const options = RequestBuilder.buildPostOptions(object)
        return fetchData(endpoint, options)
    }

    /**
     * Specifiy the endpoint you want to reach.
     * @param {String} endpoint - May include a Id of some sort 
     */
    async get(endpoint) {
        const options = RequestBuilder.buildGetOptions();
        return fetchData(endpoint, options)
    }

    async update(endpoint, object) {
        const options = RequestBuilder.buildPutOptions(object)
        return fetchData(endpoint, options)
    }

    /**
     * 
     * Specifiy the endpoint you want to reach.
     * @param {String} endpoint - May include a Id of some sort
     */
    async delete(endpoint, object = null) {
        const options = RequestBuilder.buildDeleteOptions(object);
        return fetchData(endpoint, options)
    }

    async patch(endpoint) {
        const options = RequestBuilder.buildPatchOptions()
        return fetchData(endpoint, options)
    }
}