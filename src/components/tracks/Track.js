import React from 'react'
import { Link } from 'react-router-dom'

function Track(props) {
  const { track } = props
  return (
    <div className='col-12 col-md-6'>
      <div className='card mb-4 shadow-sm'>
        <div className='card-body'>
          <h5>{track.artist_name}</h5>
          <p className='card-text'>
            <strong>
              <i className='fa fa-play' /> Track
            </strong>
            : {track.track_name}
            <br />
            <strong>
              <i className='fa fa-compact-disk' /> Album
            </strong>
            : {track.album_name}
          </p>
          <Link
            to={`lyrics/track/${track.track_id}`}
            className='btn btn-block btn-dark'>
            <i className='fa fa-chevron-right' /> View Lyrics
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Track
