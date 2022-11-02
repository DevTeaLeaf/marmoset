import React from "react";
import closeModal from "../../assets/img/close_modal.png";
import { Link } from "react-router-dom";

import {
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
} from "react-share";

export const Share = () => {
  const shareUrl = "marmosettoken.com";
  return (
    <>
      <div className="management-modal min-w-[100vw] min-h-[100vh]">
        <div className="management-modal">
          <Link to="/lottery">
            <img
              src={closeModal}
              alt="close"
              className="absolute cursor-pointer top-[25px] right-[22px]"
            />
          </Link>
          <div className="px-[80px] py-[50px] flex items-center justify-center">
            <div>
              <RedditShareButton url={shareUrl}>
                <RedditIcon size={40} />
              </RedditShareButton>
            </div>
            <div className="mx-5">
              <TelegramShareButton url={shareUrl}>
                <TelegramIcon size={40} />
              </TelegramShareButton>
            </div>

            <div>
              <TwitterShareButton url={shareUrl}>
                <TwitterIcon size={40} />
              </TwitterShareButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
