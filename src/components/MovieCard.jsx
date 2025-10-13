import { IMG_CDN } from "../utils/constant"

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className="w-48">
        <img alt="" src={IMG_CDN+posterPath} />
    </div>
  )
}

export default MovieCard