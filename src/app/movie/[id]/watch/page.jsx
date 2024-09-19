"use client";
import * as React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import movieAPIs from "@/apis/movieAPIs";

const Watch = ({ params }) => {
  const movieId = params.id;
  const [video, setVideo] = React.useState([]);
  const [mainVideo, setMainVideo] = React.useState({});
  React.useEffect(() => {
    async function fetchVideo() {
      try {
        const listVideo = await movieAPIs.getVideosByMovie(movieId);
        let firstVideo = listVideo.data.results[0];
        let sumvideo = listVideo.data.results.slice(1, 6);
        setMainVideo(firstVideo);
        setVideo(sumvideo || []);

        console.log(video);
      } catch (error) {
        console.log(error);
      }
    }
    fetchVideo();
  }, []);
  return (
    <div className="container mx-auto mt-[64px] mb-[128px]">
      <div className="flex h-[720px] max-h-[720px] gap-4">
        <div className="w-full h-full">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${mainVideo.key}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>
        <ScrollArea className="w-[450px] p-0">
          <div className="gap-4">
          {video &&
            video.map((item, index) => (
              <div key={index}>
                <div className="p-2 bg-[#1a1a1a] rounded-lg mb-4">
                  <div className="flex items-center gap-4">
                    <iframe
                      width="100%"
                      height="150px"
                      src={`https://www.youtube.com/embed/${item.key}`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="rounded-lg"
                    ></iframe>
                  </div>
                </div>
              </div>
            ))}
            </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default Watch;
