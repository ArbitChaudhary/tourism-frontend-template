import React from 'react'

const SearchedList = () => {
  return (
    <div className='searched-list-container'>
        <div className="container">
            <h3>110 results from the search</h3>
            <div className="search-lists-box">
                <div className="search-list-left">
                    <div className="search-lists">
                        <div className="search-list">
                            <div className="search-list-img">
                                <img src="https://c0.wallpaperflare.com/preview/982/171/717/travel-architecture-religion-outdoors.jpg" alt="" />
                            </div>
                            <div className="search-list-content">
                                <div className="search-list-name">Bhutan</div>
                                <div className="search-list-rating"><span>4.5</span><span>superb</span></div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Distinctio vel excepturi ipsa dignissimos nesciunt maiores.
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Distinctio vel excepturi ipsa dignissimos nesciunt maiores.
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Distinctio vel excepturi ipsa dignissimos nesciunt maiores.
                                </p>
                                <div className="search-list-bottom-content"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="search-list-right"></div>
            </div>
        </div>
      Searched List
    </div>
  )
}

export default SearchedList
