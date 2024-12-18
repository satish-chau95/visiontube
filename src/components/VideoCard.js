import React from "react";
import {
  numFormatter,
} from "../utils/constants";
import moment from "moment/moment";

const VideoCard = ({
  thumbnail,
  title,
  channelTitle,
  releaseDate,
  viewsCount,
}) => {
 
  return (
    <div className="flex flex-col gap-1 shadow-lg w-[320px] h-[260px]   rounded-xl  ">
      <div>
        <img className="rounded-xl " src={thumbnail} alt="thumbnail" />
      </div>
      <ul className="flex flex-col  p-2 w-full">
        <li className="font-semibold text-md   truncate overflow-hidden">
          {title}
        </li>
        <li className="text-sm text-gray-500 truncate">{channelTitle}</li>
        <ul className="flex gap-3 text-xs">
          <li>{numFormatter(viewsCount)} views</li>
          <li>{moment(releaseDate).fromNow()}</li>
        </ul>
      </ul>
    </div>
  );
};

// Add HOC to add additional components to card
// export const AddVideoCard = ({ video }) => {
//   return (
//     <div className="p-1 border-2 border-red-800">
//       <a href="https://www.google.com" target="blank">
//         <VideoCard video={video} />
//       </a>
//     </div>
//   );
// };

export default VideoCard;
