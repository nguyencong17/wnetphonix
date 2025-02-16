import { PlayCircleIcon, PlayIcon } from "@heroicons/react/24/solid";
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
            <div className="group relative">
              <Image
                src={movie.thumb_url || movie.poster_url || ""}
                alt={movie.name}
                width={400}
                height={350}
                className="rounded-lg  w-full aspect-[3/4] object-cover z-1"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg transtion-all"> 
                <PlayCircleIcon className="h-12 w-12 text-[rgba(255,255,255,.8)]" />
              </div>
            </div>
            <div className=" mt-4 text-white rounded-b-lg flex-1 gap-6 justify-between h-full">
              <div>
                <h4 className="text-[16px] mb-1 line-1">{movie.name}</h4>
                <p className="font-medium text-[14px]">
                  {movie.current_episode == "FULL"
                    ? "Full"
                    : movie.current_episode}
                </p>
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
