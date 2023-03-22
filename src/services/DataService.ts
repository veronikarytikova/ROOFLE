const BASE_URL = 'https://hacker-news.firebaseio.com/v0';
const GET_NEWS_IDS_URL = `${BASE_URL}/newstories.json?print=pretty&orderBy="$key"&limitToFirst=100`;

const getData = async () => {
  try {
    const res = await fetch(`${GET_NEWS_IDS_URL}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
    });
    return await res.json();
  } catch (error) {
    console.error(error);
  }
}

const getNewsById = async (id: number) => {
  try {
    const res = await fetch(`${BASE_URL}/item/${id}.json?print=pretty`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return await res.json();
  } catch (error) {
    console.error(error);
  }
}


export default { getData, getNewsById }