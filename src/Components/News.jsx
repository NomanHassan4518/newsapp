import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import ClipLoader from "react-spinners/ClipLoader";
import { useState, CSSProperties } from "react";


export default class News extends Component {
  article = [
    {
      source: {
        id: null,
        name: "CNA",
      },
      author: null,
      title:
        "Analysis:For EV batteries, lithium iron phosphate narrows the gap with nickel, cobalt",
      description:
        "DETROIT : As the auto industry scrambles to produce more affordable electric vehicles, whose most expensive components are the batteries, lithium iron phosphate is gaining traction as the EV battery material of choice. The popularity of the chemical compound …",
      url: "https://www.channelnewsasia.com/business/analysisfor-ev-batteries-lithium-iron-phosphate-narrows-gap-nickel-cobalt-3579511",
      urlToImage:
        "https://onecms-res.cloudinary.com/image/upload/s--GerIVsYv--/fl_relative,g_south_east,l_one-cms:core:watermark:reuters,w_0.1/f_auto,q_auto/c_fill,g_auto,h_676,w_1this.props.pageSize0/v1/one-cms/core/this.props.pageSize23-06-22t050413z_1_lynxmpej5l045_rtroptp_3_autos-electric-batteries.jpg?itok=kiv4AuQC",
      publishedAt: "this.props.pageSize23-06-22T05:04:13Z",
      content:
        "DETROIT : As the auto industry scrambles to produce more affordable electric vehicles, whose most expensive components are the batteries, lithium iron phosphate is gaining traction as the EV battery … [+3988 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "Paul Lienert",
      title:
        "Analysis-For EV batteries, lithium iron phosphate narrows the gap with nickel, cobalt",
      description:
        "As the auto industry scrambles to produce more affordable electric vehicles, whose most expensive components are the batteries, lithium iron phosphate is...",
      url: "https://finance.yahoo.com/news/analysis-ev-batteries-lithium-iron-050413475.html",
      urlToImage:
        "https://media.zenfs.com/en/reuters-finance.com/c17dae0210b54c0abf67017bthis.props.pageSizee613fa",
      publishedAt: "this.props.pageSize23-06-22T05:04:13Z",
      content:
        "By Paul Lienert\r\nDETROIT (Reuters) - As the auto industry scrambles to produce more affordable electric vehicles, whose most expensive components are the batteries, lithium iron phosphate is gaining … [+4069 chars]",
    },
    {
      source: {
        id: null,
        name: "Marketscreener.com",
      },
      author: "Reuters",
      title:
        "For EV batteries, lithium iron phosphate narrows the gap with nickel, cobalt",
      description:
        "(marketscreener.com) As the auto industry\nscrambles to produce more affordable electric vehicles, whose\nmost expensive components are the batteries, lithium iron\nphosphate is gaining traction as the EV battery material of\nchoice.\n The popularity of the chemic…",
      url: "https://www.marketscreener.com/quote/commodity/LME-NICKEL-CASH-16165/news/For-EV-batteries-lithium-iron-phosphate-narrows-the-gap-with-nickel-cobalt-44163011/",
      urlToImage:
        "https://img.zonebourse.com/reuters/this.props.pageSize22-08/this.props.pageSize22-08-09T180855Z_1_LYNXMPEI780V5_RTROPTP_3_FORD-MOTOR-PRICES.JPG",
      publishedAt: "this.props.pageSize23-06-22T05:00:00Z",
      content:
        "DETROIT, June 22 (Reuters) - As the auto industry\r\nscrambles to produce more affordable electric vehicles, whose\r\nmost expensive components are the batteries, lithium iron\r\nphosphate is gaining tract… [+4148 chars]",
    },
    {
      source: {
        id: null,
        name: "Marketscreener.com",
      },
      author: "Reuters",
      title:
        "As electric cars take off, makers pledge $14.3 billion for US lithium iron phosphate",
      description:
        "(marketscreener.com) Interest and investment in lithium\niron phosphate battery cells and materials, used to power\nelectric vehicles, continue to climb in the United States. LFP\nis a lower-cost competitor to nickel cobalt manganese cells.\n Seven companies have…",
      url: "https://www.marketscreener.com/quote/stock/ICL-GROUP-LTD-6491698/news/As-electric-cars-take-off-makers-pledge-14-3-billion-for-US-lithium-iron-phosphate-44163009/",
      urlToImage: "https://www.marketscreener.com/images/twitter_MS_fdnoir.png",
      publishedAt: "this.props.pageSize23-06-22T05:00:00Z",
      content:
        "June 22 (Reuters) - Interest and investment in lithium\r\niron phosphate (LFP) battery cells and materials, used to power\r\nelectric vehicles, continue to climb in the United States. LFP\r\nis a lower-cos… [+14this.props.pageSize chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "ETMarkets.com",
      title: "ICICI Pru Life shares rise 1.01% as Sensex slides",
      description:
        "A total of 24,926 shares changed hands on the counter till 10:10AM (IST)",
      url: "https://economictimes.indiatimes.com/markets/stocks/stock-watch/icici-pru-life-shares-rise-1-01-as-sensex-slides/articleshow/101179910.cms",
      urlToImage:
        "https://img.etimg.com/thumb/msid-82267819,width-1070,height-580,imgsize-142669,overlay-etmarkets/photo.jpg",
      publishedAt: "this.props.pageSize23-06-22T04:40:30Z",
      content:
        "Local Indices End at Record Peaks on HDFC, IT GainsIndias key stock benchmarks closed at record highs amid choppy trade on Wednesday, bucking the bearish mood in other Asian markets, as merger-bound … [+633 chars]",
    },
    {
      source: {
        id: null,
        name: "Just Jared",
      },
      author: "Just Jared",
      title: "Mark Zuckerberg Agrees to Fight Elon Musk in Cage Match",
      description:
        "Mark Zuckerberg is ready to take on Elon Musk. On Tuesday night (June this.props.pageSize), the 51-year-old Tesla CEO jokingly said that he’d be up for fighting Mark in a cage match. A day later, Mark responded with a post on Instagram. Keep reading to find out what he said… …",
      url: "https://www.justjared.com/this.props.pageSize23/06/22/mark-zuckerberg-agrees-to-fight-elon-musk-in-cage-match/",
      urlToImage: "https://i.insider.com/6259707f6e3336001926cbd0?width=700",
      publishedAt: "this.props.pageSize23-06-22T04:37:27Z",
      content:
        "Mark Zuckerberg is ready to take on Elon Musk. \r\nOn Tuesday night (June this.props.pageSize), the 51-year-old Tesla CEO jokingly said that he’d be up for fighting Mark in a cage match. \r\nA day later, Mark responded w… [+648 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      article: [],
      loading:false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =`https://newsapi.org/v2/top-headlines?country=us&apiKey=b4e92df4ad63422e820ec3184968894f&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({loading:false})

    this.setState({ article: parsedData.articles });
    this.setState({
      article: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  handleNextClick = async () => {
    console.log("Next");

    if (!(this.state.page + 1 > Math.ceil(this.setState.totalResults / this.props.pageSize))) {

      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=b4e92df4ad63422e820ec3184968894f&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})

      this.setState({loading:true})
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({loading:false})

      this.setState({
        page: this.state.page + 1,
        article: parsedData.articles,
      });
    }
  };

  handlePrevClick = async () => {
    console.log("Previous");

    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=b4e92df4ad63422e820ec3184968894f&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})

    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({loading:false})

    this.setState({
      page: this.state.page - 1,
      article: parsedData.articles,
    });
  };

  render() {
    return (
      <div className="container my-3">
         <h1  className="text-center">MonkeyNews - Top Headlines</h1>
          {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.article?.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  className="card-img-top"
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://www.shutterstock.com/image-photo/global-business-structure-networking-analysis-260nw-2151657341.jpg"
                  }
                  newUrl={element.url}
                />
              </div>
            );
          })}
        </div>

        <div className="container d-flex justify-content-between">

<button disabled={this.state.page<=1} className="btn btn-primary" onClick={this.handlePrevClick}>&larr; Previous</button>
<button disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))} className="btn btn-success" onClick={this.handleNextClick}>Next &rarr;</button>

</div>
      </div>
    );
  }
}
