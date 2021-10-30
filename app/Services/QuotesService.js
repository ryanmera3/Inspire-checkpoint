import { ProxyState } from "../AppState.js"
import { Quote } from "../Models/Quote.js"
import { sandboxQuoteApi } from "../Services/AxiosService.js"




class QuotesService {
  constructor() {
    console.log('QuotesService is working');
  }
  async getQuote() {
    const res = await sandboxQuoteApi.get('quotes')
    ProxyState.quote = new Quote(res.data)
    console.log(ProxyState.quote);
  }
}

export const quotesService = new QuotesService()