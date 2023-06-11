import axios from 'axios'
//creating an axios instance here,Each instance is a separate client that can carry its own configuration and options like base URLs, timeouts, and headers. Then, we can reuse the configuration for API calls using the same instance.
const instance= axios.create({
    baseURL:"https://api.themoviedb.org/3/"
})
export default instance;