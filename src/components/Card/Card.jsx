import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

export const Card = (props) => {
  const { movie } = props;

  // date
  const dateString = movie.release_date;
  const year = moment(dateString).year();

  return (
    <div>
      <Link href={`/movie/${movie.slug}`}>
        <div key={movie.id} className="rounded-[8px] h-full">
          <div className="w-full h-full flex flex-col relative">
            <Image
              src={movie.thumb_url || movie.poster_url || ''}
              alt={movie.name}
              width={400}
              height={350}
              className="rounded-lg  w-full max-h-[300px] object-cover z-1"
            />
            
            <div className=" mt-4 text-white rounded-b-lg flex-1 gap-6 justify-between h-full">
              <div>
                <h4 className="text-[16px] mb-2 line-1">{movie.name}</h4>
                <p className="font-bold">{movie.current_episode == 'FULL' ? 'Full' : movie.current_episode}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

Card.propTypes = {
  movie: PropTypes.object,
};
