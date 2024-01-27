export default class DestinationsModel {
  #pointsApiService = null;
  #destinations = [];

  constructor({pointsApiService}) {
    this.#pointsApiService = pointsApiService;
  }

  get destinations() {
    return this.#destinations;
  }

  async init() {
    try {
      const destinations = await this.#pointsApiService.destinations;
      this.#destinations = destinations;
    } catch(err) {
      this.#destinations = [];
    }
  }

  getDestinationById (id) {
    const allDestinations = this.destinations;

    return allDestinations.find((item)=> item.id === id);
  }
}
