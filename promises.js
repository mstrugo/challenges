let services = {
  hotel: {
    fetch: (id) => Promise.resolve({ name: "Splendid Hotel", id: id })
  },
  user: {
    fetch: (id) => Promise.resolve({ name: "Joe Username", id: id })
  }
}

// Please make a function named "fetchDataForPage" that has the following behavior:
// 1) Fetches data from the 2 asynchronous functions listed above in "services"
// 2) Returns a single object as a response to the caller below

const fetchDataForPage = async (data) => {
  const response = {};
  await services.hotel.fetch(data.hotelId)
    .then( (res) => {
    console.log(res)
      response.hotel = res;
    })
  await services.user.fetch(data.userId)
    .then( (res) => {
      response.user = res;
    });

  return response;
};

fetchDataForPage({hotelId: "1234", userId: "456"})
  .then(({hotel, user}) => {
    if (!hotel || hotel.name != 'Splendid Hotel' || hotel.id != '1234') throw new Error('Try again')
    if (!user || user.name != 'Joe Username' || user.id != '456') throw new Error('Try again')
  })
  .then(() => console.log('Success'))
  .catch(e => console.error(e.message))
