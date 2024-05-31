import React, { Component } from 'react';
import Newsitem from './Newsitem';

export class News extends Component {
    articles= [
        {
          "source": {
            "id": "cnn",
            "name": "CNN"
          },
          "author": "Cassandra Eldred",
          "title": "Watch Trump react to getting booed at Libertarian convention | CNN Politics",
          "description": "Former President Donald Trump was loudly and consistently booed throughout his speech to the Libertarian convention, particularly when he asked attendees to “nominate me or at least vote for me.” CNN’s Steve Contorno reports.",
          "url": "https://www.cnn.com/2024/05/26/politics/video/donald-trump-libertarian-convention-booed-heckled-contorno-ctmwknd-vpx",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/booed.jpg?c=16x9&q=w_800,c_fill",
          "publishedAt": "2024-05-26T19:58:36.312Z",
          "content": "Former President Donald Trump was loudly and consistently booed throughout his speech to the Libertarian convention, particularly when he asked attendees to nominate me or at least vote for me. CNN's… [+23 chars]"
        },
        {
          "source": {
            "id": "msnbc",
            "name": "MSNBC"
          },
          "author": "Ruth Ben-Ghiat",
          "title": "Americans' denial about Trump's authoritarianism is deeper than ever",
          "description": "Trump has been clear about what kind of president he will be if he returns to the White House. Yet many in America are treating this election as politics as usual.",
          "url": "https://www.msnbc.com/opinion/msnbc-opinion/trump-authoritarianism-american-denial-2024-rcna153962",
          "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-05/240523-the-bronx-donald-trump-rally-ac-949p-84daba.jpg",
          "publishedAt": "2024-05-26T10:00:00Z",
          "content": "Republican presidential candidate Donald Trump, who incited a violent insurrection in January 2021 to try and remain in office illegally after he lost the 2020 election, has been clear about what kin… [+5940 chars]"
        },
        
        {
          "source": {
            "id": "the-jerusalem-post",
            "name": "The Jerusalem Post"
          },
          "author": null,
          "title": "Congresswoman Nita Lowey: I am proud to stand with Israel",
          "description": "Gantz: Security of Israel is above politics; PA: This is a crime.",
          "url": "https://www.jpost.com/Arab-Israeli-Conflict/Gantz-Security-of-Israel-is-above-politics-Palestinians-This-is-a-crime-607595",
          "urlToImage": "https://images.jpost.com/image/upload/f_auto,fl_lossy/t_Article2016_ControlFaceDetect/448812",
          "publishedAt": "2019-11-13T04:41:00Z",
          "content": "US Ambassador David M. Friedman said the US stands “with our friend and ally Israel at this critical moment” on social media on Tuesday after roughly 170 rockets were fired on Israel from the Gaza St… [+6160 chars]"
        }
      ]
     constructor(){
        super();
        this.state={
            articles:this.articles
        }
     }
    async componentDidMount(){
        let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=b457d2198ce64d08a0b01a5b57d90857";
        let data=await fetch(url);
        let parsedata= await data.json()
        this.setState=({articles : parsedata.articles})
     }
  render() {
    return (
      <div className='container my-3'>
        <h2>Trending Headlines</h2>
        <div className="row">
            {this.state.articles.map((ele)=>{
                return  <div key={ele.url} className="col m-4">
                <Newsitem  title={ele.title?ele.title.slice(0,45):""}imgurl={ele.urlToImage} newsurl={ele.url} descrip={ele.description?ele.description.slice(0,88):""} />
              </div>
            })}
        </div>
        <div className="container">
        <button type="button" className="btn btn-dark">Dark</button>
        <button type="button" className="btn btn-dark">Dark</button>
        </div>
      </div>
    );
  }
}

export default News;
