import { ProxyState } from "../AppState.js"
import { Quote } from "../Models/Quote.js"
import { sandboxQuoteApi } from "../Services/AxiosService.js"




class QuotesService {

  async getQuote() {
    const res = await sandboxQuoteApi.get('quotes')
    ProxyState.quote = new Quote(res.data)
  }
}

export const quotesService = new QuotesService()