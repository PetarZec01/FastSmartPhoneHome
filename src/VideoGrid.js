import React from 'react'

export default function VideoGrid({streams}) {

  return (
    <div>
      <div id="video-grid" className="video-grid">
        {
            streams.map((stream)=>{
                return stream
            })
        }
      </div>
    </div>
  )
}
