# Dayout

## Technologies used

- React
- Axios
- Webpack
- TFL API
- Open Weather API
- Skiddle API
- Mapbox-gl
- Dotenv
- GitHub
- Moment
- Bulma

To run the code for this app in a local environment setting simply run `npm start` and remember to include api keys for Skiddle, Mapbox and OpenWeather.

## DayOut

Dayout is a simple application demo that shows the user festivals that are currently ongoing in London. It also displays the current weather and tube service status.

This a functional component update to an application I had created in 2021 that previously used classical React components.

![dayout1](https://user-images.githubusercontent.com/29276064/209124879-a2b1524c-4b9a-4967-9795-44b6be7062c9.png)

<br/>
Upon selecting an event, the user may read its description while details of the venue are presented on a map using the Mapbox-gl API.
<br/>
<br/>

![dayoutshow](https://user-images.githubusercontent.com/29276064/209125148-fddf7e7f-efc1-41c5-a87f-1092b79ad5ec.png)

## Process

After I decided to create a web app for events, I brainstormed the functionality I would have for the site.

- A homepage
- An index page which displayed festivals, the day's weather and TFL conditions
- Each event should have a show page of information, which could include a map showing the locale of the venue

I then began the project by researching which APIs were user friendly.
I started testing the APIs in Postman to get an idea what data was available before deciding which had the data I wanted.

![eventrequest](https://user-images.githubusercontent.com/29276064/57707002-c4aa2880-765e-11e9-9dca-af4a4cdad37a.png)

For pulling event data, I decided on the Skiddle API and narrowed the search down to just festivals. For weather information, I chose the Open Weather API for data on the weather in London. For tube service statuses, Transport For London (TFL)'s API was very handy as it was open source and did not require an API Key for requests.

After getting the information I required from the APIs, I drew wireframes out for each page in the application.

## Challenges

The main challenge of the project was working with public APIs and combining them together. Mapbox-gl was tricky to navigate at first, and considerable time was taken to read the documentation provided on their website. For instance, I had to pass the data from Skiddle API of festival names and locations to Mapbox.

```
 useEffect(() => {
    let map = new mapboxgl.Map({
      container: node.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [Number(lng), Number(lat)],
      zoom: zoom,
    });
    map.on("move", () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });
  }, [lat, lng]);
```

Dates and times provided by APIs such as Skiddle occasionally needed to be reformatted to make the data more readable. Moment was a library converted that helped to to make the conversion of dates easier.

## Future features

- A future feature could include the site providing traffic conditions for vehicles
- To expand on the site more event types could be created, not just festivals
- Use MapBoxGL to provide walking directions to the event
