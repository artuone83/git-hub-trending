# Github Trending Frontend App

Repository contains UI application called GitHub Trending Repositories

Application uses BACKEND from [Github Unofficial Trending API](https://github.com/huchenme/github-trending-api)

**!!! IMPORTANT !!!**

Github Unofficial Trending API is **DOWN** you can run it locally using docker. Follow README file in 
[Github Unofficial Trending API](https://github.com/huchenme/github-trending-api)
## Development
To develop this project you should:
- build BACKEND using Docker from [Github Unofficial Trending API](https://github.com/huchenme/github-trending-api)
- setup PORT for endpoints in `.env` file (by default it's PORT 8000, but if 8000 will be already allocated set `REACT_APP_BASE_URL` port accordingly to BACKEND port, otherwise you will not be able to `fetch` data from endpoints
-  run `npm install`
- and then `npm start`.



## Technologies

- ReactJS
- Redux
- TypeScript
- Styled-components (SASS)

## Code owner

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/artuone83">
        <img src="https://avatars3.githubusercontent.com/u/32961497?v=4" width="100px;" alt="Artur Woźniak"/>
        <br />
        <sub><b>Artur Woźniak</b></sub>
      </a>
    </td>
  </tr>
</table>
