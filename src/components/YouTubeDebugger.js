import React, { Component } from 'react'

class YouTubeDebugger extends Component {

    state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
    } 

    handleClick = (e) => {
        if (e.target.className === 'bitrate'){
            this.setState({
                settings: {
                    ...this.state.settings,
                    bitrate: 12
                }
            })
        } else if (e.target.className === 'resolution'){
            this.setState({
                settings: {
                    ...this.state.settings,
                    video: {
                        ...this.state.settings.video,
                        resolution: '720p'
                    }
                }
            })
        }
    }

    

    render(){
        return(
            <div>
                <button className='bitrate' onClick={this.handleClick}>bitrate</button>
                <button className='resolution' onClick={this.handleClick}>resolution</button>
            </div>
        )
    }
}

export default YouTubeDebugger