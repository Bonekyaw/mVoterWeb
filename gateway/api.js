import axios from 'axios';

class MaePaySohAPI {
  constructor(token) {
    this.token = token;
    this.api = axios.create({
      baseURL: process.env.BASE_URL,
      timeout: 10000,
      headers: {
        'api-token': token,
      },
    });
  }

  static getCandidates({
    wardId,
    house,
    name,
    itemsPerPage = 25,
    page,
  }) {
    return this.api.get('/candidates', {
      params: {
        ward_id: wardId,
        house,
        name,
        items_per_page: itemsPerPage,
        page,
      },
    })
      .catch(console.error);
  }

  static getCandidateById(id) {
    return this.api.get(`/candidates/${id}`)
      .catch(console.error);
  }

  static getBallots() {
    return this.api.get('/ballots')
      .catch(console.error);
  }

  static getFAQ({
    page,
    itemPerPage = 25,
    name,
    category,
  }) {
    return this.api.get('/faq', {
      params: {
        page,
        item_per_page: itemPerPage,
        name,
        category,
      }
    })
      .catch(console.error);
  }

  static getFAQById(id) {
    return this.api.get(`/faqs/${id}`)
      .catch(console.error);
  }

  static getStateRegion() {
    return this.api.get('/locality/state_regions')
      .catch(console.error);
  }

  static getTownships(stateRegionPCode) {
    return this.api.get('/townships', {
      params: {
        state_region_pcode: stateRegionPCode,
      }
    })
      .catch(console.error);
  }

  static getWards(townshipPcode) {
    return this.api.get('/wards', {
      params: {
        township_pcode: townshipPcode,
      }
    })
      .catch(console.error);
  }

  static getNews({
      page,
      itemPerPage = 25,
  }) {
    return this.api.get('/news', {
      params: {
        page,
        item_per_page: itemPerPage,
      }
    })
      .catch(console.error);
  }

  getParties({
    page,
  }) {
    return this.api.get('/parties', {
      params: {
        page,
      },
    })
      .catch(console.error);
  }

  static getPartyById(id) {
    return this.api.get(`parties/${id}`)
      .catch(console.error);
  }
}

module.exports = MaePaySohAPI;
