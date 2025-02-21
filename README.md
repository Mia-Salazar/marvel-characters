# Marvel challenge

## Live
The web is live [here](https://67b831b2ff66d1ccbfd67cb3--glistening-pastelito-1d2b92.netlify.app/)

## Comands
To run the application:
```console
npm run dev
```

To run tests:
```console
npm run test
```

To run the lintern:
```console
npm run lint:fix
```

To generate a build:
```console
npm run build
```

## API
As the marvel API has been failing, we have proceeded to use the Dragon Ball API. You can read [the documentation here](https://web.dragonball-api.com/documentation)

## Technologies
- React: Library used for the whole application
- SCSS: For styling
- Vitest: For testing
- React Query: To cache responses
- Eslint & prettier: Format and linter

## Architecture
<pre>
├───src
|   main.jsx: the root app
|   App.css: general styles
|   App.jsx: file responsible for rendering pages
│   ├───assets: static images and CSS variables
│   ├───components: React components used in pages
│   │   ├───Card
│   │   ├───CardList
│   │   ├───DetailCard
│   │   ├───FavoriteButton
│   │   ├───Header
│   │   ├───Search
│   │   ├───TransformationCard
│   │   └───TransformationList
│   ├───context: global state management with React Context API
│   └───pages: Pages made with React used for the routes
│       ├───Detail
│       ├───Favorites
│       └───Home
│   └───services: API calls
│        └───hooks: react query hooks
</pre>
