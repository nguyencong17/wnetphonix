import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

export const Card = (props) => {
  const { movie } = props;

  // date
  const dateString = movie.release_date;
  const year = moment(dateString).year();

  // Movie name
  const title = movie.title;
  const moviename = title.length > 15 ? `${title.slice (0, 15)}...` : title;
  return (
    <div>
      <Link href={`/movie/${movie.id}`}>
        <div key={movie.id} className="p-5 bg-[#1A1A1A] rounded-[8px] relative">
          <div className="w-full pb-[177%] relative">
            <Image
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
              width={400}
              height={600}
              className="rounded-lg absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover"
            />
            <div className="p-4 bg-[rgba(0,0,0,.9)] absolute bottom-0 left-0 right-0 text-white rounded-b-lg flex items-center gap-6 justify-between">
              <div>
                <h4 className="text-[16px] mb-2">{moviename}</h4>
                <p className="font-medium">{year}</p>
              </div>
              <div className="flex gap-1">
                <p className="text-yellow-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </p>
                <p className="font-bold">{Math.round(movie.vote_average * 10) / 10}</p>
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
