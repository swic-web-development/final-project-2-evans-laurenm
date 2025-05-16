import store from './store'

export async function fetchJokes() {
  store.setState({ isLoading: true, error: null })

  try {
    const jokeResponse = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json',
      },
    })
    const jokeData = await jokeResponse.json()

    store.setState({
      joke: jokeData.joke,
      isLoading: false,
    })
  } catch (error) {
    store.setState({
      error: error.message || 'Failed to make you smile.',
      isLoading: false,
      joke: '',
    })
  }
}
