export default class Api {

  getSearchID = async () => {
    const id = await fetch('https://aviasales-test-api.kata.academy/search').then((res) => res.json()).catch(err=> err)
        
    return id.searchId  
  }

  getTickets= async(id) => {

    const tickets = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`).then(res => res.json()).catch(err => err)

    return tickets
  }
}